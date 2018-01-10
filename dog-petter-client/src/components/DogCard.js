import React from 'react';

const DogCard = ({ dog }) => (
  <div key={dog.id} className="DogCard">
    <h4>{dog.name}</h4>
    <p>{dog.date} &#124; {dog.location}</p>
    <img className="DogImage" src={dog.image_url} alt={dog.name} />
    <p>{dog.breed}</p>
  </div>
);

export default DogCard;
