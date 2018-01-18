import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDog, likeDog } from '../actions/dogs';

class DogCard extends Component {

  render() {
    const { id, name, location, image_url, date, breed, like } = this.props.dog;
    return (
      <div key={id} className="DogCard">
        <img className="DogImage" src={image_url} alt={name} />
        <h4 className="DogName">{name}</h4>
        <p>{date} &#124; {location}</p>
        <p>{breed}</p>
        <p>Likes: {like}</p>
        <button
          type="button"
          title="Like Dog"
          className="btn-like"
          onClick={() => this.props.likeDog(this.props.dog)}
        >Like</button>
        <button
          type="button"
          title="Delete Dog"
          className="btn-delete"
          onClick={() => this.props.deleteDog(this.props.dog)}
        >X</button>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return { dogs: state.dogs }
}

export default connect(mapStateToProps, {deleteDog, likeDog}, null)(DogCard);
