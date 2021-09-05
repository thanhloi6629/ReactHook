import React from 'react'

function QuickSort() {

  const quickSort = (arr) => {
    if(arr.length < 2) return arr;
    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1 ;
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    
    let currentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for(let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i];
        
        if(currentItem < pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
        console.log("left", left);
        console.log("right", right);
    }
    console.log("quickSort(left)", quickSort(left));
    console.log("pivot", pivot);
    console.log("quickSort(right)", quickSort(right));


    return [...quickSort(left), pivot, ...quickSort(right)];
}

const mang = [10, 2, 4, 25, 5, 6, 17, 8, 12, 151, 34, 100];
  return (
    <div>
      {`Sap xep tang dan destructuring syntax: ${quickSort(mang)}`} 
      
    </div>
  )
}

export default QuickSort
