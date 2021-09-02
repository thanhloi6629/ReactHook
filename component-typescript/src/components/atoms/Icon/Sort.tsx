import React, { SVGProps } from 'react';

const Sort: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M13.994 11a.417.417 0 01.295.711l-3.994 3.994a.417.417 0 01-.59 0l-3.994-3.994A.417.417 0 016.006 11h7.988zM9.705 4.295a.417.417 0 01.59 0l3.994 3.994a.417.417 0 01-.295.711H6.006a.417.417 0 01-.295-.711z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Sort;
