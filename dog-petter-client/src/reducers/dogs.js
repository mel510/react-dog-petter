export default (state=[], action) => {

  switch(action.type) {

    case 'GET_DOGS_SUCCESS':
      return action.dogs;

    case 'CREATE_DOG_SUCCESS':
      //console.log("hit create")
      return state.concat(action.dog)

    case 'REMOVE_DOG_SUCCESS':
      console.log("hit remove")
      return state.filter(dog => dog.id !== action.dogId)

    default:
      return state;
  }
}
