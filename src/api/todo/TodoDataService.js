import axios from 'axios';

class TodoDataService {
  // Requesting all Todos from the Spring Boot Backend
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }

  // Delete a ToDo Item from the Backend
  deleteToDo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService()