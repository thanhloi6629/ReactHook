import React from 'react';
import FixedFirstColumTable from 'Pages/Table/FixedFirstColumTable';
import './App.css';
import FillBt1 from 'Pages/Vinh1/FillBt1';
import BT2 from 'Pages/Vinh1/BT2';

function App() {
  // fetch -> progressing -> compile -> calculate => value => useMemo

  return (
    <div className="App">
      <div>Table Scroll</div>
      <FixedFirstColumTable></FixedFirstColumTable>
      <FillBt1></FillBt1>
      <BT2></BT2>
    </div>
  );
}

export default App;
