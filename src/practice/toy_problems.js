// Write a function partlist that gives all
// the ways to divide a list (an array) of at least two elements into two non-empty parts.
//
// Each two non empty parts will be in a pair
// (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

export function partlist(arr) {
    // your code
  let lhsArray = [];
  let rhs;
  const myArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    rhs = [arr.slice(i + 1).join(' ')];
    lhsArray = [...lhsArray, arr[i]];
    myArray.push([lhsArray.join(' ')].concat(rhs));
  }
  return myArray;
}
