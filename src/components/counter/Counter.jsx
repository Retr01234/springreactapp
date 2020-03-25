import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter : 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment(by) {
    //console.log(`increment from parent - ${by}`)
    this.setState((prevState) => {
      return {counter: prevState.counter + by}
    });
  }

  decrement(by) {
    this.setState((prevState) => {
      return {counter: prevState.counter - by}
    });
  }

  reset() {
    this.setState(
      {counter : 0}
    );
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
        <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
        <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
        
        <span className="total">{this.state.counter}</span>

        <div>
          <button className="reset" onClick = {this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

class CounterButton extends Component {
  //Define Initial State in a Constructor
  // state => counter
  constructor(props) {
    super(props); // Calling the super constructor of the class

    this.state = { // Adding a state to our component
      counter : 0
    }

    this.increment = this.increment.bind(this); //Binding this to the increment function
    this.decrement = this.decrement.bind(this);
  }

  increment() { // Update the State - Counter ++
    //this.state.counter++; In react you dont update the state directly
    this.setState(() => {
      return {counter: this.state.counter + this.props.by} // We update the state by calling setState directly
    });

    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    this.setState(() => {
      return {counter: this.state.counter - this.props.by}
    });

    this.props.decrementMethod(this.props.by);
  }

  // render = () => { Arrow Function
  render() {  
    return (
      <div className="counter">
        <button onClick = {this.increment}>+{this.props.by}</button>
        <button onClick = {this.decrement}>-{this.props.by}</button> 
      </div>
    )
  }
}

CounterButton.defaultProps = { // Default increment number if by hasnt been specified
  by : 1
}

CounterButton.propTypes = { // Strains around the value assigned to proptypes
  by : propTypes.number
}

export default Counter