import React, { SVGProps } from 'react';

const ChevronLeft: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path d="M8.884 10l4.558 4.558-.884.884L7.116 10l5.442-5.442.884.884z" fill="#333" />
    </g>
  </svg>
);

export default ChevronLeft;
