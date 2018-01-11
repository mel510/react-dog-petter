import React from 'react';

const DogCard = ({ dog, removeDog }) => (
  <div key={dog.id} className="DogCard">
    <h4>{dog.name}</h4>
    <p>{dog.date} &#124; {dog.location}</p>
    <img className="DogImage" src={dog.image_url} alt={dog.name} />
    <p>{dog.breed}</p>
    <button
      type="button"
      className="btn-delete"
      onClick={() => removeDog(dog.id)}
    >Delete</button>
  </div>
);

export default DogCard;
