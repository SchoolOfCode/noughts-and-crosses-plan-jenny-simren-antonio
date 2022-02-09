import { useEffect, useState } from 'react';

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
  const [winner, setWinner] = useState('');

  useEffect(() => {
    checkIfWinner(board);
  }, [board]);

  function checkIfWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
      if (!board.includes(null)) {
        setWinner('draw');
      }
    }

    return null;
  }

  function playerMove(e) {
    if (winner) {
      return;
    }
    if (board.includes(null)) {
      let index = Number(e.target.id);

      let symbol;
      if (xTurn === true) {
        symbol = 'X';
      } else {
        symbol = 'O';
      }

      if (e.target.innerText === '') {
        setBoard([...board.slice(0, index), symbol, ...board.slice(index + 1)]);
      }

      setXTurn(!xTurn);
    }
  }

  return (
    <div className="Game">
      <Board board={board} clickHandler={playerMove} />
      <h2>Player Turn: {xTurn ? 'X' : 'O'}</h2>

      {winner && winner === 'draw' && <h2 className="draw">It's a draw</h2>}
      {winner && winner === 'O' && (
        <h2 className="winner-o">The winner is {winner}</h2>
      )}
      {winner && winner === 'X' && (
        <h2 className="winner-x">The winner is {winner}</h2>
      )}
    </div>
  );
}

export default Game;
