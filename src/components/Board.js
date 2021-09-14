import React from 'react'
import { Row, Col } from "react-bootstrap" 
import PropTypes from "prop-types"
import './boardController.css'

function Board(props) {

  return (
    <div className="board">
      <Row className="boardRow">
        <Col onClick={() => props.symbolFunction(0,0)}>{props.board[0][0]}</Col>
        <Col onClick={() => props.symbolFunction(0,1)}>{props.board[0][1]}</Col>
        <Col onClick={() => props.symbolFunction(0,2)}>{props.board[0][2]}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.symbolFunction(1,0)}>{props.board[1][0]}</Col>
        <Col onClick={() => props.symbolFunction(1,1)}>{props.board[1][1]}</Col>
        <Col onClick={() => props.symbolFunction(1,2)}>{props.board[1][2]}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.symbolFunction(2,0)}>{props.board[2][0]}</Col>
        <Col onClick={() => props.symbolFunction(2,1)}>{props.board[2][1]}</Col>
        <Col onClick={() => props.symbolFunction(2,2)}>{props.board[2][2]}</Col>
      </Row>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  symbolFunction: PropTypes.func
}
export default Board