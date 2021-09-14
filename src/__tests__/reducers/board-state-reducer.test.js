import boardStateReducer from '../../reducers/board-state-reducer'

describe('ticketListReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(boardStateReducer([ [0,0,0], [0,0,0], [0,0,0] ], { type: null })).toEqual([[0,0,0], [0,0,0], [0,0,0]])
  });

  test('Should add a symbol to the state at the upper right position', () => {
    action = {
      type: 'ADD_SYMBOL',
      symbol: "X",
      location1: 0,
      location2: 2,
    };
    expect(boardStateReducer([ [0,0,0], [0,0,0], [0,0,0] ], action)).toEqual([
      [0,0, "X"], [0,0,0], [0,0,0]
    ])
  });

  test('Should reset the game board', () => {
    action = {
      type: 'RESET_GAME',
    };
    expect(boardStateReducer([ [0,"X","O"], ["X","O","X"], [0,0,0] ], action)).toEqual([
      [0,0,0], [0,0,0], [0,0,0]
    ])
  });
  
  
});
