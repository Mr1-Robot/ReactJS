import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner: " + winner.a;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function renderSquare(idx) {
    const isWinning = winner && winner.wins.includes(idx);
    return (
      <Square
        key={idx}
        value={squares[idx]}
        onSquareClick={() => handleClick(idx)}
        isWinning={isWinning}
      />
    );
  }

  function renderRow(rowIdx) {
    return (
      <div key={rowIdx} className="board-row">
        {[0, 1, 2].map((colIdx) => renderSquare(rowIdx * 3 + colIdx))}
      </div>
    );
  }

  function renderBoard() {
    return (
      <div className="board">
        {[0, 1, 2].map((rowIdx) => renderRow(rowIdx))}
      </div>
    );
  }

  return (
    <>
      <div className="">{status}</div>
      <div className="board">{renderBoard()};</div>
    </>
  );
}

function calculateWinner(squares) {
  let wins;
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      wins = lines[i];
      return { a: squares[a], wins };
    }
  }
  return null;
}
