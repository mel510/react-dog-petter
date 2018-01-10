import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDogFormData } from '../actions/dogForm';
import { createDog } from '../actions/dogs';

class DogForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentDogFormData = Object.assign({}, this.props.dogFormData, {
      [name]: value
    })
    this.props.updateDogFormData(currentDogFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createDog(this.props.dogFormData)
  }

  render() {
    const { name, location, image_url, date, breed } = this.props.dogFormData;
    return(
      <div className="DogForm">
        <h3>Add a Dog</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="FormField">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={name}
            />
          </div>
          <div className="FormField">
          <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              onChange={this.handleOnChange}
              value={location}
            />
          </div>
          <div className="FormField">
            <label htmlFor="image_url">Image URL:</label>
            <input
              type="text"
              name="image_url"
              onChange={this.handleOnChange}
              value={image_url}
            />
          </div>
          <div className="FormField">
            <label htmlFor="datee">Date:</label>
            <input
              type="text"
              name="date"
              onChange={this.handleOnChange}
              value={date}
            />
          </div>
          <div className="FormField">
            <label htmlFor="breed">Breed:</label>
            <input
              type="text"
              name="breed"
              onChange={this.handleOnChange}
              value={breed}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogFormData: state.dogFormData
  }
}

export default connect(mapStateToProps, { updateDogFormData, createDog })(DogForm);
