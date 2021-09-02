import React, { SVGProps } from 'react';

const Upload: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M4.125 12v3.375h11.75V12h1.25v4.625H2.875V12h1.25zm5.867-9.163l4.442 4.442-.884.884-2.925-2.925V13.5h-1.25V5.22L6.434 8.163l-.884-.884 4.442-4.442z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Upload;
