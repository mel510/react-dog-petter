import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  componentDidMount() {
    fetch(`${API_URL}/dogs`)
      .then(response => response.json())
  }

  render() {
    return (
      <div className="App">
        <Dogs />
      </div>
    );
  }
}

export default App;
