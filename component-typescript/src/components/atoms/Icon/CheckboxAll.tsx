import React, { SVGProps } from 'react';

const CheckboxAll: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0-6h20v20H0z" />
      <g transform="translate(4 4)">
        <rect fill="#333" width={12} height={12} rx={2} />
        <path d="M3 6.625h6a.625.625 0 100-1.25H3a.625.625 0 100 1.25z" fill="#FFF" />
      </g>
    </g>
  </svg>
);

export default CheckboxAll;
