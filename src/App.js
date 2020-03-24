import React, { Component } from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spring React App</h1>
        {/* List all Component in the App Component - App is Parent & All other are Children */}
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    );
  }
}

export default App;
