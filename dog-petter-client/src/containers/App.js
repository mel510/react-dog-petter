import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs'



class App extends Component {
  render() {
    return (
      <div className="App">
        App Container
        <Dogs dogs={dogs} />
      </div>
    );
  }
}

export default App;
