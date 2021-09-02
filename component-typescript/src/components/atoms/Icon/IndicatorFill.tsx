import React, { SVGProps } from 'react';

const IndicatorFill: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <rect x={0.5} y={0.5} width={13} height={13} rx={6.5} transform="translate(3 3)" fill="#333" />
    </g>
  </svg>
);

export default IndicatorFill;
