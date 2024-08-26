import {
 UPDATE_PLACES
} from '../Constants';

const initialState = {
  visitedPlaces: {}
};

export default function PlacesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLACES:
      state = {
        ...state,
        visitedPlaces: action.payload,
      };
      break;
      
    default:
      break;
  }
  return state;
}