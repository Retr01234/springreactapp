import React, { Component } from 'react';

// Class Component 
export default class First extends Component { // Class must always Extend
  render() { // Must Include a Render Function
    return ( // Show a return statement
      <div className="First"> 
        <h3>1st Component</h3>
      </div>
    );
  }
}
