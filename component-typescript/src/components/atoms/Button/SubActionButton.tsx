import React from 'react';

import { grayScale, textColor } from 'components/styles';
import BaseButton, { ButtonProps } from './BaseButton';

/**
 * サブアクションボタン
 *
 * @see https://sketch.cloud/s/2b3Pe/a/k9qkrA
 */
const SubActionButton: React.FC<ButtonProps> = ({
  text, onClick, disabled, ghost, children,
}) => (
  <BaseButton
    color={{
      baseColor: grayScale.gray05,
      textColor: textColor.main,
      borderColor: grayScale.gray10,
      ghostColor: textColor.main,
      ghostTextColor: textColor.main,
      hoverColor: grayScale.gray10,
      hoverBorderColor: grayScale.gray20,
      focusColor: grayScale.gray20,
    }}
    text={text}
    onClick={onClick}
    disabled={disabled}
    ghost={ghost}
  >
    {children}
  </BaseButton>
);

export default SubActionButton;
