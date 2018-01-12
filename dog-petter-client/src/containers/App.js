import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dogs from './Dogs';
import Home from '../components/Home';
import About from '../components/About';
import GreetingDogs from '../components/GreetingDogs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/greeting-dogs" component={GreetingDogs} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
