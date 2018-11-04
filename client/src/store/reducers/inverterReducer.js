import isEmpty from '../../utils/is-empty';

import { ADD_INVERTER,  GET_INVERTERS, INVERTER_LOADING } from '../actions/types';

const initialState = {
  inverters: [],
  loading: false

}

export default function(state = initialState, action) {
  switch (action.type) {
    case INVERTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_INVERTER:
      return [
        ...state,
        action.inverter
      ]
    case GET_INVERTERS:
      return {
        ...state,
        inverters: action.payload,
        loading: false
      }
      case 'EDIT_INVERTER':
      return state.map((inverter) => {
        if (inverter._id === action.id) {
          return {
            ...inverter,
            ...action.updates
          };
        } else {
          return inverter;
        };
      });
      
    default:
      return state;
  }
}
