/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css, SerializedStyles } from '@emotion/core';
import productColor, { textFontSize, textColor } from 'components/styles'
import React from 'react'

type FontSize = typeof textFontSize 

const hoverStyle = (color: string) => css({
  ':hover': {
    color: color+ '!important',
    cursor: 'pointer',
  },
  ':focus': {
    color: color + '!important',
  }
});

console.log("chay bodytext");

const BodyText:React.FC<{
  size?: keyof FontSize;
  color?: string,
  bold?: boolean,
  customStyle?: SerializedStyles,
  isHover?: boolean,
  onClick?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void)
}> = ({children, size="re", color=textColor.main, bold, customStyle, isHover=false, onClick}) => {
  return (
    <span 
      css={css({ 
        fontsize: textFontSize[size],
        color: color,
        fontWeight: bold? 'bold': 'normal',
      }, customStyle, isHover? hoverStyle(productColor.primaryHoverText): {})}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default BodyText
