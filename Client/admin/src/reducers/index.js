import { combineReducers } from 'redux';
import userReducers from './userReducer';

const reducerAll = combineReducers({ user: userReducers})

export default reducerAll;