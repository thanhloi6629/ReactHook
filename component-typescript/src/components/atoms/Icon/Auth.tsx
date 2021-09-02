import React, { SVGProps } from 'react';

const Auth: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M16 2.625c.345 0 .625.28.625.625v6.276c0 2.841-2.134 5.5-6.303 8.01a.625.625 0 01-.644 0c-4.169-2.51-6.303-5.169-6.303-8.01V3.25c0-.345.28-.625.625-.625zm-.625 1.25H4.625v5.65c0 2.243 1.76 4.5 5.375 6.743 3.614-2.243 5.375-4.5 5.375-6.742V3.875zm-2.83 3.197a.625.625 0 11.91.856l-4 4.25a.625.625 0 01-.922-.013l-2-2.25a.625.625 0 11.934-.83l1.546 1.74z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Auth;
