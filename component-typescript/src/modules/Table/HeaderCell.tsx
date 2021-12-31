/** @jsx jsx */
import React, { ThHTMLAttributes } from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import { productColor, textFontSize, textColor } from 'components/styles';

const style = css({
  margin: '0',
  backgroundColor: productColor.primaryM95,
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: textFontSize.re,
  borderTop: `1px solid ${productColor.primaryM80}`,
  borderBottom: `1px solid ${productColor.primaryM80}`,
  color: textColor.main,
});

const HeaderCell: React.FC<{
  onClick?: () => void;
  customStyle?: SerializedStyles;
} & ThHTMLAttributes<HTMLTableHeaderCellElement>> = ({ children, onClick, customStyle }) => (
  <th
    css={css(style, customStyle)}
    onClick={onClick}
  >
    {children}
  </th>
);

export default HeaderCell;
