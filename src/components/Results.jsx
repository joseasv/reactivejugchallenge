import SolutionTable from "./SolutionTable";

const Results = ({ moves }) => {
  if (moves.length === 0) {
    return <div>No solution</div>;
  } else {
    return (
      <div>
        <SolutionTable moves={moves} />
      </div>
    );
  }
};

export default Results;