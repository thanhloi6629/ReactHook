/** @jsx jsx */
import React, { TdHTMLAttributes } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import { textFontSize, grayScale } from 'components/styles';

const style = css({
  padding: '14px 10px',
  margin: '0',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: textFontSize.re,
  color: grayScale.gray100,
  // textOverflow: 'ellipsis',
  // overflow: 'hidden',
  border: '1px solid #dcdcdc',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
});

const ShiftCell : React.FC<{
  customStyle?: SerializedStyles;
} & TdHTMLAttributes<HTMLTableCellElement>> = ({ children, customStyle, ...props }) => (
  <td css={css(style, customStyle)} {...props}>
    {children}
  </td>
);

export default ShiftCell;
