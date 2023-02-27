import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo, useState } from 'react'
import colors from 'assets/scss/_themes-vars.module.scss';
import ForwardDeleteIcon from 'components/atoms/checkbox/ForwardDeleteIcon';
import Stack from '@mui/material/Stack';
import CustomFooterDataGrid from './CustomFooterDataGrid';
import { IColumnsDataGrid, IRequestSearch } from '../type';
import listMember, { listMember2, listUser } from '../sample';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridCellParams } from '@mui/x-data-grid';
import { ToolTipCopy } from './ToolTipCopy';
import DataTable from 'components/organismos/DataTable/DataTable';

const dataParamsDefault = {
    page: 1,
    pageSize: 10,
    totalItem: 18,
    totalPage: 1
}
const NoRowsOverlay = () => {
    return (
        <Stack height="100%" alignItems="center" justifyContent="center">
            Không có dữ liệu
        </Stack>
    );
};
const NoResultsOverlay = () => {
    return (
        <Stack height="100%" alignItems="center" justifyContent="center">
            Không tìm thấy nhân viên
        </Stack>
    );
};

const handleChangePage = async (pageNumber: number) => {
    console.log('pageNumber', pageNumber);
};
const handleChangePageSize = async (pagesize: number) => {
    // setIsUpdateDataTable(false);
    // handleAddStaffs({ ...dataParams, page: 1, pageSize: pagesize });
};
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



const ListUser = () => {

    const [dataParams, setDataParams] = useState<IRequestSearch>(dataParamsDefault);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    let surveyObject = 1;
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
                                    //   setIsOpenModalConfirm(true);
                                    //   setIdDelete(String(params.id));
                                }}
                            // disabled={surveyType === 2}
                            >
                                <DeleteIcon />
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
    return (
        <div>
        <DataTable
          columns={columnsStaffs}
          data={listUser.contents || []}
          onChangePage={handleChangePage}
          onChangePageSize={handleChangePageSize}
          isShowPagination={true}
          page={Number(dataParams.page) || 1}
          pageSize={Number(dataParams.pageSize) || 10}
          totalItem={dataParams.totalItem}
          totalPage={dataParams.totalPage}
          noneDataText="Không có dữ liệu"
        />
        </div>
    )
}

export default ListUser
