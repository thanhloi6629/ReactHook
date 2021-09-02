import React, { SVGProps } from 'react';

const Clock: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M10 2.375a7.625 7.625 0 110 15.25 7.625 7.625 0 010-15.25zm0 1.25a6.375 6.375 0 100 12.75 6.375 6.375 0 000-12.75zm.625 1.875v4.375H14.5v1.25H9.375V5.5h1.25z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Clock;
