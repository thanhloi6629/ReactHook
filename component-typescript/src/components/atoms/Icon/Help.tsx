import React, { SVGProps } from 'react';

const Help: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M10 4a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 7.875c.345 0 .625.28.625.625V14a.625.625 0 11-1.25 0v-.25c0-.345.28-.625.625-.625zm0-6.75A2.625 2.625 0 0112.625 9c0 .91-.64 1.666-1.803 2.293a.375.375 0 00-.197.33V12a.625.625 0 11-1.25 0v-.377c0-.598.328-1.147.854-1.43.802-.433 1.146-.839 1.146-1.193a1.375 1.375 0 00-2.75 0 .625.625 0 11-1.25 0A2.625 2.625 0 0110 6.375z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Help;
