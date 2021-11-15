/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type FlexProps = {
  children: React.ReactNode,
  styleProps?: StyleProps,
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | ' stretch',
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'baseline' | ' stretch',
};
const styles = {
  display: 'flex',
};

const FlexBox:React.FC<FlexProps> = ({
  children, styleProps, flexDirection, alignItems, justifyContent,
}): ReactElement<HTMLDivElement> => {
  const defaultStyle = {
    ...styles,
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'flex-start',
    justifyContent: justifyContent || 'flex-start',
  };
  return (
    <div style={{ ...defaultStyle, ...styleProps }}>{children}</div>
  );
};

export default FlexBox;
