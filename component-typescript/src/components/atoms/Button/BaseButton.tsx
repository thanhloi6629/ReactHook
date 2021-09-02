/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';

import { css, jsx, SerializedStyles } from '@emotion/react';

export interface ButtonProps {
  text: string,
  onClick?:() => void,
  disabled?: boolean,
  ghost?: boolean,
  fullWidth?: boolean,
  minWidth?: string,
  isUploadFileButton?: SerializedStyles,
  customStyle? : SerializedStyles,

}

interface ButtonColor {
  baseColor: string,
  textColor: string,
  borderColor?: string,
  ghostColor: string,
  ghostTextColor: string,
  hoverColor: string,
  hoverBorderColor?: string,
  focusColor: string,
}

interface BaseButtonProps extends ButtonProps{
  color: ButtonColor,
}

const baseButtonStyle = css({
  fontSize: '14px',
  lineHeight: '40px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: '20px', // TODO Sketchで指定が見つかっていないためちゃんと確認する
  // fontWeight: 'bold',
  border: '1px solid white',
});
const disableStyle = css({
  backgroundColor: '#D6D6D6',
  border: '1px solid #EAEAEA',
  color: '#ADADAD',
});

const ghostStyle = (color: ButtonColor) => css({
  backgroundColor: 'transparent',
  color: color.ghostTextColor,
  border: '1px solid white',
});

const additionalStyle = (color: ButtonColor) => {
  const {baseColor, textColor, borderColor} = color;
  return css({
    backgroundColor: baseColor,
    border: `1px solid ${borderColor || baseColor}`,
    color: textColor,
  });
};

  const fullwidthStyle = css({
    width: '100%',
  });

  const minWidthStyle = (len: string) => css({
    minWidth: len,
  });


  const hoverStyle = (color: ButtonColor) => css({
    'hover' : {
      backgroundColor: color.baseColor,
      border: `1px solid ${color.hoverBorderColor || color.hoverColor}`,
      color: color.textColor,
    },
    'focus': {
      backgroundColor:  color.focusColor,
      border: `1px solid ${color.focusColor}`,
      color: color.textColor,
    }
  })

const BaseButton: React.FC<BaseButtonProps>=({
  text,
  onClick,
  disabled,
  ghost = false,
  color,
  fullWidth,
  minWidth,
  isUploadFileButton,
  customStyle = {},
  children
}) => { 
  const buttonCss = React.useMemo(() =>{
    let buttonStyle = css(baseButtonStyle, ghost?ghostStyle(color) : additionalStyle(color));
    if(fullWidth){
      buttonStyle = css(buttonStyle, hoverStyle(color), fullwidthStyle);
    }
    if(minWidth){
      buttonStyle = css(buttonStyle, hoverStyle(color), minWidthStyle(minWidth));
    }
    if(disabled){
      return css(buttonStyle, disableStyle);
    }
    return css(buttonStyle, hoverStyle(color));
  },[color, disabled, fullWidth, ghost, minWidth])

  return (
    <button
      css={[buttonCss, customStyle]}
      type="button"
      onClick={() => (onClick ? onClick() : () => {})}
      disabled={disabled}
      >
      {text}
      </button>
  );
};
export default BaseButton;

