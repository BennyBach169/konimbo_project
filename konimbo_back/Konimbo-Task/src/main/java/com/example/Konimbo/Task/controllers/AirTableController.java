package com.example.Konimbo.Task.controllers;

import com.example.Konimbo.Task.beans.Record;
import com.example.Konimbo.Task.beans.Records;
import com.example.Konimbo.Task.services.AirTableService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/table")
@CrossOrigin(origins = "*")
public class AirTableController {
    @Autowired
    private AirTableService airTableService;

    @GetMapping()
    public Records getAllRecords(){
        return airTableService.getRecords();
    }

    @GetMapping("{recordId}")
    public Record getOneRecord(@PathVariable String recordId){
        return airTableService.getRecord(recordId);
    }

    @PostMapping()
    public void addRecord(@RequestBody Record record) throws Exception {
        airTableService.addRecord(record);
    }

    @PutMapping()
    public void updateRecord(@RequestBody Record record){
        airTableService.updateRecord(record);
    }

    @DeleteMapping("{recordId}")
    public void deleteRecord(@PathVariable String recordId){
        airTableService.deleteRecord(recordId);
    }



}
