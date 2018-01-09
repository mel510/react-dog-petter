import React, { Component } from 'react';
import './App.css';
import Dogs from './Dogs'

const dogs = [
  {
    name: "Pesto",
    location: "Coffee shop",
    image_url: "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/25005801_317666418733860_479226214595166208_n.jpg",
    date: "01/01/18",
    breed: "Lab"
  },
  {
    name: "Lily",
    location: "Dog park",
    image_url: "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/24327267_135774497132218_710261799756234752_n.jpg",
    date: "01/12/18",
    breed: "Pit bull"
  },
  {
    name: "Dory",
    location: "Dog park",
    image_url: "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/20969152_111474042898716_7644694581723791360_n.jpg",
    date: "01/12/18",
    breed: "German Shepherd"
  },
]



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
