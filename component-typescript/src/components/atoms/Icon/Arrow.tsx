import React, { SVGProps } from 'react';

const Arrow: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M13.442 5.558L17.884 10l-4.442 4.442-.884-.884 2.933-2.934L2 10.625v-1.25h13.491l-2.933-2.933.884-.884z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Arrow;
