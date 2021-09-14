import React from 'react';
import '../App.css';
import Board from './Board';
import BoardController from './boardController'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <BoardController />
    </>

  );
}

export default App;
