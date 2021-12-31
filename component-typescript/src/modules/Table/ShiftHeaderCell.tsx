/** @jsx jsx */
import React, { ThHTMLAttributes } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import { productColor, textFontSize, textColor } from 'components/styles';

const style = css({
  padding: '14px 10px',
  margin: '0',
  backgroundColor: productColor.primaryM95,
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: textFontSize.re,
  border: '1px solid #d3d3d3',
  color: textColor.main,
  background: 'linear-gradient(to bottom, #fdfbfb, #f5f5f5) !important',
});

const ShiftHeaderCell: React.FC<{
  onClick?: () => void;
  customStyle?: SerializedStyles;
} & ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({
  children, onClick, customStyle, ...props
}) => (
  <th
    css={css(style, customStyle)}
    onClick={onClick}
    {...props}
  >
    {children}
  </th>
);

export default ShiftHeaderCell;
