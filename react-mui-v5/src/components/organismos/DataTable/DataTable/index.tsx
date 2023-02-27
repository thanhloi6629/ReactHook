import { Box, Table } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHeader from './TableHeader';
import PaginationComponent from './Pagination';
import TableData from './TableData';
import { TablePaginationProps } from './type';
import { bgMainContentColor } from 'theme/palette';

const DataTable = ({
  columns,
  data,
  onChangePage,
  onChangePageSize,
  isShowPagination,
  page,
  sizes,
  totalItem,
  totalPage,
  pageSize,
  noneDataText,
}: TablePaginationProps) => {
  const handleChangePageSize = (pageSizeNow: number) => {
    if (onChangePageSize) onChangePageSize(Number(pageSizeNow));
  };
  const handleChangePage = (pageNow: number) => {
    if (onChangePage) onChangePage(Number(pageNow));
  };
  // interface TableCellProps {
  //   theme: Theme;
  // }
  return (
    <Box sx={{ backgroundColor: bgMainContentColor }}>
      <TableContainer component={Paper} sx={{ padding: '9px 8px' }}>
        <Table
          sx={{
            minWidth: 650,
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
            },
            [`& .${tableCellClasses.body}`]: {
              fontSize: 16,
            },
          }}
          aria-label="simple table"
        >
          <TableHeader columns={columns} />
          <TableData data={data} columns={columns} nonDataText={noneDataText} />
        </Table>
      </TableContainer>

      <Box mt={3}>
        {isShowPagination && (
          <PaginationComponent
            sizes={sizes}
            onChangePage={handleChangePage}
            onChangePageSize={handleChangePageSize}
            pageSize={pageSize}
            page={page}
            totalItem={totalItem}
            totalPage={totalPage}
          />
        )}
      </Box>
    </Box>
  );
};
export default DataTable;
