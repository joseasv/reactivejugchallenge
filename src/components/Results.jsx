const Results = ({ moves }) => {
  if (moves.length === 0) {
    return <div>No solution</div>;
  } else {
    return (
      <div>
        <table>
          <tr>
            <td>Bucket X</td>
            <td>Bucket Y</td>
            <td>Explanation</td>
          </tr>

          {moves.map((move, i) => (
            <tr key={i}>
              <td>{move.bucketX}</td>
              <td>{move.bucketY}</td>
              <td>{move.description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
};

export default Results;