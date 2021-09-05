import React from 'react'

function Sort() {

  let numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => b - a);
  console.log("number", numbers);

  function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    console.log("Infinity", -Infinity);
    console.log("max", max);
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

  return (
    <div>
      {`Phuong thuc sort trong js ${myArrayMax(numbers)}`}
    </div>
  )
}

export default Sort
