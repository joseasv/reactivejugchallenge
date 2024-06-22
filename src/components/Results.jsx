import SolutionTable from "./SolutionTable";

const Results = ({ moves }) => {
  if (moves === null) {
    return <div></div>;
  } else {
    if (moves[0] === -1) {
      return <div>No Solution</div>;
    } else {
      return (
        <div>
          <SolutionTable moves={moves} />
        </div>
      );
    }
  }
};

export default Results;