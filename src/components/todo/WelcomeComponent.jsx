import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {
  render() {
    return(
      <div>
        <h3>Welcome to Nudle</h3> 
        <div className="container">
          Hi, {this.props.match.params.name}. You can manage your To Do's List <Link to="/list">here</Link>.
        </div>
      </div>
    );
  }
}

export default WelcomeComponent