import React from 'react'
import GroupBy from './components/Reduce/GroupBy';
import Scroll from './components/scroll/Scroll';
import BubbleSort from './components/Range/BubbleSort'
import IntersertionSort from './components/Range/IntersertionSort';
import QuickSort from './components/Range/QuickSort';
import Sort from './components/Range/Sort';
import CatChuoi from './components/Test/CatChuoi';

import UseMemoAndCallback from './components/Test/UseMemoAndCallback';
function App() {

  return (
    <div>
      {/* {numberFormater(4443)} */}
      {/* <UseMemoAndCallback/> */}
      <br></br>

      {/* <BubbleSort /> */}
      {/* <IntersertionSort/> */}
      {/* <QuickSort/> */}
      {/* <Sort/> */}
      <GroupBy />
      <Scroll />
      <CatChuoi/>
    </div>
  )
}

export default App

