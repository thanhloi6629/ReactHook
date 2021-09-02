import React, { SVGProps } from 'react';

const WorkScheudle: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M7.625 3v.875h4.75V3h1.25v.875H16.5c.345 0 .625.28.625.625v12c0 .345-.28.625-.625.625h-13a.625.625 0 01-.625-.625v-12c0-.345.28-.625.625-.625h2.875V3h1.25zm8.25 5.375H4.125v7.5h11.75v-7.5zm-3.33 1.197a.625.625 0 11.91.856l-4 4.25a.625.625 0 01-.922-.013l-2-2.25a.625.625 0 11.934-.83l1.546 1.74zm-6.17-4.447h-2.25v2h11.75v-2h-2.25V6h-1.25v-.875h-4.75V6h-1.25v-.875z"
        fill="#333"
      />
    </g>
  </svg>
);

export default WorkScheudle;
