import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const dogsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_DOGS_SUCCESS':
      return action.dogs;

    default:
      return state;
  }
}

const reducers = combineReducers({
  dogs: dogsReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
