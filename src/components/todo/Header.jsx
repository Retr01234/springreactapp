import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js';

class Header extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return(
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to="/home/babyyoda" className="navbar-brand">Nudle</Link>
          </div>
          
          <ul className="navbar-nav">
            {isUserLoggedIn && <li><Link to="/list" className="nav-link">To Do's List</Link></li>}
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn &&<li><Link to="/" className="nav-link">Login</Link></li>}
            {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);