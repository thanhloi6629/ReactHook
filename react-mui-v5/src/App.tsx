import React from 'react';
import './App.css';
import MemberList from 'pages/DataGrid/MemberList';
import Demo from 'pages/DataGrid/Demo';
import QuickFilteringGrid from 'pages/DataGrid/QuickFilteringGrid';


import { Box } from '@mui/system';
import AutocompletePage from 'pages/Autocomplete/AutocompletePage';
import { Grid, Typography } from '@mui/material';
import Test from 'pages/TestRender/Test1/Test';
import Test2 from 'pages/TestRender/Test2/Test2';
import Test3 from 'pages/TestRender/Test3';

function App() {
  return (
    <div className="App">
     {/* <MemberList /> */}
     {/* <Demo /> */}
     {/* <QuickFilteringGrid /> */}
     {/* <Grid>
        <Typography variant="h5" marginBottom={1}>
                Phòng ban
        </Typography>
        <AutocompletePage />
     </Grid> */}
      <Test />
      <Test2 />
      <Test3 />

    </div>
  );
}

export default App;
