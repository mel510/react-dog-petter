import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dogs.css';
import DogCard from '../components/DogCard';
import DogForm from './DogForm';
import { getDogs } from '../actions/dogs';

class Dogs extends Component{

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    return (
      <div>
        <div className="DogsContainer">
          <h3>Dogs</h3>
          {this.props.dogs.map(dog =>
            <DogCard
              key={dog.id}
              dog={dog}
            />
          )}
        </div>
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

export default connect(mapStateToProps, { getDogs })(Dogs);
