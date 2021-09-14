import winnerReducer from '../../reducers/winner-reducer'

describe("winner", () =>{

  test('Should return false if no action taken', () => {
    expect(winnerReducer(false, {type: null})).toEqual(false)
  });

  test('Should return false if no action taken', () => {
    expect(winnerReducer(false, {type: "WINNER_TRUE"})).toEqual(true)
  });

  test('Should return false if no action taken', () => {
    expect(winnerReducer(true, {type: "NO_WINNER"})).toEqual(false)
  });


});