import axios from 'axios';
import {JPA_API_URL} from "../../Constants";

class TodoDataService {
  // Requesting all Todos from the Spring Boot Backend
  retrieveAllTodos(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/list`);
  }

  // Delete a ToDo Item from the Backend
  deleteToDo(name, id) {
    return axios.delete(`${JPA_API_URL}/users/${name}/list/${id}`);
  }

  // Update a Todo
  updateToDo(name, id, todo) {
    return axios.put(`${JPA_API_URL}/users/${name}/list/${id}`, todo);
  }

  // Create a new item
  createToDo(name, todo) {
    return axios.post(`${JPA_API_URL}/users/${name}/list/`, todo);
  }

  // Get a Single Todo Item
  retrieveToDo(name, id) {
    return axios.get(`${JPA_API_URL}/users/${name}/list/${id}`);
  }
}

export default new TodoDataService()