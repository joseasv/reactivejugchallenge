import { useState } from "react";
import PropTypes from "prop-types";

const BucketForm = ({ calcFunc, resetFunc }) => {
  const [newX, setNewX] = useState("");
  const [newY, setNewY] = useState("");
  const [newZ, setNewZ] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          calcFunc(newX, newY, newZ);
        }}
      >
        <div>
          <label>
            X:
            <input
              value={newX}
              onChange={(event) => {
                resetFunc();
                setNewX(event.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Y:
            <input
              value={newY}
              onChange={(event) => {
                resetFunc();
                setNewY(event.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Z:
            <input
              value={newZ}
              onChange={(event) => {
                resetFunc();
                setNewZ(event.target.value);
              }}
            />
          </label>
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