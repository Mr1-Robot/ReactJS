export default function Square({ value, onSquareClick, isWinning }) {
  const style = { backgroundColor: isWinning ? "gold" : "transparent" };
  return (
    <button style={style} onClick={onSquareClick}>
      {value}
    </button>
  );
}
