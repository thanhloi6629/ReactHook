import React, { SVGProps } from 'react';

const Ranking: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M10 4a1 1 0 01.6 1.8l2.142 4.287 2.388-1.593a1 1 0 11.996.498.65.65 0 01-.027.188l-1.474 4.909V16c0 .345-.28.625-.625.625H6A.625.625 0 015.375 16v-1.908L3.901 9.18a.646.646 0 01-.028-.189A.999.999 0 014 7a1 1 0 01.87 1.494l2.388 1.593L9.4 5.8A.998.998 0 0110 4zm3.375 10.625h-6.75v.75h6.75v-.75zM10 7.398L8.059 11.28a.625.625 0 01-.906.24l-1.556-1.037.868 2.892h7.07l.868-2.892-1.556 1.037a.625.625 0 01-.906-.24L10 7.398z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Ranking;
