export default (state=[], action) => {
  switch(action.type) {
    case 'GET_DOGS_SUCCESS':
      return action.dogs;

    case 'CREATE_DOG_SUCCESS':
      return state.concat(action.dog)

    default:
      return state;
  }
}
