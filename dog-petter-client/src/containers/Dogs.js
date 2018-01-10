import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dogs.css';
import DogCard from '../components/DogCard';
import DogForm from './DogForm';

class Dogs extends Component{

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DOGS_SUCCESS',
      dogs: [ {name: "Dory", breed: "GSD", date: "1/1/1", location: "dogpark", image_url: "test.jpg" }]
    })
  }
  
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

const mapStateToProps = (state) => {
  return ({
    dogs: state.dogs
  })
};

export default connect(mapStateToProps)(Dogs);
