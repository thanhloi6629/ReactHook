import React, { SVGProps } from 'react';

const SingleCheck: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M8.013 13.574l-3.546-3.99a.625.625 0 10-.934.831l4 4.5c.244.275.67.28.922.013l8-8.5a.625.625 0 00-.91-.856l-7.532 8.002z"
        fill="#333"
      />
    </g>
  </svg>
);

export default SingleCheck;
