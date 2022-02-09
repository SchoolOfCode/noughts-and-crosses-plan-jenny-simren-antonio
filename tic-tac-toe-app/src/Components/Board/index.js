import React from 'react';
import Square from '../Square';
import './Board.css';

function Board({ board, clickHandler }) {
  return (
    <div className="board-container">
      {board.map((square, index) => {
        return <Square key={index} index={index} clickHandler={clickHandler} />;
      })}
    </div>
  );
}

export default Board;
