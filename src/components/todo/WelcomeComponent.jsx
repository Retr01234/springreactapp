import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    
    this.state = {
      welcomeMessage : '',
      errorMessage : ''
    }

    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
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
          {this.state.errorMessage}
        </div>
      </div>
    );
  }

  // Method to return Backend Server Message

  // retrieveWelcomeMessage() {
  //   HelloWorldService.executeHelloWorldService().then(response => this.handleSuccessfulResponse(response));
  // }

  // retrieveWelcomeMessage() {
  //   HelloWorldService.executeHelloWorldBeanService().then(response => this.handleSuccessfulResponse(response));
  // }

  //Our Axios Promise to complete our Async Operation
  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldPathVar(this.props.match.params.name)
    .then(response => this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    this.setState({
      welcomeMessage: response.data.message
    });
  }

  handleError(error) {
    this.setState({
      errorMessage: error.response.data.message
    });
  }
}

export default WelcomeComponent