import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import Header from './Header';
import Footer from './Footer';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListToDosComponent from './ListToDosComponent';
import TodoComponent from './TodoComponent';

import './ToDoApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoApp extends Component {
  render() {
    return(
      <div className="ToDoApp">
        <Router>
          <Header />
          <Switch> {/* When none of the URLs lsited below are called, then show the erro */}
            <Route path="/" exact component={LoginComponent} /> {/*When using 'exact', it sets a strict setting like !important */}
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/home/:name" component={WelcomeComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path="/list/:id" component={TodoComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path="/list" component={ListToDosComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
            <Route component={ErrorComponent} /> {/* When the URL is not recognized then show the Error Component */}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default ToDoApp