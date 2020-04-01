package com.springreact.rest.webservices.restwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import javax.servlet.Servlet;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoResource {
	// Creating a Service
	@Autowired
	private ToDoHardCodedService todoService;
	
	@GetMapping("/users/{username}/list") // GET ALL Request
	public List<Todo> getAllTodos(@PathVariable String username) {
		// Thread.sleep(3000);
		return todoService.findAll();
	}
	
	@GetMapping("/users/{username}/list/{id}") // GET SINGLE Request
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/list/{id}") // DELETE Request
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {		
		Todo todo = todoService.deleteById(id); // Setting the Service
		
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/users/{username}/list/{id}") // EDIT Request
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
		Todo todoUpdated = todoService.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/list") // POST Request to the List URI so no ID needed
	public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo createdTodo = todoService.save(todo);
		
		// Location GET URI
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
