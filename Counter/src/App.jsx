/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
/* eslint-enable no-unused-vars */
import './App.css';
import Counter from './counter.jsx'; 

class App extends Component {
  render() {
    return (
      <div className="app">
         <Counter />
      </div>
    );
  }
}

export default App;
