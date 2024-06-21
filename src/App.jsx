import { useState } from "react";
import Bucket from "./models/Bucket";
import Results from "./components/Results";
import "./App.css";
import BucketForm from "./components/BucketForm";

function App() {
  const [newMoves, setNewMoves] = useState([]);

  const calcFunc = (x, y, z) => {
    console.log("button pressed ", x, y, z);
    console.log(
      Number.isInteger(x),
      x > 0,
      Number.isInteger(y),
      y > 0,
      Number.isInteger(z),
      z > 0,
    );
    if (
      Number.isInteger(x) === false &&
      x > 0 &&
      Number.isInteger(y) === false &&
      y > 0 &&
      Number.isInteger(z) === false &&
      z > 0
    ) {
      x = Number(x);
      y = Number(y);
      z = Number(z);
      const maxBucket = Math.max(x, y);
      const minBucket = Math.min(x, y);

      if (maxBucket - minBucket < z) {
        console.log("No solution");
        setNewMoves([]);
      } else {
        const bucketX = new Bucket(x);
        const bucketY = new Bucket(y);
        const currentMoves = [];
        if (Math.abs(x - z) > Math.abs(y - z)) {
          console.log("start with y");

          while (
            bucketX.checkCurrentCapacity() !== z &&
            bucketY.checkCurrentCapacity() !== z
          ) {
            if (bucketY.checkCurrentCapacity() === 0) {
              bucketY.fill();
              currentMoves.push("Fill Bucket Y");
            } else {
              bucketY.transfer(bucketX);
              currentMoves.push("Transfer from Bucket Y to Bucket X");
              if (bucketX.checkIsFull()) {
                bucketX.empty();
                currentMoves.push("Empty Bucket X");
              }
            }

            //debugger;
          }
        } else {
          console.log("start with x");

          while (
            bucketX.checkCurrentCapacity() !== z &&
            bucketY.checkCurrentCapacity() !== z
          ) {
            if (bucketX.checkCurrentCapacity() === 0) {
              bucketX.fill();
              currentMoves.push("Fill Bucket X");
            } else {
              bucketX.transfer(bucketY);
              currentMoves.push("Transfer from Bucket X to Bucket Y");
              if (bucketY.checkIsFull()) {
                bucketY.empty();
                currentMoves.push("Empty Bucket Y");
              }
            }

            //debugger;
          }
        }
        setNewMoves(currentMoves);
      }
    } else {
      setNewMoves([]);
    }
  };

  return (
    <>
      <BucketForm calcFunc={calcFunc} />
      <Results moves={newMoves} />
    </>
  );
}

export default App;
