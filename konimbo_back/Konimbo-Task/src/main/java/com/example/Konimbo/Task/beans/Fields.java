package com.example.Konimbo.Task.beans;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;

@Component
public class Fields {


    private String name;
    private String email;
    private String phoneNumber;
    private String message;


    public Fields() {
    }

    public Fields(String name, String email, String phoneNumber, String message) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.message = message;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Fields{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
