class AuthenticationService {
  registerSuccessfulLogin(username, password) { // Our authentication service
    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authenticatedUser', username); // When user log in, save session storage
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
}

export default new AuthenticationService()
// Exporting the new Instance of the Class