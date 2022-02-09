import './Square.css';

function Square({ index, clickHandler, value }) {
  return (
    <div id={index} className="square" onClick={clickHandler}>
      <p style={value === 'X' ? { color: '#3498db' } : { color: '#8e44ad' }}>
        {value}
      </p>
    </div>
  );
}

export default Square;
