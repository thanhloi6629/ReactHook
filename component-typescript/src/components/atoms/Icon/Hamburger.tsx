import React, { SVGProps } from 'react';

const Hamburger: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path d="M16.5 13.375v1.25h-13v-1.25h13zm0-4v1.25h-13v-1.25h13zm0-4v1.25h-13v-1.25h13z" fill="#333" />
    </g>
  </svg>
);

export default Hamburger;
