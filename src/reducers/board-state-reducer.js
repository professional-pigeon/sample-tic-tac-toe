export default (state = [ ["","",""], ["","",""], ["","",""] ], action) => {
  const { symbol, location1, location2 } = action;
  switch (action.type) {
  case 'ADD_SYMBOL':
    state[location1][location2] = symbol;
    return state
  case 'RESET_GAME':
    state = [ ["","",""], ["","",""], ["","",""] ];
    return state
  default:
    return state
  };
}