import { resetDogForm } from './dogForm';

const API_URL = process.env.REACT_APP_API_URL;

export const setDogs = dogs => {
  return {
    type: 'GET_DOGS_SUCCESS',
    dogs
  }
}

export const addDog = dog => {
  return {
    type: 'CREATE_DOG_SUCCESS',
    dog
  }
}

export function removeDog(dog) {
  //debugger;
  return {
    type: 'REMOVE_DOG_SUCCESS',
    dog
  }
}

export function deleteDog(dog) {
  //debugger;
  return dispatch => {
    dispatch(removeDog(dog));
    //debugger;
    return fetch(`${API_URL}/dogs/${dog.id}`, {
      method: 'DELETE',
      body: JSON.stringify(dog),
      headers: {
        'Content-Type': 'application/json',
      }
     })
     .then(res => console.log(res))
  }
}

export const getDogs = () => {
  return dispatch => {
    return fetch(`${API_URL}/dogs`)
      .then(response => response.json())
      .then(dogs => dispatch(setDogs(dogs)))
  }
}

export const createDog = dog => {
  return dispatch => {
    return fetch(`${API_URL}/dogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dog)
    })
      .then(response => response.json())
      .then(dog => {
        dispatch(addDog(dog))
        dispatch(resetDogForm())
      })
  }
}
