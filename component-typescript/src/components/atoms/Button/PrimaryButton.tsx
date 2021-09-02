/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { productColor, textColor, grayScale } from 'components/styles';
import BaseButton, { ButtonProps } from './BaseButton';

/**
 * プライマリボタン
 *
 * @see https://sketch.cloud/s/2b3Pe/a/k9qkrA
 */
const PrimaryButton: React.FC<ButtonProps> = ({
  text, onClick, disabled, ghost, children, fullWidth = false, minWidth='120px', customStyle = css({})
}) => (
  <BaseButton
    color={{
      baseColor: productColor.primary,
      textColor: textColor.inversed,
      ghostColor: productColor.primary,
      ghostTextColor: productColor.primary,
      hoverColor: disabled ? grayScale.gray20 : productColor.primaryHover,
      focusColor: productColor.primary,
    }}
    text={text}
    onClick={onClick}
    disabled={disabled}
    ghost={ghost}
    fullWidth={fullWidth}
    minWidth={minWidth}
    customStyle={customStyle}
  >
    {children}
  </BaseButton>
);

export default PrimaryButton;
