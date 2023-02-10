import { combineReducers } from 'redux';
import loginReducer from './login';
import player from './player';

const rootReducer = combineReducers({
  loginReducer,
  player,
});
export default rootReducer;
