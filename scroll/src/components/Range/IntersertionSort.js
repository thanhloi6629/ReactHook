import React from 'react'
//However, the worst and average time complexity is O(n2), which is pretty bad for a sorting algorithm, 
// especially when it is applied to arrays or lists of a bigger size. 
// In this case, Quicksort or Merge Sort with a complexity of O(nlogn) would be a much better choice.

// Insertion Sort usually outperforms Bubble Sort
// when our input array size is very small (10-20 elements), Insertion Sort can even outperform Quicksort and Merge Sort.
// source: https://stackabuse.com/insertion-sort-in-javascript/
function IntersertionSort() {

  const  insertionSort2 = (array) => {
    let n = array.length;
        for (let i = 1; i < n; i++) {
          console.log("i" , i)
            let current = array[i];
            let j = i-1; 
            console.log("j-before", j);
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                console.log("array[j+1]",array[j+1]);
                j--;
                console.log("array1", array);
            }
            array[j+1] = current;
            console.log("current", current);
            console.log("array2", array);
            console.log("j", j);
        }
    return array;
  }

  const mang = [5, 1, 4, 2, 8];

  const insertionSort3 = array =>
  array.reduce((acc, x) => {
    console.log("x", x);
    if (!acc.length) return [x];
    console.log("acc", acc);
    acc.some((y, j) => {
      console.log("x1", x);
      console.log("y", y);
      console.log("j", j);
      if (x <= y) {
        acc.splice(j, 0, x);
        console.log("acc2", acc);
        return true;
      }
      if (x > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, x);
        console.log("acc3", acc);
        return true;
      }
      return false;
    });
    return acc;
  }, []);

  return (
    <div>
      {/* {`Mang intersertionSort ${insertionSort2(mang)}`} */}
      {`Mang intersertionSort ${insertionSort3(mang)}`}

    </div>
  )
}

export default IntersertionSort
