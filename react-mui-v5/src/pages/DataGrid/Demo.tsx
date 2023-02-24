import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin', 'company'];

export default function QuickFilteringGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  console.log("data.columns", data.columns);





  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => data.columns.filter((column: any) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );
  console.log("columns2", columns);

  return (
    <Box sx={{ height: 700, width: 1 }}>
      <h2>Demo</h2>
      <DataGrid
        {...data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
}
