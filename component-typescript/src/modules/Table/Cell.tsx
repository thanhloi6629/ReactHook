/** @jsx jsx */
import React, { TdHTMLAttributes } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import { textFontSize, textColor } from 'components/styles';

const style = css({
  padding: '2px 4px',
  margin: '0',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: textFontSize.re,
  color: textColor.main,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const Cell : React.FC<{
  customStyle?: SerializedStyles;
}  & TdHTMLAttributes<HTMLTableCellElement>> = ({ children, customStyle }) => (
  <td css={css(style, customStyle)}>
    {children}
  </td>
);

export default Cell;
