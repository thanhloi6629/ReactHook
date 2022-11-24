import React from 'react';
import './App.css';
import MemberList from 'pages/DataGrid/MemberList';
import Demo from 'pages/DataGrid/Demo';
import QuickFilteringGrid from 'pages/DataGrid/QuickFilteringGrid';


import { Box } from '@mui/system';
import AutocompletePage from 'pages/Autocomplete/AutocompletePage';
import { Grid, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box>loi</Box>
     {/* <MemberList /> */}
     {/* <Demo /> */}
     {/* <QuickFilteringGrid /> */}
     <Grid>
        <Typography variant="h5" marginBottom={1}>
                Phòng ban
        </Typography>
        <AutocompletePage />
     </Grid>
    </div>
  );
}

export default App;
