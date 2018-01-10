import React, { Component } from 'react';
import './Dogs.css';
import DogCard from '../components/DogCard';
import DogForm from './DogForm';

class Dogs extends Component{

  render() {
    return (
      <div className="DogsContainer">
        <h3>Dogs</h3>
        {this.props.dogs.map(dog =>
          <DogCard key={dog.id} dog={dog} />
        )}
        <DogForm />
      </div>
    )
  }


};

export default Dogs;
