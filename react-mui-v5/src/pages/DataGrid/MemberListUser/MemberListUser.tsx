import { IconButton } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React, { useMemo, useState } from 'react'
import { listMember2 } from '../sample';
import { IColumnsDataGrid } from '../type';
import CustomFooterDataGrid from './CustomFooterDataGrid';
import { ToolTipCopy } from './ToolTipCopy';
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

const MemberListUser = () => {
  let surveyObject = 1;
  const [list, setList] = useState<any>(listMember2);
  const columnsStaffs: Array<IColumnsDataGrid> = useMemo(
    () => [
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Xóa',
        width: 60,
        sortable: false,
        disableColumnFilter: true,
        disableColumnSelector: true,
        disableColumnMenu: true,
        renderCell: (params) => {
          return (
            <strong>
              <IconButton
                onClick={() => {
                  // setIsOpenModalConfirm(true);
                  // setIdDelete(String(params.id));
                }}
              >
                {/* <DeleteIcon /> */}
              </IconButton>
            </strong>
          );
        },
        // getActions: (params) => [
        //   <GridActionsCellItem
        //     icon={<DeleteIcon />}
        //     label="Delete"
        //     onClick={() => deleteUser(params.id)}
        //   />,
        // ],
      },
      {
        field: 'staffID',
        type: 'string',
        headerName: 'MÃ NV',
        width: 85,
        sortable: false,
        disableColumnFilter: true,
        disableColumnSelector: true,
        disableColumnMenu: true,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'staffName',
        type: 'string',
        headerName: 'Họ và tên',
        width: 200,
        sortable: true,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        cellClassName: 'customerNameClass',
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'positionName',
        type: 'string',
        headerName: 'Vị trí',
        width: 170,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        cellClassName: 'customerNameClass',
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'levelName',
        type: 'string',
        headerName: 'Level',
        width: 190,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        cellClassName: 'customerNameClass',
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'unitName',
        type: 'string',
        headerName: 'Khối',
        width: 140,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'departmentName',
        type: 'string',
        headerName: 'Bộ phận',
        width: 160,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'phone',
        type: 'string',
        headerName: 'SĐT',
        width: 120,
        sortable: false,
        disableColumnFilter: true,
        disableColumnSelector: true,
        disableColumnMenu: true,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'email',
        type: 'email',
        headerName: 'Email',
        width: 160,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'surveyObject360',
        type: 'string',
        headerName: 'Đối tượng 360',
        width: 150,
        sortable: false,
        disableColumnFilter: false,
        disableColumnSelector: false,
        disableColumnMenu: false,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
      {
        field: 'statusName',
        type: 'string',
        headerName: 'Trạng thái',
        width: 120,
        sortable: false,
        disableColumnFilter: true,
        disableColumnSelector: true,
        disableColumnMenu: true,
        renderCell(params: GridCellParams) {
          return <ToolTipCopy params={params} />;
        },
      },
    ],
    []
  );

  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);


  const queryOptions = React.useMemo(
    () => ({
      page,
      pageSize,
    }),
    [page, pageSize],
  );

  
  const handleChangePage = async (pageNumber: number) => {
   
  };

  const handleChangePageSize = async (pageSize: number) => {
   
  };

  return (
    <div>
      l <DataGrid
        sx={{
          border: 0,
          borderRadius: 2,
          padding: 4,
          paddingTop: 1,
          fontSize: '16px',
          '& .customerNameClass': {
            color: '#000',
            fontWeight: '500',
            fontSize: '18px!important',
          },
        }}
        // hideFooter={false}
        components={{
        //   BaseCheckbox: ForwardCustomCheckbox,
          Pagination() {
            return (
              <CustomFooterDataGrid
                onChangePage={handleChangePage}
                onChangePageSize={handleChangePageSize}
                page={page}
                pageSize={pageSize || 10}
                totalItem={list.length}
                totalPage={2}
              />
            );
          },
        }}
        // getRowId={(r: any) => r.staffID}
        rows={list}
        columns={surveyObject === 1 ? columnsStaffs : columnsCustomer}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        // loading={isLoading}
        rowsPerPageOptions={[10, 20, 30]}
        onSelectionModelChange={(ids) => {
          const selectedIds = new Set(ids);
          // const selectedRows = dataTable.filter((row: any) => selectedIds.has(row.staffID));
          // setSelectedData(selectedRows);
        }}
      />
    </div>
  )
}

export default MemberListUser
