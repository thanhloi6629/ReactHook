/* eslint-disable import/named */
import React from 'react';
import { TableCell, tableCellClasses, TableHead, TableRow, Theme } from '@mui/material';
import styled from '@mui/styles/styled';
interface TableCellProps {
  theme: Theme;
}
const StyledTableCell = styled(TableCell)(({ theme }: TableCellProps) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#F38BA0' ,
    color: '#FFDD93',
    fontSize: 18,
    fontWeight: 'bold',
  },
}));

const TableHeader = ({ columns, ...otherProps }: any) => {
  return (
    <TableHead {...otherProps}>
      <TableRow>
        {(columns && columns.length) > 0 &&
          columns.map((col: any) => (
            <StyledTableCell
              key={col.id}
              align={col?.align || 'center'}
              width={col.width ?? 'auto'}
            >
              {col.label}
            </StyledTableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
