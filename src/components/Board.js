import React from 'react'
import { Row, Col, Container } from "react-bootstrap" 
import PropTypes from "prop-types"
import './boardController.css'

function Board(props) {

  return (
    <Container className="board">
      <Row className="boardRow">
        <Col className="topLeft" onClick={() => props.symbolFunction(0,0)}>{props.board[0][0]}</Col>
        <Col className="topCenter" onClick={() => props.symbolFunction(0,1)}>{props.board[0][1]}</Col>
        <Col className="topRight" onClick={() => props.symbolFunction(0,2)}>{props.board[0][2]}</Col>
      </Row>
      <Row className="boardRow">
        <Col className="middleLeft" onClick={() => props.symbolFunction(1,0)}>{props.board[1][0]}</Col>
        <Col className="middleCenter" onClick={() => props.symbolFunction(1,1)}>{props.board[1][1]}</Col>
        <Col className="middleRight" onClick={() => props.symbolFunction(1,2)}>{props.board[1][2]}</Col>
      </Row>
      <Row className="boardRow">
        <Col className="bottomLeft" onClick={() => props.symbolFunction(2,0)}>{props.board[2][0]}</Col>
        <Col className="bottomCenter" onClick={() => props.symbolFunction(2,1)}>{props.board[2][1]}</Col>
        <Col className="bottomRight" onClick={() => props.symbolFunction(2,2)}>{props.board[2][2]}</Col>
      </Row>
    </Container>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  symbolFunction: PropTypes.func
}
export default Board