import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/dogs')
      .then(response => response.json())
      .then(dogs => this.setState({ dogs }))
  }

  render() {
    return (
      <div className="App">
        App Container
        <Dogs dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
