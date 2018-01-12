import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from './Dogs';
import About from '../components/About';
import Navbar from '../components/Navbar';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div className="routes">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dogs} />
              <Route path="/about" component={About} />} />
            </Switch>
          </div>
        </Router>
        <Dogs />
      </div>
    );
  }
}

export default App;
