import React from 'react';
import './Dogs.css'
import DogCard from '../components/DogCard'

const Dogs = (props) =>
  <div className="DogsContainer">
    <h3>Dogs</h3>
    {props.dogs.map(dog =>
      <DogCard dog={dog} />
    )}
  </div>
;

export default Dogs;
