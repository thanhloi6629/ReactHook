import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin', 'company'];
const VISIBLE_FIELDS = ['orders', 'customerID', 'customerName', 'phoneNumber', 'email', 'sex'];

const columnsCustomer = [
    {
      field: 'orders',
      type: 'string',
      headerName: 'STT',
      width: 60,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'customerID',
      type: 'string',
      headerName: 'MÃ KH',
      width: 100,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'customerName',
      type: 'string',
      headerName: 'Họ và tên',
      width: 310,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
      cellClassName: 'customerNameClass',
    },
    {
      field: 'phoneNumber',
      type: 'number',
      headerName: 'SĐT',
      width: 160,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'email',
      type: 'email',
      headerName: 'Email',
      width: 250,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'sex',
      type: 'string',
      headerName: 'Gioi tinh',
      width: 90,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
  ];

export default function QuickFilteringGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  },
  );

  console.log("data.columns", data.columns);
  console.log("data", data);








  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => columnsCustomer.filter((column: any) => VISIBLE_FIELDS.includes(column.field)),
    [],
  );

  return (
    <Box sx={{ height: 700, width: 1 }}>
       <h2>Demo2</h2>
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
