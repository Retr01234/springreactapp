import Axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
    // Axios HTTP Request to the Backend
    return Axios.get('http://localhost:8080/hello-world');
  }
}

export default new HelloWorldService()