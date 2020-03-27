import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginFailed: false,
      loginPassed: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginClicked() {
    if(this.state.username === 'babyyoda' && this.state.password === 'mando') {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      this.props.history.push(`/home/${this.state.username}`); // Once logged in, redirect to home page
    } else {
      this.setState({loginPassed : false});
      this.setState({loginFailed : true});
    }
  }

  render() {
    return(
      <div>
        <h3>Log In</h3>
        <div className="container">
          <LoginAttempt loginFailed={this.state.loginFailed} />
          User Name:<input className="logincre" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          Password:<input className="logincre" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    );
  }
}

function LoginAttempt(props) {
  if (props.loginPassed) {
    return <div></div>;
  }
  else if(props.loginFailed) {
    return <div>Invalid Login Credentials</div>;
  }
  else {
    return null;
  }
}

export default LoginComponent