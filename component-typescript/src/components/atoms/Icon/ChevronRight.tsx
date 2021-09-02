import React, { SVGProps } from 'react';

const ChevronRight: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path d="M12.116 10l-4.558 4.558.884.884L13.884 10 8.442 4.558l-.884.884z" fill="#333" />
    </g>
  </svg>
);

export default ChevronRight;
