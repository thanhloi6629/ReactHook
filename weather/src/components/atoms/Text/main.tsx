/* eslint-disable react/require-default-props */
import React from 'react';
import { StyleProps } from 'types/StyleProps';

type IText = {
    size?: number
    color?: string
    bold?: boolean
    className?: string
    styleProps?: StyleProps
    children: React.ReactNode
};

const Text:React.FC<IText> = ({
  size, color = 'black', bold, className, styleProps, children,
}) => (
  <div style={{
    color,
    fontFamily: 'inherit',
    fontWeight: bold ? 'bold' : 'normal',
    ...styleProps,
  }}
  >
    {children}
  </div>
);
export default Text;
