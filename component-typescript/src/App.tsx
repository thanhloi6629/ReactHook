import React from 'react';
import FixedFirstColumTable from 'Pages/Table/FixedFirstColumTable';
import './App.css';
import FillBt1 from 'Pages/Vinh1/FillBt1';
import BT2 from 'Pages/Vinh1/BT2';

import Test from 'Pages/Test/Test';
import FillBT3 from 'Pages/Vinh1/FillBT3';
import ForwardRef from 'Pages/Test/ForwardRef';
import RefFocus from 'Pages/Test/RefFocus';
import ImportFile from 'Pages/Component/ImportFile';
import GridTemplateColumn from 'Pages/Test/HocCss/GridTemplateColumn';
import BT2New from 'Pages/Vinh1/BT2New';
import FillTable from 'Pages/CongTy/FillTable';
import FillTableArray from 'Pages/CongTy/FillTableArray';

function App() {
  // fetch -> progressing -> compile -> calculate => value => useMemo

  return (
    <div className="App">
      <div>Table Scroll</div>
      <FillTable></FillTable>
      <FillTableArray></FillTableArray>
      <BT2New></BT2New>

      {/* <FixedFirstColumTable></FixedFirstColumTable> */}
      {/* <FillBt1></FillBt1> */}
      {/* <BT2></BT2> */}
      {/* <Test></Test> */}
      {/* <ImportFile></ImportFile> */}
      {/* <FillBT3></FillBT3> */}


      {/* <GridTemplateColumn></GridTemplateColumn> */}
      {/* <Test></Test> */}
      {/* <ForwardRef></ForwardRef> */}
      {/* <RefFocus></RefFocus> */}
    </div>
  );
}

export default App;
