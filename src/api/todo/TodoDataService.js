import axios from 'axios';
import {API_URL} from "../../Constants";

class TodoDataService {
  // Requesting all Todos from the Spring Boot Backend
  retrieveAllTodos(name) {
    return axios.get(`${API_URL}/users/${name}/list`);
  }

  // Delete a ToDo Item from the Backend
  deleteToDo(name, id) {
    return axios.delete(`${API_URL}/users/${name}/list/${id}`);
  }

  // Update a Todo
  updateToDo(name, id, todo) {
    return axios.put(`${API_URL}/users/${name}/list/${id}`, todo);
  }

  // Create a new item
  createToDo(name, todo) {
    return axios.post(`${API_URL}/users/${name}/list/`, todo);
  }

  // Get a Single Todo Item
  retrieveToDo(name, id) {
    return axios.get(`${API_URL}/users/${name}/list/${id}`);
  }
}

export default new TodoDataService()