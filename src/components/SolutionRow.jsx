const SolutionRow = ({ move }) => {
  return (
    <tr>
      <td>{move.bucketX}</td>
      <td>{move.bucketY}</td>
      <td>{move.description}</td>
    </tr>
  );
};

export default SolutionRow;