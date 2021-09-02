import React, { SVGProps } from 'react';

const NineDots: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="4" height="4" fill="#666666" />
    <rect x="6" width="4" height="4" fill="#666666" />
    <rect x="12" width="4" height="4" fill="#666666" />
    <rect y="6" width="4" height="4" fill="#666666" />
    <rect x="6" y="6" width="4" height="4" fill="#666666" />
    <rect x="12" y="6" width="4" height="4" fill="#666666" />
    <rect y="12" width="4" height="4" fill="#666666" />
    <rect x="6" y="12" width="4" height="4" fill="#666666" />
    <rect x="12" y="12" width="4" height="4" fill="#666666" />
  </svg>
);

export default NineDots;
