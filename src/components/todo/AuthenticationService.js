class AuthenticationService {
  registerSuccessfulLogin(username, password) { // Our authentication service
    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authenticatedUser', username); // When user log in, save session storage
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser'); // When user logs out, delete session storage
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');

    if(user === null) {
      return false;
    } else {
      return true;
    }
  }
}

export default new AuthenticationService()
// Exporting the new Instance of the Class