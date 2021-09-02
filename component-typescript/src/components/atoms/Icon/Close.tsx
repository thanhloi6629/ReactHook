import React, { SVGProps } from 'react';

const Close: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M13.094 6.023l.883.883L10.883 10l3.094 3.094-.883.883L10 10.883l-3.094 3.094-.883-.883L9.117 10 6.023 6.906l.883-.883L10 9.117l3.094-3.094z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Close;
