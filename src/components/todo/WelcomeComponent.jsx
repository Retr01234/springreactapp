import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    
    this.state = {
      welcomeMessage : ''
    }

    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }

  render() {
    return(
      <div>
        <h3>Welcome to Nudle</h3>

        <div className="container">
          Hi, {this.props.match.params.name}. You can manage your To Do's List <Link to="/list">here</Link>.
        </div>

        <div className="container">
          Click here to get a Custom Message.
          <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Custom Message</button>
        </div>

        <div className="container">
          {this.state.welcomeMessage}
        </div>
      </div>
    );
  }

  // Method to return Backend Server Message
  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
    .then( response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.setState({
      welcomeMessage: response.data
    });
  }
}

export default WelcomeComponent