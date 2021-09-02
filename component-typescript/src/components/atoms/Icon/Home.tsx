import React, { SVGProps } from 'react';

const Home: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M5.625 10.625v5.125c0 .483.392.875.875.875h7a.875.875 0 00.875-.875v-5.125h1.95a.875.875 0 00.569-1.54l-6.325-5.42a.875.875 0 00-1.138 0l-6.325 5.42a.875.875 0 00.57 1.54h1.949zM10 4.823l5.31 4.552h-1.56a.625.625 0 00-.625.625v5.375h-6.25V10a.625.625 0 00-.625-.625H4.69L10 4.823z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Home;
