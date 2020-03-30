package com.springreact.rest.webservices.restwebservices;

public class helloWorldBean {

	private String message;

	public helloWorldBean(String message) {
		this.message = message;
	}
	
	// Getter for Message
	public String getMessage() {
		return message;
	}

	// Setter for Message
	public void setMessage(String message) {
		this.message = message;
	}

	@Override //overriding the parent class
	public String toString() {
		return "helloWorldBean [message=" + message + "]";
	}
}