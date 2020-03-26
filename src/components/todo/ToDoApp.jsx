import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './ToDoApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoApp extends Component {
  render() {
    return(
      <div className="ToDoApp">
        <Router>
          <Header />
          <Switch> {/* When none of the URLs lsited below are called, then show the erro */}
            <Route path="/" exact component={LoginComponent}></Route> {/*When using 'exact', it sets a strict setting like !important */}
            <Route path="/home/:name" component={WelcomeComponent}></Route>
            <Route path="/list" component={ListToDosComponent}></Route>}
            <Route path="/logout" component={LogoutComponent}></Route>
            <Route component={ErrorComponent} /> {/* When the URL is not recognized then show the Error Component */}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to="/home/babyyoda" className="navbar-brand">Nudle</Link>
          </div>
          
          <ul className="navbar-nav">
            <li><Link to="/list" className="nav-link">To Do's List</Link></li>
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li><Link to="/" className="nav-link">Login</Link></li>
            <li><Link to="/logout" className="nav-link">Logout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return(
      <footer>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">          
          <p>Copyright 2020</p>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li><Link to="#" className="nav-link">Contact Us</Link></li>
            <li><Link to="#" className="nav-link">About Us</Link></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

class ListToDosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [ // Creating an Array of Tasks
        {
          id: 1,
          description: 'Learn React',
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: 'Learn Spring Boot',
          done: false,
          targetDate: new Date()
        }, 
        {
          id: 3,
          description: 'Get a Project',
          done: false,
          targetDate: new Date()
        }, 
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>To Do List</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Done?</th>
              <th>Target Date</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.todos.map (
                todo =>
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return(
      <div>
        Welcome to Nudle, {this.props.match.params.name}.
        You can manage your To Do's List <Link to="/list">here</Link>.
      </div>
    );
  }
}

class ErrorComponent extends Component {
  render() {
    return(
      <div className="error">
        ERROR: Page does not exist
      </div>
    );
  }
}

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
      this.props.history.push(`/home/${this.state.username}`); // Once logged in, redirect to home page
    } else {
      this.setState({loginPassed : false});
      this.setState({loginFailed : true});
    }
  }

  render() {
    return(
      <div className="login">
        <LoginAttempt loginFailed={this.state.loginFailed} loginPassed={this.state.loginPassed} />
        User Name:<input className="logincre" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        Password:<input className="logincre" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return(
      <div>
        <h3>You have Logged Out</h3>
        <div className="container">
          Thanks for using our services. Please Come back again!
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
    return <div></div>;
  }
  else {
    return null;
  }
}

export default ToDoApp