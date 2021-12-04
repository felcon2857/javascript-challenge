// Instructions

/** You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. The array is either 
entirely comprised of odd integers or entirely comprised of even 
integers except for a single integer N. Write a method that takes 
the array as an argument and returns this "outlier" N.*/

// function example
function findOutlier(integers) {
  const len = integers.length,
    isEven = (n) => n % 2 === 0;
  for (const [i, nums] of integers.entries()) {
    let odd = integers[(i - 1 + len) % len],
      even = integers[(i + 1) % len];
    if (isEven(nums) !== isEven(odd) && isEven(nums) !== isEven(even)) {
      return nums;
    }
  }
  return undefined;
}
// output  logs to return
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
