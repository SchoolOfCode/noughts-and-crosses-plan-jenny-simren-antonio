import { useState } from "react";

import Board from "../Board";
import "./App.css";

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
      let index = e.target.key;
      if (e.target.value === null) setBoard();
   }
   return (
      <div className="Game">
         {board.map((square, index) => {
            return <Square key={index} index={index} onClick={playerMove} />;
         })}
         <Board />
         <h2>Player Turn</h2>
         <h2>Winner</h2>
      </div>
   );
}

export default Game;
