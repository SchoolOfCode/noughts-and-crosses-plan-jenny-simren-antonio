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
    if (e.target.value === null) setBoard(...board.slice(0, index));
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
