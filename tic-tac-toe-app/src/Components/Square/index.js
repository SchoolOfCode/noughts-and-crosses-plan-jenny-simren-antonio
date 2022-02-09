import './Square.css';

function Square({ index, clickHandler, value }) {
  return (
    <div id={index} className="square" onClick={clickHandler}>
      {value}
    </div>
  );
}

export default Square;
