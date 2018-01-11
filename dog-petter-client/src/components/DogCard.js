import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteDog } from '../actions/dogs';

class DogCard extends Component {

  handleOnClick = (dog) => {
    debugger;
    this.props.deleteDog(dog)
  }

  render() {
    //debugger;
    const { id, name, location, image_url, date, breed } = this.props.dog;
    //debugger;
    return (
      <div key={id} className="DogCard">
        <h4>{name}</h4>
        <p>{date} &#124; {location}</p>
        <img className="DogImage" src={image_url} alt={name} />
        <p>{breed}</p>
        <button
          type="button"
          className="btn-delete"
          onClick={this.props.dog.handleOnClick}
        >Delete</button>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return { dogs: state.dogs.dogs }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteDog }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null)(DogCard);
