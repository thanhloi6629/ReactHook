import React, { SVGProps } from 'react';

const ArrowUp: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="15px" height="15px" viewBox="0 0 64 64" {...props}>
    <g fill="none" fillRule="evenodd">
    <path d="M0 0h20v20H0z" />
    <path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z"
     fill="#333"
    />
    </g>
  </svg>
);

export default ArrowUp;
