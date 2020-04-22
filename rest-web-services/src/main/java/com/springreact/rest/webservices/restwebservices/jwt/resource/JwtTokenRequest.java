package com.springreact.rest.webservices.restwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    // {
    //    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJ5eW9kYSIsImV4cCI6MTU4ODE4MDM0MSwiaWF0IjoxNTg3NTc1NTQxfQ.tvavrKIbRn2XEdyMjf9z-91mL_gAg8HeH_j6HU6L8q7zLj4jQdCYTHCeNbmPKxIw3QRTLlLNnT0Qmew6bGgx3A"
    // }


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

