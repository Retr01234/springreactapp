import Axios from "axios";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return Axios.get('http://localhost:8080/basicauth', 
      {
        headers: {authorization: this.createBasicAuthToken(username, password)}
      }
    );
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) { // Our authentication service
    sessionStorage.setItem('authenticatedUser', username); // When user log in, save session storage
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser'); // When user logs out, delete session storage
  }

  // Verifing that user is logged in
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');

    if(user === null) {
      return false;
    } else {
      return true;
    }
  }

  // Verifing correct username
  getLoggedInUserName() {
    let user = sessionStorage.getItem('authenticatedUser');

    if(user === null) {
      return '';
    } else {
      return user;
    }
  }

  // Intercepting All Requests using Axios
  setupAxiosInterceptors(basicAuthHeader) {
    Axios.interceptors.request.use(
      (config) => {
        if (this.isUserLoggedIn()) { // If user is logged in
          config.headers.authorization = basicAuthHeader // Display Header
        }

        return config; // Return Updated config
      }
    )
  }
}

export default new AuthenticationService()
// Exporting the new Instance of the Class