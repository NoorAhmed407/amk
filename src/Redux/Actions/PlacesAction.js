import React, {Component} from 'react';
import {
  UPDATE_PLACES
} from '../Constants';

export class PlacesActions extends Component {
  static UpdatePlaces(data) {
    return {type: UPDATE_PLACES, payload: data};
  }
  

}

export default PlacesActions;
