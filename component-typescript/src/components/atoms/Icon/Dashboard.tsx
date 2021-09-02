import React, { SVGProps } from 'react';

const Dashboard: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M15.5 3.5a2 2 0 012 2v9a2 2 0 01-2 2h-11a2 2 0 01-2-2v-9a2 2 0 012-2h11zm0 1.25h-11a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h11a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75zM14 12.375a.625.625 0 110 1.25H6a.625.625 0 110-1.25zm0-2.5a.625.625 0 110 1.25H6a.625.625 0 110-1.25zM7.75 6.25a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-1.5a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5h1.5zm6.25.625a.625.625 0 110 1.25h-4a.625.625 0 110-1.25z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Dashboard;
