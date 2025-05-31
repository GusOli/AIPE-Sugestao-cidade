package org.example.model;

public class Suggestion {
    private String id;
    private String name;
    private String email;
    private String suggestion;

    public Suggestion() {}

    public Suggestion(String id, String name, String email, String suggestion) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.suggestion = suggestion;

    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }
}