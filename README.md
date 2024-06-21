# Reactive Jug Challenge

This is my attempt at the Water Jug Riddle as a frontend only React application. This challenge or problem involves measuring Z gallons of water using two jugs or buckets with capacities of X and Y gallons respectively. Buckets have three operations: fill, empty and transfer water between the two.

The application first shows three inputs: The first two set the gallons of water of the two buckets and the last one sets the target measure. If the riddle can be solved with a given input, a table will be shown with the necessary steps, using the previous operations, to solve the riddle. The target measure can appear on either bucket. If the three inputs present an unsolvable edge case, the text No Solution will appear instead of the table. The text No Solution also will appear if the one of the inputs are empty or not a positive integer number.

The React application uses the Vite build tooling.

The live application can be found here https://reactivejugchallenge.onrender.com/

## Installation

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev` to test with the dev server
4. (Optional) Run `npm run build` to create a production build in the dist folder

## Application description

The application has three parts:
- The riddle algorithm
- React frontend
- Unit tests

### Riddle algorithm

#### Bucket object model

For the riddle algorithm I used a simple Bucket object with a constructor and six methods. The constructor only sets the maximum capacity, received as the only parameter, and also sets the current capacity to zero. The six methods are these:

- fill(transferedGallons = null): Sets the current capacity equals to the max capacity. If the method is receiving an integer (transferedGallons) this amount is added to the current capacity

- empty(): Sets current capacity to zero

- transfer(otherBucket): First looks for the minimum value between the current capacity and the max capacity of the other bucket. The minimum value is subtracted from the current capacity of that bucket and then added to the other bucket via the fill method

- The other three methods just returns the current and max capacities and a helper checkIfFull method that just compares the current with the max capacity

#### Algorithm

For the actual algorithm, I first create two Bucket objects. I devised a simple brute force algorithm looking at two solvable inputs: If the inputs are solvable, I must have to look which bucket to fill first, lets say bucket A. The rest is just transfering water to the other bucket B, taking account of their capacities, until one of the buckets have the target measure. The bucket A will fill again only if its empty. The same will happen with B.

The bucket to fill first will be the one that has the minor difference (absolute value) between their max capacity and the target measure.

Lastly, to check if the given inputs are solvable, I subtract the biggest capacity with the smaller capacity. If the result is lower than the target measure, there will be no way to eventually get the target measure in either bucket. It will always be a number of gallons more or less, but never the target measure.

### React frontend

The React frontend only have four components in addition with the App component. The components that have state are the BucketForm component, that controls the state of the three inputs, and the App state that controls the moves array. This array will store the resulting operations of the algorithm. Also, this array will end up in the SolutionTable component and, each element of the array, as a SolutionRow component. The algorithm is implemented in the App component and passed to the BucketForm component. When the algorithm finishes, the moves array state of the App component is updated and the passed to the SolutionTable component.

### Unit testing

The testing framework used is the Testing Library. The tests are found in the App.test.jsx file in the src folder. There are five tests:
- The first one test a solvable set of inputs
- The second one test a unsolvable set of inputs
- The other three tests for unaccepted inputs like negative numbers, chars and empty inputs