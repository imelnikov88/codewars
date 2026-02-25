// 🤔DESCRITION
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// 😉TEST
    // assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
    // assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
    // assert.deepEqual(norm(invert([])), []);
    // assert.deepEqual(norm(invert([0])), [0]);


// 😎SOLUTIN
function invert(array) {
  // 1 variant
  // const invertArray = []
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   if(element === 0) {
  //     invertArray.push(0)
  //   } else {
  //       const invertEl = -element
  //       invertArray.push(invertEl)
  //   }

  // }

  // return invertArray

  // 2 variant
  return array.map((el) => {
    // if (el === 0) {
    //   return 0
    // } else {
    //     const invertEl = -el
    //     return invertEl
    // }

    return el === 0 ? 0 : -el

} )

}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))