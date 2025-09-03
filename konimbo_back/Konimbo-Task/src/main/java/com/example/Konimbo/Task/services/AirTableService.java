package com.example.Konimbo.Task.services;


import com.example.Konimbo.Task.beans.Record;
import com.example.Konimbo.Task.beans.Records;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class AirTableService {

    private String apiKey;
    private String baseId;
    private String tableName = "konimbo_form";
    private String url;
    private final RestTemplate restTemplate = new RestTemplate();

    public AirTableService(
            @Value("${airtable.api.key}") String apiKey,
            @Value("${airtable.base.id}") String baseId
    ) {
        this.apiKey = apiKey;
        this.baseId = baseId;
        this.url = "https://api.airtable.com/v0/" + baseId + "/" + tableName;
    }


    public Records getRecords(){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Records> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                entity,
                Records.class
        );

        return response.getBody();
    }

    public Record getRecord(String recordId)  {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Record> response = restTemplate.exchange(
                url+"/"+recordId,
                HttpMethod.GET,
                entity,
                Record.class
        );


        return response.getBody();
    }

    public void addRecord(Record record) throws Exception {
        validateRecord(record);
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        HttpEntity<Record> entity = new HttpEntity<>(record,headers);

        ResponseEntity<Records> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                Records.class
        );
    }

    public void updateRecord(Record record){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        Record updatedRecord = new Record();
        updatedRecord.setFields(record.getFields());
        HttpEntity<Record> entity = new HttpEntity<>(updatedRecord,headers);

        ResponseEntity<Records> response = restTemplate.exchange(
                url+"/"+record.getId(),
                HttpMethod.PUT,
                entity,
                Records.class
        );
    }

    public void deleteRecord(String recordId){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                url+"/"+recordId,
                HttpMethod.DELETE,
                entity,
                String.class
        );
    }

    private void validateRecord(Record record) throws Exception {
        if(record.getFields().getName()==null || record.getFields().getName().isEmpty()){
            throw new Exception("Name cannot be empty please try again");
        }
        if(record.getFields().getEmail()==null || record.getFields().getEmail().isEmpty()){
            throw new Exception("Email cannot be empty please try again");
        }

    }


}
