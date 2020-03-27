import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">          
          <p>Copyright &#169; 2020</p>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li><Link to="#" className="nav-link">Contact Us</Link></li>
            <li><Link to="#" className="nav-link">About Us</Link></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer