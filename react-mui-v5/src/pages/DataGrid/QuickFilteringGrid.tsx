import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import listMember, {listMember2}  from './sample';
import { IColumnsDataGrid } from './type';

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin', 'company'];
const VISIBLE_FIELDS = ['orders', 'staffID', 'staffName', 'positionName', 'levelName', 'unitName', 'departmentName', 'phone', 'email', 'surveyObject360', 'statusName'];


export default function QuickFilteringGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  console.log("data.columns", data.columns);

  const columnsStaffs: Array<IColumnsDataGrid> = [
    {
      field: 'staffID',
      type: 'string',
      headerName: 'MÃ NV',
      width: 90,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'staffName',
      type: 'string',
      headerName: 'Họ và tên',
      width: 310,
      sortable: true,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      cellClassName: 'customerNameClass',
    },
    {
      field: 'positionName',
      type: 'string',
      headerName: 'Vị trí',
      width: 120,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
      cellClassName: 'customerNameClass',
    },
    {
      field: 'levelName',
      type: 'string',
      headerName: 'Level',
      width: 80,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
      cellClassName: 'customerNameClass',
    },
    {
      field: 'unitName',
      type: 'string',
      headerName: 'Khối',
      width: 90,
      sortable: false,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
    },
    {
      field: 'departmentName',
      type: 'string',
      headerName: 'Bộ phận',
      width: 100,
      sortable: false,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
    },
    {
      field: 'phone',
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
      width: 210,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'surveyObject360',
      type: 'string',
      headerName: 'Đối tượng 360',
      width: 150,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
    {
      field: 'statusName',
      type: 'string',
      headerName: 'Trạng thái',
      width: 150,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
    },
  ];


  const [selectedData, setSelectedData] = React.useState<any>([]);


  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => columnsStaffs.filter((column: any) => VISIBLE_FIELDS.includes(column.field)),
    [columnsStaffs],
  );
  console.log("columns", columns);


  const column = [
    { field: 'orders' }, 
    { field: 'staffID' }, 
    { field: 'staffName' },
    { field: 'positionName' },
    { field: 'levelName' },
    { field: 'unitName' },
    { field: 'departmentName' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'surveyObject360' },
    { field: 'statusName' },
  ]
  return (
    <Box sx={{ height: 700, width: 1 }}>
      <DataGrid
        {...data}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={column}
        rows={listMember2}
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
