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
    // let username = 'babyyoda';
    // let password = 'mando';

    // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password); // Basic Auth Constructor

    return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
      // {
      //   headers : {
      //     authorization: basicAuthHeader // Using header to make a request
      //   }
      // }
    );
  }
}

export default new HelloWorldService()