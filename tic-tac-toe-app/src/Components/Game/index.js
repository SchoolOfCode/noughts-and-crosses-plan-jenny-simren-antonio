import { useState } from 'react';

import Board from '../Board';

import './Game.css';

function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [xTurn, setXTurn] = useState(true);

  function playerMove(e) {
    
    let index = e.target.id;
   
    let symbol;
    if (xTurn === true) { symbol = "X" } else { symbol = "O" }
 
    if (e.target.value === undefined) { setBoard([...board.slice(0, index), symbol, ...board.slice(index+1)]) };

    setXTurn(!xTurn);
  }


  return (
    <div className="Game">
      <Board board={board} clickHandler={playerMove} />
      <h2>Player Turn</h2>
      <h2>Winner</h2>
    </div>
  );
}

export default Game;
