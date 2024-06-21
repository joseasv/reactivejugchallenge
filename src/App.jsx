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
              currentMoves.push({
                description: "Fill Bucket Y",
                bucketX: bucketX.checkCurrentCapacity(),
                bucketY: bucketY.checkCurrentCapacity(),
              });
            } else {
              bucketY.transfer(bucketX);
              currentMoves.push({
                description: "Transfer from Bucket Y to Bucket X",
                bucketX: bucketX.checkCurrentCapacity(),
                bucketY: bucketY.checkCurrentCapacity(),
              });
              if (bucketX.checkIsFull()) {
                bucketX.empty();
                currentMoves.push({
                  description: "Empty Bucket X",
                  bucketX: bucketX.checkCurrentCapacity(),
                  bucketY: bucketY.checkCurrentCapacity(),
                });
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
              currentMoves.push({
                description: "Fill Bucket X",
                bucketX: bucketX.checkCurrentCapacity(),
                bucketY: bucketY.checkCurrentCapacity(),
              });
            } else {
              bucketX.transfer(bucketY);
              currentMoves.push({
                description: "Transfer from Bucket X to Bucket Y",
                bucketX: bucketX.checkCurrentCapacity(),
                bucketY: bucketY.checkCurrentCapacity(),
              });
              if (bucketY.checkIsFull()) {
                bucketY.empty();
                currentMoves.push({
                  description: "Empty Bucket Y",
                  bucketX: bucketX.checkCurrentCapacity(),
                  bucketY: bucketY.checkCurrentCapacity(),
                });
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
