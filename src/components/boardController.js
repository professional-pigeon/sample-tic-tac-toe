import React from 'react'
import boardStateReducer from '../reducers/board-state-reducer';
import Board from './Board';
import { connect } from 'react-redux'
import PropTypes from "prop-types";



class BoardController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlayer: "O"
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
    if (this.state.selectedPlayer = "O") {
      this.setState({
        selectedPlayer: "X"
      })
    } else {
      this.setState({
        selectedPlayer: "O"
      })
    }
  }

  render() {
    let gameBoard = this.props.boardState

    return (
      <div>
        <p>This is our board!!</p>
        <Board 
          board={gameBoard}
          symbolFunction={this.addSymbolToBoard}
        />
      </div>
    )
  }
}


BoardController.propTypes = {
  boardState: PropTypes.array
};

const mapStateToProps = state => {
  return {
    boardState: state
  }
}

BoardController = connect(mapStateToProps)(BoardController)

export default BoardController;


// 1. import the state of the board 
// 2. pass down the symbol positions to the board
// 3. The Board.JS will loop through the positions and populate a board also assign event clickers to the panels