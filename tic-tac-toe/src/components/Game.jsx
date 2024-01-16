import { useState } from "react";

import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDesc, setIsDesc] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function descending() {
    return history
      .slice()
      .reverse()
      .map((squares, move) => {
        let description;
        if (move < history.length - 1) {
          description = "Go to move #" + (history.length - 1 - move);
        } else {
          description = "Go to start game";
        }

        return (
          <li key={move}>
            <button onClick={() => jumpTo(history.length - 1 - move)}>
              {description}
            </button>
          </li>
        );
      });
  }

  const descendingOrder = descending();

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div className="game-info">
        <button onClick={() => setIsDesc(!isDesc)}>Descending</button>
        {isDesc && <ol>{descendingOrder}</ol>}
      </div>
    </div>
  );
}
