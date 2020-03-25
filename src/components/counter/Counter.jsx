import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  //Define Initial State in a Constructor
  // state => counter
  constructor(props) {
    super(props); // Calling the super constructor of the class

    this.state = { // Adding a state to our component
      counter : 0
    }

    this.increment = this.increment.bind(this); //Binding this to the increment function
  }

  increment = () => { // Update the State - Counter ++
    //this.state.counter++; In react you dont update the state directly
    this.setState({
      counter: this.state.counter + this.props.by // We update the state by calling setState directly
    });
  }

  // render = () => { Arrow Function
  render() {  
    return (
      <div className="counter">
        <button onClick={this.increment} >+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    )
  }
}

Counter.defaultProps = { // Default increment number if by hasnt been specified
  by : 1
}

Counter.propTypes = { // Strains around the value assigned to proptypes
  by : propTypes.number
}

export default Counter