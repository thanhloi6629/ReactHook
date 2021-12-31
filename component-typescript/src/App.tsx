import React from 'react';
import FixedFirstColumTable from 'Pages/Table/FixedFirstColumTable';
import './App.css';

function App() {
  // fetch -> progressing -> compile -> calculate => value => useMemo

  return (
    <div className="App">
      <div>Table Scroll</div>
      <FixedFirstColumTable></FixedFirstColumTable>
    </div>
  );
}

export default App;
