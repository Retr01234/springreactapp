import Axios from "axios";
import {API_URL} from "../../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return Axios.get(`${API_URL}/basicauth`, 
      {
        headers: {authorization: this.createBasicAuthToken(username, password)}
      }
    );
  }

  executeJwtAuthenticationService(username, password) {
    return Axios.post(`${API_URL}/authenticate`,
      { // In a JWT Request we do not need any headers, instead a POST request
        username,
        password
      }
    );
  }

  createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password); // The btoa() method encodes a string in base-64
  }

  registerSuccessfulLogin(username, password) { // Our authentication service
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username); // When user log in, save session storage
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME); // When user logs out, delete session storage
  }

  // Verifing that user is logged in
  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if(user === null) {
      return false;
    } else {
      return true;
    }
  }

  // Verifing correct username
  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if(user === null) {
      return '';
    } else {
      return user;
    }
  }

  // Intercepting All Requests using Axios
  setupAxiosInterceptors(token) {
    Axios.interceptors.request.use(
      (config) => {
        if (this.isUserLoggedIn()) { // If user is logged in
          config.headers.authorization = token // Display Header
        }

        return config; // Return Updated config
      }
    )
  }
}

export default new AuthenticationService()
// Exporting the new Instance of the Class