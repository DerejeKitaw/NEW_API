import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import inverterReducer from './inverterReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  inverters: inverterReducer,
  filters: filterReducer
});
