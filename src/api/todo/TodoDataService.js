import axios from 'axios';

class TodoDataService {
  // Requesting all Todos from the Spring Boot Backend
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/list`);
  }

  // Delete a ToDo Item from the Backend
  deleteToDo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/list/${id}`);
  }

  // Update a Todo
  updateToDo(name, id, todo) {
    return axios.put(`http://localhost:8080/users/${name}/list/${id}`, todo);
  }

  // Create a new item
  createToDo(name, todo) {
    return axios.post(`http://localhost:8080/users/${name}/list/`, todo);
  }

  // Get a Single Todo Item
  retrieveToDo(name, id) {
    return axios.get(`http://localhost:8080/users/${name}/list/${id}`);
  }
}

export default new TodoDataService()