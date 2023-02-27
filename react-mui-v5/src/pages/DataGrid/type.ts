export interface IColumnsDataGrid {
    field: string;
    type: string;
    headerName: string;
    width: number;
    sortable: boolean;
    disableColumnFilter: boolean;
    disableColumnSelector: boolean;
    disableColumnMenu: boolean;
    cellClassName?: string;
    renderCell?: (params: any) => void;
    getActions?: (params: any) => void;
}
export interface IRequestSearch {
  page?: number;
  pageSize?: number;
  totalPage?: number;
  totalItem?: number;
}