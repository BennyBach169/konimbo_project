package com.example.Konimbo.Task;

import com.example.Konimbo.Task.beans.Fields;
import com.example.Konimbo.Task.beans.Record;
import com.example.Konimbo.Task.beans.Records;
import com.example.Konimbo.Task.services.AirTableService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class KonimboTaskApplication {

	public static void main(String[] args) {
		 ApplicationContext ctx = SpringApplication.run(KonimboTaskApplication.class, args);

//		AirTableService airTableService=ctx.getBean(AirTableService.class);
//
//
//        try {
//			Record record = airTableService.getRecords().getRecords().get(0);
//			System.out.println(record);
//			Fields fields = record.getFields();
//			fields.setName("shlomo");
//			record.setFields(fields);
//			System.out.println(record);
//			airTableService.deleteRecord(record.getId());
//        } catch (Exception e) {
//			System.out.println(e.getMessage());
//        }
    }

}
