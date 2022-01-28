import React from 'react';

import { productColor, textColor } from 'components/styles';
import BaseButton, { ButtonProps } from './BaseButton';

/**
 * セカンダリボタン
 *
 * @see https://sketch.cloud/s/2b3Pe/a/k9qkrA
 */
const SecondaryButton: React.FC<ButtonProps> = ({
  text, onClick, disabled, ghost, children, minWidth
}) => (
  <BaseButton
    color={{
      baseColor: productColor.secondary,
      textColor: textColor.inversed,
      ghostColor: productColor.secondary,
      ghostTextColor: productColor.secondary,
      hoverColor: productColor.secondaryP20,
      focusColor: productColor.secondaryP30,
    }}
    text={text}
    onClick={onClick}
    disabled={disabled}
    ghost={ghost}
    minWidth={minWidth}
  >
    {children}
  </BaseButton>
);

export default SecondaryButton;
