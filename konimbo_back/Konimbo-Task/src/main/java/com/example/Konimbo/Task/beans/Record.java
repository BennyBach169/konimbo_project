package com.example.Konimbo.Task.beans;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Record {
    private String id;
    private LocalDateTime createdTime;
    @JsonProperty("fields")
    private Fields fields;


    public Record() {
    }

    public Record(String id, LocalDateTime createdTime, Fields fields) {
        this.id = id;
        this.createdTime = createdTime;
        this.fields = fields;
    }

    public Record(Fields fields) {
        this.fields = fields;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }
    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public Fields getFields() {
        return fields;
    }
    public void setFields(Fields fields) {
        this.fields = fields;
    }

    @Override
    public String toString() {
        return "Record{" +
                "id='" + id + '\'' +
                ", createdTime=" + createdTime +
                ", fields=" + fields +
                '}';
    }
}


