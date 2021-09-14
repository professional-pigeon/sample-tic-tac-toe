import boardStateReducer from '../../reducers/board-state-reducer'

describe('ticketListReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(boardStateReducer([ ["","",""], ["","",""], ["","",""] ], { type: null })).toEqual([["","",""], ["","",""], ["","",""]])
  });

  test('Should add a symbol to the state at the upper right position', () => {
    action = {
      type: 'ADD_SYMBOL',
      symbol: "X",
      location1: 0,
      location2: 2,
    };
    expect(boardStateReducer([ ["","",""], ["","",""], ["","",""] ], action)).toEqual([
      ["","","X"], ["","",""], ["","",""]
    ])
  });

  test('Should reset the game board', () => {
    action = {
      type: 'RESET_GAME',
    };
    expect(boardStateReducer([ ["","X","O"], ["X","O","X"], ["","",""] ], action)).toEqual([
      ["","",""], ["","",""], ["","",""]
    ])
  });
  
  
});
