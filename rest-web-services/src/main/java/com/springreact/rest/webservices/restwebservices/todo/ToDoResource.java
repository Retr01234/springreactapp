package com.springreact.rest.webservices.restwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoResource {
	// Creating a Service
	@Autowired
	private ToDoHardCodedService todoService;
	
	@GetMapping("/users/{username}/todos") // GET Request
	public List<Todo> getAllTodos(@PathVariable String username) {
		// Thread.sleep(3000);
		return todoService.findAll();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}") // DELETE Request
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		todoService.deleteById(id);
		
		Todo todo = todoService.deleteById(id);
		
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
}
