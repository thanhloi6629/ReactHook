export interface HeadCell {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify';
}

export interface DataTableColumn extends HeadCell {
  content: (row: any, index: number, order?: number) => React.ReactElement;
  width?: string;
  alignCenterTitle?: boolean;
}

export interface TablePaginationProps {
  columns: DataTableColumn[] | any;
  data: any[];
  onChangePage?: (page: number) => void;
  onChangePageSize?: (pageSize: number) => void;
  isShowPagination: boolean;
  sizes?: number[];
  page?: number;
  pageSize?: number;
  totalItem?: number;
  totalPage?: number;
  noneDataText?: string;
  checkboxSelectionTable?: boolean;
}
