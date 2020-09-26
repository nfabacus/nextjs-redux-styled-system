import { combineReducers } from 'redux'

import timerReducer from './components/Clock/redux/reducer';
import counterReducer from './components/Counter/redux/reducer';

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)
