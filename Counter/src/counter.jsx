/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-enable no-unused-vars */
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCounter = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <h3>Counter App</h3>
        <div className="count">{count}</div>
        <div className="buttons">
          <button onClick={this.increaseCounter}>+</button>
          <button onClick={this.decreaseCounter}>-</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
