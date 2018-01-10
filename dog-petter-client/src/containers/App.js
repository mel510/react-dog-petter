import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/dogs`)
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  render() {
    return (
      <div className="App">
        App Container
        <Dogs dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;
