import React from "react";
import "./App.css";
import MemberList from "pages/DataGrid/MemberList";
import Demo from "pages/DataGrid/Demo";
import QuickFilteringGrid from "pages/DataGrid/QuickFilteringGrid";

import { Box } from "@mui/system";
import AutocompletePage from "pages/Autocomplete/AutocompletePage";
import { Grid, Typography } from "@mui/material";
import Test from "pages/TestRender/Test1/Test";
import Test2 from "pages/TestRender/Test2/Test2";
import Test3 from "pages/TestRender/Test3";
import Demo2 from "pages/DataGrid/Demo2";
import MemberListUser from "pages/DataGrid/MemberListUser/MemberListUser";
import FixHeaderColumn from "pages/Table/FixHeaderColumn";
import BlogLayout from "pages/card/BlogLayout";
import ListUser from "pages/DataGrid/ListUser/ListUser";
import PieChartComponent from "pages/Charts/PieChartComponent";
import FixHeaderColumnV2 from "pages/Table/FixHeaderColumnV2";

function App() {
  return (
    <div className="App">
      {/* <MemberList /> */}
      {/* <Demo /> */}
      {/* <Demo2></Demo2> */}
      {/* <QuickFilteringGrid /> */}
      {/* <MemberListUser></MemberListUser> */}
      {/* <Grid>
        <Typography variant="h5" marginBottom={1}>
                Phòng ban
        </Typography>
        <AutocompletePage />
     </Grid> */}
      <Test />
      <Test2 />
      <Test3 />
      <FixHeaderColumn></FixHeaderColumn> {/* <BlogLayout></BlogLayout> */}
      <FixHeaderColumnV2></FixHeaderColumnV2>
      {/* <ListUser></ListUser> */}
      <PieChartComponent></PieChartComponent>
    </div>
  );
}

export default App;
