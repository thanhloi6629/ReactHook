import React from 'react'
import GroupBy from './components/Reduce/GroupBy';
import Scroll from './components/scroll/Scroll';
import BubbleSort from './components/Range/BubbleSort'
import IntersertionSort from './components/Range/IntersertionSort';
import QuickSort from './components/Range/QuickSort';
import Sort from './components/Range/Sort';

function App() {
  return (
    <div>
      {/* <BubbleSort /> */}
      {/* <IntersertionSort/> */}
      {/* <QuickSort/> */}
      <Sort/>
      {/* <GroupBy /> */}
      <Scroll />
    </div>
  )
}

export default App

