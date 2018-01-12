import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dogs from './Dogs';
import About from '../components/About';
import Navbar from '../components/Navbar';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
