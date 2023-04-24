import * as React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridToolbar,
  GridFooterContainer,
  GridValueGetterParams,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  GridPagination,
  GridToolbarExport,
  GridToolbarContainer,
  GridCellParams,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { listDemo } from "./sample";
import CustomFooterDataGrid from "./ListUser/CustomFooterDataGrid";
import Pagination from "@mui/material/Pagination";
import useStyles from "./styles";
import { useTheme } from "@mui/styles";
import { useState } from "react";
import { IconButton } from "@mui/material";

const columnsCustomer = [
  {
    field: "orders",
    type: "string",
    headerName: "STT",
    width: 60,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "customerID",
    type: "string",
    headerName: "MÃ KH",
    width: 100,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "customerName",
    type: "string",
    headerName: "Họ và tên",
    width: 310,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
    cellClassName: "customerNameClass",
  },
  {
    field: "phoneNumber",
    type: "number",
    headerName: "SĐT",
    width: 160,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "email",
    type: "email",
    headerName: "Email",
    width: 250,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "sex",
    type: "string",
    headerName: "Gioi tinh",
    width: 90,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
];

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin', 'company'];
const VISIBLE_FIELDS = [
  "name",
  "rating",
  "country",
  "phone",
  "email",
  "username",
];

interface IColumnsDataGrid {
  field: string;
  type: string;
  headerName: string;
  width: number;
  sortable: boolean;
  disableColumnFilter: boolean;
  disableColumnSelector: boolean;
  disableColumnMenu: boolean;
  cellClassName?: string;
  renderCell?: (params: GridCellParams) => void;
  getActions?: (params: any) => void;
  valueGetter?: (params: any) => void;
}

export function CustomPagination() {
  const classes = useStyles();
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  console.log("pagCount", pageCount);
  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      className={classes.MuiPaginationItemRoot}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columnsCustomer2 = [
  {
    field: "orders",
    type: "string",
    headerName: "STT",
    width: 60,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "customerID",
    type: "string",
    headerName: "MÃ KH",
    width: 100,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "customerName",
    type: "string",
    headerName: "Họ và tên",
    width: 310,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
    cellClassName: "customerNameClass",
  },
  {
    field: "phoneNumber",
    type: "number",
    headerName: "SĐT",
    width: 160,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "email",
    type: "email",
    headerName: "Email",
    width: 250,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
  {
    field: "sex",
    type: "string",
    headerName: "Gioi tinh",
    width: 90,
    sortable: false,
    disableColumnFilter: true,
    disableColumnSelector: true,
    disableColumnMenu: true,
  },
];

export default function QuickFilteringGrid() {
  const [isOpenModalConfirmAll, setIsOpenModalConfirmAll] = useState(false);
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
  const [isLoadingLayout, setIsLoadingLayout] = useState<boolean>(false);
  const [IdDelete, setIdDelete] = useState("");

  const columnsCustomer: Array<IColumnsDataGrid> = [
    {
      field: "name",
      type: "string",
      headerName: "STT",
      width: 100,
      sortable: true,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      renderCell: (params) => {
        return (
          <strong style={{ position: "sticky", top: "0", left: "0" }}>
            <IconButton
              onClick={() => {
                setIsOpenModalConfirm(true);
                setIdDelete(String(params.value));
              }}
              disabled={false}
            >
              <DeleteIcon />
            </IconButton>
          </strong>
        );
      },
    },
    {
      field: "rating",
      type: "string",
      headerName: "MÃ KH",
      width: 100,
      sortable: true,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      renderCell: (params) => {
        return <strong>{params.value}</strong>;
      },
    },
    {
      field: "country",
      type: "string",
      headerName: "Họ và tên",
      width: 310,
      sortable: true,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      cellClassName: "customerNameClass",
      renderCell: (params) => {
        return <strong>{params.value}</strong>;
      },
    },
    {
      field: "phone",
      type: "number",
      headerName: "SĐT",
      width: 160,
      sortable: false,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      renderCell: (params) => {
        return <strong>{params.value}</strong>;
      },
    },
    {
      field: "email",
      type: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
      disableColumnFilter: false,
      disableColumnSelector: false,
      disableColumnMenu: false,
      renderCell: (params) => {
        return <strong>{params.value}</strong>;
      },
    },
    {
      field: "username",
      type: "string",
      headerName: "UserName",
      width: 90,
      sortable: false,
      disableColumnFilter: true,
      disableColumnSelector: true,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <strong>{params.value}</strong>;
      },
    },
  ];
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  console.log("data.columns", data.columns);
  console.log("data", data);

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () =>
      columnsCustomer.filter((column: any) =>
        VISIBLE_FIELDS.includes(column.field)
      ),
    []
  );

  function CustomFooter() {
    // const apiRef = useGridApiContext();
    // const page = useGridSelector(apiRef, gridPageSelector);
    const [pageSize, setPageSize] = useState<number>(10);
    const handleChangePageSize = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
      page: number
    ) => {
      setPageSize(Number(page));
    };
    const savedInitialState = {
      // columnsSizes: { fieldName: { width: 30 }, otherField: { width: 50 } },
      // columnsOrders: { fieldName: { orderIndex: 4 } },
      pagination: { pageSize: 20 },
    };

    return (
      <GridFooterContainer>
        <GridPagination
          // initialState={savedInitialState}
          labelRowsPerPage="Hiển thị"
          rowsPerPageOptions={[10, 20, 30]}
          // onRowsPerPageChange={handleChangePageSize}
          // onRowsPerPageChange={pageSize}
          // onPageChange={}
          // defaultValue={0}
          sx={{
            "& .MuiTablePagination-displayedRows": {
              display: "none",
            },
            "& .MuiTablePagination-actions": {
              display: "none",
            },
          }}
        />
        <CustomPagination />
      </GridFooterContainer>
    );
  }

  let surveyObject = 1;

  return (
    <Box sx={{ height: 700, width: 1 }}>
      <h2>Demo2</h2>
      <DataGrid
        // {...listDemo}
        rows={listDemo}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={surveyObject ? columns : columnsCustomer2}
        components={{
          // Toolbar: GridToolbar,
          Toolbar: () => {
            return (
              <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
                <GridToolbarExport />
              </GridToolbarContainer>
            );
          },

          Footer: CustomFooter,
        }}
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
