package com.springreact.rest.webservices.restwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoHardCodedService {
	// Static List of ToDos
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "babyyoda", "Learn Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "babyyoda", "Learn React", new Date(), true));
		todos.add(new Todo(++idCounter, "babyyoda", "Get a FANG Job", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo save(Todo todo) { // Save/Update Method
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter); // Setting the Id + Incrementing by 1
			todos.add(todo); // Adding the Id
		} else {
			deleteById(todo.getId()); // Deleting the Id
			todos.add(todo); // Adding the new Id
		}
		
		return todo;
	}
	
	public Todo deleteById(long id) { // Delete Method
		Todo todo = findById(id);
		
		if (todo == null) {
			return null;
		}
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
}
