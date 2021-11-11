import React from 'react'
/* -------------------------------------------------------------------------- */
/*                                   Ghi Chu  quan trong
Trong javasript Hàm swap được thay thế bằng cú pháp destructuring syntax
 [array[x], array[x + 1]] = [array[x + 1], array[x]];  
*/
/* -------------------------------------------------------------------------- */
const bubbleSort2 = (array) => {
  let isOrdered = false;
  for (let i = 0; i < array.length; i++) {
    isOrdered = false
    for (let x = 0; x < array.length - 1 - i; x++) {
      if (array[x] > array[x + 1]) {
        [array[x], array[x + 1]] = [array[x + 1], array[x]];
        //Nhu vay cung dc
        // [array[x+1], array[x]] = [array[x], array[x+1]];
        isOrdered = true;
      }
      console.log("array", array);
    }
    // Nếu không có phần tử nào để hoán đổi
    // bên trong vòng lặp thì Break
    if (isOrdered === false) break;
  }
  return array;
}
// const printArray = (arr, size) => {
//   for(var i= 0; i < size; i++){
//     document.write(arr[i]+ "");
//   }
// }
const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const sapXepNoiBot = (arr, n) => {
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubble(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) { // this was missing
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


const BubbleSort = () => {
  // const  mang = [64, 34, 25, 12, 12, 22, 11, 64, 90, 92, 91];
  const mang = [5, 1, 4, 2, 8];
  const n = 5;
  return (
    <div>
      {/* {`Sap xep tăng dần theo PP noi bot chieu dai n: ${(sapXepNoiBot(mang,n))}`} */}
      <br></br>
      {`Sap xep tang dan destructuring syntax: ${bubbleSort2(mang)}`}
      <br></br>
      {/* {`Săp xep tăng chieu dai n-1:  ${bubble(mang)}`} */}
    </div>
  )
}

export default BubbleSort
