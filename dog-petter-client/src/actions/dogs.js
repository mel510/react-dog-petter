import { resetDogForm } from './dogForm';

const API_URL = process.env.REACT_APP_API_URL;

//actions
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

export const addLike = dog => {
  return {
    type: 'LIKE_DOG',
    dog
  }
}


//async stuff
export function removeDog(dog) {
  return {
    type: 'REMOVE_DOG_SUCCESS',
    dog
  }
}

export function deleteDog(dog) {
  return dispatch => {
    dispatch(removeDog(dog));
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

export const likeDog = (dog) => {
  return dispatch => {
    return fetch(`${API_URL}/dogs/${dog.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({like: dog.like + 1})
      })
        .then(response => response.json())
        .then(console.log("a"))
        .then(dog => {
          dispatch(addLike(dog))
        })
  }
}
