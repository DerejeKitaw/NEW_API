import axios from 'axios';

import { GET_ERRORS, ADD_INVERTER ,GET_INVERTERS, EDIT_INVERTER} from './types';

// Add inverter
export const addInverter = inverterData => dispatch => {
  axios
    .post('/api/inverters/', inverterData)
    .then(res => {
      dispatch({
        type: ADD_INVERTER,
        payload: res.data
      });
      // history.push('/inverters');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all inverters
export const getInverters = () => dispatch => {
  // dispatch(setInverterLoading());
  axios
    .get('/api/inverters/')
    .then(res =>
      {dispatch({
        type: GET_INVERTERS,
        payload: res.data
    })
      // console.log(res.data);
    }
    )
    .catch(err =>
      dispatch({
        type: GET_INVERTERS,
        payload: null
      })
    );
};



// EDIT inverter
export const editInverter = (id, updates) => dispatch => {
  axios  
    .post(`/api/inverters/${id}`, updates)
    .then(res => {
      dispatch({
        type: GET_INVERTERS,
        payload: res.data
      });
      // history.push('/inverters');
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// REMOVE_INVERTER
export const removeInverter = ({ id } = {}) => ({
  type: 'REMOVE_INVERTER',
  id
});