import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { deleteDog } from '../actions/dogs';

class DogCard extends Component {

  // handleOnClick = (dog) => {
  //   debugger;
  //   this.props.deleteDog(dog)
  // }

  render() {
    const { id, name, location, image_url, date, breed, like } = this.props.dog;
    //debugger;
    return (
      <div key={id} className="DogCard">
        <img className="DogImage" src={image_url} alt={name} />
        <h4 className="DogName">{name}</h4>
        <p>{date} &#124; {location}</p>
        <p>{breed}</p>
        <p>Likes: {like}</p>
        <button onClick={this.props.likeDog}>Like</button>
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
  //debugger;
  return { dogs: state.dogs }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ deleteDog }, dispatch)
// }

//debugger;

export default connect(mapStateToProps, {deleteDog}, null)(DogCard);
