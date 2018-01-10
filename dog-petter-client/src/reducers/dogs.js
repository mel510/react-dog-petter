export default (state=[], action) => {
  switch(action.type) {
    case 'GET_DOGS_SUCCESS':
      return action.dogs;

    default:
      return state;
  }
}
