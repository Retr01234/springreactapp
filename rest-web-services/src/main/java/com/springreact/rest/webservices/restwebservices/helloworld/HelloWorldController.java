package com.springreact.rest.webservices.restwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
//Annotation is used to create RESTful web services using Spring MVC
@CrossOrigin(origins="http://localhost:4200") // http localhost 4200 - React
public class HelloWorldController {
	// GET Method
	// URI - /Hello World
	// Method to return Hello World
	
	@GetMapping(path="/hello-world") // Can also be PostMapping
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public helloWorldBean helloWorldBean() {
		return new helloWorldBean ("Hello World Bean");
	}
	
	// Whatever variable gets called gets mapped in the URI - {name}
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public helloWorldBean helloWorldPathVar(@PathVariable String name) {
		throw new RuntimeException("Hmm, something went wrong"); // When there is a mistake with the URI or anything else, it throws an error
		// return new helloWorldBean (String.format("Hello World, %s", name));
	}
}
