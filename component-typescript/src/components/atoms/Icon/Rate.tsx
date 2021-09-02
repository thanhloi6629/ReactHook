import React, { SVGProps } from 'react';

const Rate: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M14.646 4.141a.625.625 0 01.088.88l-9 11a.625.625 0 11-.968-.792l9-11a.625.625 0 01.88-.088zM13.5 10.625a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-7-7.25a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Rate;
