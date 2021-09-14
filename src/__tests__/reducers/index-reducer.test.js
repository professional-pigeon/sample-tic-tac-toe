import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import winnerReducer from '../../reducers/winner-reducer';
import boardStateReducer from '../../reducers/board-state-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      boardState: [ [0,0,0], [0,0,0], [0,0,0] ],
      winner: false
    });
  });

  test("Check that initial state of boardStateReducer matches rootReducer", () => {
    expect(store.getState().boardState).toEqual(boardStateReducer(undefined, {type: null}))
  })

  test("Check that initial state of winnerReducer matches rootReducer", () => {
    expect(store.getState().winner).toEqual(winnerReducer(undefined, {type: null}))
  })

  test('Should add a symbol to the state at the upper right position', () => {
    action = {
      type: 'ADD_SYMBOL',
      symbol: "X",
      location1: 0,
      location2: 2,
    };
    store.dispatch(action);
    expect(store.getState().boardState).toEqual(boardStateReducer(undefined, action))
  });

  test('Should reset the game board', () => {
    action = {
      type: 'RESET_GAME',
    };
    store.dispatch(action);
    expect(store.getState().boardState).toEqual(boardStateReducer(undefined, action))
  });
  


});