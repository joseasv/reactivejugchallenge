import { useState } from "react";
import PropTypes from "prop-types";

const BucketForm = ({ calcFunc }) => {
  const [newX, setNewX] = useState(0);
  const [newY, setNewY] = useState(0);
  const [newZ, setNewZ] = useState(0);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          calcFunc(newX, newY, newZ);
        }}
      >
        <div>
          X:
          <input
            value={newX}
            onChange={(event) => setNewX(event.target.value)}
          />
        </div>
        <div>
          Y:
          <input
            value={newY}
            onChange={(event) => setNewY(event.target.value)}
          />
        </div>
        <div>
          Z:
          <input
            value={newZ}
            onChange={(event) => setNewZ(event.target.value)}
          />
        </div>
        <div>
          <button type="submit"> Calculate</button>
        </div>
      </form>
    </div>
  );
};

BucketForm.propTypes = {
  calcFunc: PropTypes.func.isRequired,
};

export default BucketForm;