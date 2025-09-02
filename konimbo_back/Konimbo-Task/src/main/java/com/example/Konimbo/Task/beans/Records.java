package com.example.Konimbo.Task.beans;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Records {
    private List<Record> records;

    public Records() {
    }

    public Records(List<Record> records) {
        this.records = records;
    }

    public List<Record> getRecords() {
        return records;
    }

    public void setRecords(List<Record> records) {
        this.records = records;
    }

    @Override
    public String toString() {
        return "Records{" +
                "records=" + records +
                '}';
    }
}
