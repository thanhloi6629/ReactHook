import React, { SVGProps } from 'react';

const Module: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="4" height="4" />
    <rect x="6" width="4" height="4" />
    <rect x="12" width="4" height="4" />
    <rect y="6" width="4" height="4" />
    <rect x="6" y="6" width="4" height="4" />
    <rect x="12" y="6" width="4" height="4" />
    <rect y="12" width="4" height="4" />
    <rect x="6" y="12" width="4" height="4" />
    <rect x="12" y="12" width="4" height="4" />
  </svg>
);

export default Module;
