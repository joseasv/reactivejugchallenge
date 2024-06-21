import SolutionRow from "./SolutionRow";

const SolutionTable = ({ moves }) => (
  <table>
    <thead>
      <tr>
        <td>Bucket X</td>
        <td>Bucket Y</td>
        <td>Explanation</td>
      </tr>
    </thead>

    <tbody>
      {moves.map((move, i) => (
        <SolutionRow key={i} move={move} />
      ))}
    </tbody>
  </table>
);

export default SolutionTable;