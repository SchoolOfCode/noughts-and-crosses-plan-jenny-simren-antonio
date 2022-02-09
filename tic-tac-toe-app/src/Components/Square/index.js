import './Square.css';

function Square({ index, clickHandler }) {
  return (
    <div id={index} className="square" onClick={clickHandler}>
      X
    </div>
  );
}

export default Square;
