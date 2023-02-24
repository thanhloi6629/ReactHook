import React, { useEffect, useState } from 'react';
import { IColumnsDataGrid } from './type';
import listMember from './sample';
import {
  DataGrid, 
  GridFooterContainer, 
  useGridApiContext, 
  useGridSelector,
  GridPagination,
  gridPageCountSelector,
  gridPageSelector,
} from '@mui/x-data-grid';

import ForwardCustomCheckbox from 'components/atoms/checkbox/ForwardCustomCheckbox';
import { Box } from '@mui/system';
import PaginationComponent from 'components/organismos/DataTable/Pagination';

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

const MemberList = () => {
  let surveyObject = 1;
  const [dataTable, setDataTable] = useState<any[]>(listMember);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>([]);
  const CustomFooterDataGrid = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const [pageSize, setPageSize] = useState<number>(10);
  
    // useEffect(() => {
    //   apiRef.current.setPageSize(pageSize);
    // }, []);
  
    return (
      <Box sx={{ width: '100% ' }}>
        <GridFooterContainer
          sx={{
            visibility: 'visible!important',
            width: '100%!important',
            position: 'absolute',
            height: 'auto!important',
            left: 0,
            bottom: '-90px',
            borderTop: 'none',
          }}
        >
          <PaginationComponent
            page={page + 1}
            pageSize={pageSize}
            totalPage={pageCount}
            sizes={[10, 20, 30]}
            onChangePage={(value: any) => {
              apiRef.current.setPage(value - 1);
            }}
            onChangePageSize={(value: any) => {
              apiRef.current.setPageSize(value);
              setPageSize(value);
            }}
          />
          <GridPagination />
        </GridFooterContainer>
      </Box>
    );
  };
  return (
    <>
      <DataGrid
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
          BaseCheckbox: ForwardCustomCheckbox,
          Pagination: CustomFooterDataGrid,
        }}
        // getRowId={(r: any) => r.staffID}
        rows={dataTable}
        columns={surveyObject === 1 ? columnsStaffs : columnsCustomer}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        loading={isLoading}
        rowsPerPageOptions={[10, 20, 30]}
        onSelectionModelChange={(ids) => {
          const selectedIds = new Set(ids);
          // const selectedRows = dataTable.filter((row: any) => selectedIds.has(row.staffID));
          // setSelectedData(selectedRows);
        }}
      />
    </>
  );
};

export default MemberList;
