/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

let arrowRestSum = (...params) => {
  let sum = 0;
  for (num of params) {
    sum += num;
  }
  return sum;
};

console.log(arrowRestSum(3, 5, 6));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
