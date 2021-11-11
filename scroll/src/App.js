import React from 'react'
import GroupBy from './components/Reduce/GroupBy';
import Scroll from './components/scroll/Scroll';
import BubbleSort from './components/Range/BubbleSort'
import IntersertionSort from './components/Range/IntersertionSort';
import QuickSort from './components/Range/QuickSort';
import Sort from './components/Range/Sort';
import Sum from './components/Test/Sum';
import CatChuoi from './components/Test/CatChuoi';

import UseMemoAndCallback from './components/Test/UseMemoAndCallback';
function App() {

  const formatter = new Intl.NumberFormat('ja-JP', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const numberFormater = (num) => {
    if (typeof num === 'undefined' || isNaN(num)) {
      return num;
    }
    const tmp = String(num).split('.');
    if (tmp[1]) {
      let fixed = 2;
      if (tmp[1].length < 3) {
        fixed = tmp[1].length;
      }
      return parseFloat(num).toFixed(fixed);
    }
    return formatter.format(num);

  };

  return (
    <div>
      {/* {numberFormater(4443)} */}
      {/* <UseMemoAndCallback/> */}
      <br></br>

      {/* <BubbleSort /> */}
      {/* <IntersertionSort/> */}
      {/* <QuickSort/> */}
      {/* <Sort/> */}
      {/* <Sum/> */}
      <GroupBy />
      <Scroll />
      <CatChuoi/>
    </div>
  )
}

export default App

