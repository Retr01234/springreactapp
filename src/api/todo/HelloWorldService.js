import Axios from "axios";

class HelloWorldService {
  // Axios HTTP Request to the Backend
  executeHelloWorldService() {
    return Axios.get('http://localhost:8080/hello-world'); // Localhost 8080 is our Spring Boot URI
  }

  executeHelloWorldBeanService() {
    return Axios.get('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldPathVariableService(name) {
    return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}

export default new HelloWorldService()