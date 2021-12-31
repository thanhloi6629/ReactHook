/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import HeaderCell from './HeaderCell';
import ShiftHeaderCell from './ShiftHeaderCell';
import ShiftCell from './ShiftCell';

import Cell from './Cell';

const style = css({
  whiteSpace: 'pre-wrap',
  width: '100%',
  border: 'none',
  borderSpacing: '0px 1.5px',
  tableLayout: 'fixed',
});

interface TableProps {
  customStyle?: any;
  className?: string;
}

const Table: React.FC<TableProps> & {
    ShiftHeaderCell: typeof ShiftHeaderCell;
    HeaderCell: typeof HeaderCell;
    Cell: typeof Cell;
    ShiftCell: typeof ShiftCell;
} = ({ children, customStyle, className = '' }) => (
  <table className={className} css={css(style, customStyle)}>
    {children}
  </table>
);
Table.ShiftHeaderCell = ShiftHeaderCell;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
Table.ShiftCell = ShiftCell;

export default Table;
