import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';

const TableDaTa = ({ columns, data, nonDataText }: any) => {
  return (
    <TableBody>
      {data?.length === 0 ? (
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            {nonDataText}
          </TableCell>
        </TableRow>
      ) : (
        data.map((row: any, index: number) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ padding: '0 16px' }}>
              {columns.map((col: any, i: number) => col.content(row, i, index))}
            </TableRow>
          );
        })
      )}
    </TableBody>
  );
};

export default TableDaTa;
