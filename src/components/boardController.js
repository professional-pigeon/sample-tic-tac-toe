import React from 'react'
import boardStateReducer from '../reducers/board-state-reducer';
import Board from './Board';
import { connect } from 'react-redux'
import PropTypes from "prop-types";



class BoardController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlayer: "O",
    }
  }

  addSymbolToBoard = (x, y) => {
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_SYMBOL',
      symbol: this.state.selectedPlayer,
      location1: x,
      location2: y
    }
    dispatch(action)
    console.log(this.state.selectedPlayer)
    if (this.state.selectedPlayer === "O") {
      this.setState({
        selectedPlayer: "X"
      })
    } else {
      this.setState({
        selectedPlayer: "O"
      })
    }
  }

  whoWins = (game) => {
    if (winCheck(game)) {
      const { dispatch } = this.props;
      const action = {
        type: 'WINNER_TRUE'
      }
      dispatch(action)
    }
  }

  render() {
    let gameBoard = this.props.boardState
    if (this.props.winner === false) {
      return (
        <div>
          <p>This is our board!!</p>
          <Board 
            board={gameBoard}
            symbolFunction={this.addSymbolToBoard}
          />
          <button onClick={() => this.whoWins(gameBoard)}>Winner?</button>
        </div>
    )
    } else {
      return (
        <div>
          <p>You win</p>
        </div>
    )
    }
  }
}

const winCheck = (game) => {
  let winTrue = false
  for(let n = 0; n < 3; n++) {
    let y = 0
    if (game[n][y] === game[n][y+1] && game[n][y] === game[n][y+2]) {
      winTrue = true
      break
    }
  }
  for(let y = 0; y < 3; y++) {
    let n = 0
    if (game[n][y] === game[n+1][y] && game[n][y] === game[n+2][y]) {
      winTrue = true
      break
    }
  }

  if (game[0][0] ===  game[1][1] && game[1][1] === game[2][2]) {
    winTrue = true
  }
  if (game[2][0] ===  game[1][1] && game[1][1] === game[0][2]) {
    winTrue = true
  }
  
  return winTrue

}


BoardController.propTypes = {
  boardState: PropTypes.array,
  winner: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    boardState: state.boardState,
    winner: state.winner
  }
}

BoardController = connect(mapStateToProps)(BoardController)

export default BoardController;


// 1. import the state of the board 
// 2. pass down the symbol positions to the board
// 3. The Board.JS will loop through the positions and populate a board also assign event clickers to the panels

// xxx Horizontal win cons
// 000
// 000

// x00 Vertical win cons
// x00
// x00

// diagonal win cons


// win cons:

// x = 0
// y = 0

// this loop ticks up x
// if boardState[x][y] and [x][y+1] and [x][y+2]
// this loop ticks up y
// if boardState[x][y] and [x+1][y] and [x+2][y]

// if boardState [x][y] and [x+1][y+1] and [x+2][y+2]
// if boardState [x+2][y] and [x+1][y+1] and [x][y+2]

