import React from 'react';
import '../App.css';
import Board from './Board';
import BoardController from './boardController'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <BoardController />
    </>

  );
}

export default App;
