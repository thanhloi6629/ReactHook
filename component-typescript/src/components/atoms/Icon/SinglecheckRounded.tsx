import React, { SVGProps } from 'react';

const SinglecheckRounded: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M10 3.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm2.545 3.072a.625.625 0 01.91.856l-4 4.25a.625.625 0 01-.922-.013l-2-2.25a.625.625 0 11.934-.83l1.546 1.74z"
        fill="#333"
      />
    </g>
  </svg>
);

export default SinglecheckRounded;
