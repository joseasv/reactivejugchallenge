const Results = ({ moves }) => {
  if (moves.length === 0) {
    return <div>No solution</div>;
  } else {
    return (
      <div>
        <ul>
          {moves.map((move, i) => (
            <li key={i}>{move}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Results;