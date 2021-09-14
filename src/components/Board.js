import React from 'react'
import { Row, Col } from "react-bootstrap" 
import PropTypes from "prop-types"

function Board(props) {

  return (
    <div>
      <Row>
        <Col onClick={() => props.symbolFunction(0,0)}>{props.board[0][0]}</Col>
        <Col >{props.board[0][1]}</Col>
        <Col>{props.board[0][2]}</Col>
      </Row>
      <Row>
        <Col>{props.board[1][0]}</Col>
        <Col>{props.board[1][1]}</Col>
        <Col>{props.board[1][2]}</Col>
      </Row>
      <Row>
        <Col>{props.board[2][0]}</Col>
        <Col>{props.board[2][1]}</Col>
        <Col>{props.board[2][2]}</Col>
      </Row>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  symbolFunction: PropTypes.func
}
export default Board