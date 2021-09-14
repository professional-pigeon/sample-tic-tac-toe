import React from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import './Navbar.css';

class Navbar extends React.Component {
  
  resetFunction = () => {
    const { dispatch } = this.props;
    console.log(this.props)
    let action = {
      type: 'RESET_GAME',
    }
    doubleDispatch(dispatch)
  }

  
  render() {
    return (
    <nav>
      <div>
        <button className="navbar-button" >Player O</button>
        <p>Score</p>
      </div>

      <div>
        <button className="navbar-button" onClick={() => this.resetFunction()}>Reset</button>
      </div>

      <div>
        <button className="navbar-button">Player X</button>
        <p>Score</p>
      </div>
    </nav>
    )
  }
}

const doubleDispatch = (dispatch) => {
  dispatch({
    type: 'RESET_GAME'
  })
  console.log("first")
  dispatch({
    type: 'NO_WINNER'
  })
  console.log("second")
}

Navbar.propTypes = {
  boardState: PropTypes.array,
  winner: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    boardState: state.boardState,
    winner: state.winner
  }
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar;

