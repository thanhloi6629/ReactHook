import React, { SVGProps } from 'react';

const Add: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M10.625 5l-.001 4.374L15 9.375v1.25l-4.375-.001V15h-1.25v-4.376L5 10.625v-1.25l4.374-.001L9.375 5h1.25z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Add;
