import React, { Component } from 'react';
import { connect } from 'react-redux';

class DogForm extends Component {

  render() {
    return(
      <div className="DogForm">
        <h3>Add a Dog</h3>
        <form>
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

export default connect(mapStateToProps)(DogForm);
