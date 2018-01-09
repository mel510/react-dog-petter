import React from 'react';
import './Dogs.css'

const Dogs = (props) =>
  <div className="DogsContainer">
    <h3>Dogs</h3>
    {props.dogs.map(dog =>
      <div key={dog.id} className="DogCard">
        <h4>{dog.name}</h4>
        <p>{dog.date} &#124; {dog.location}</p>
        <img className="DogImage" src={dog.image_url} alt={dog.name} />
        <p>{dog.breed}</p>
      </div>
    )}
  </div>
;

export default Dogs;
