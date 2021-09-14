export default (state = false, action) => {
  switch(action.type) {
    case 'WINNER_TRUE':
      state = true
      return state
    case 'NO_WINNER':
      state = false
      return state
    default:
      state = false
      return state
  }
}