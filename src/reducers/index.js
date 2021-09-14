import winnerReducer from './winner-reducer';
import boardStateReducer from './board-state-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  boardState: boardStateReducer,
  winner: winnerReducer
});

export default rootReducer;