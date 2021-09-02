import React, { SVGProps } from 'react';

const Report: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M11.927 2.375c.166 0 .325.066.442.183l3.573 3.572a.625.625 0 01.183.442V17c0 .345-.28.625-.625.625h-11A.625.625 0 013.875 17V3c0-.345.28-.625.625-.625h7.427zm-.259 1.25H5.125v12.75h9.75V6.831l-3.207-3.206zM13 12.375a.625.625 0 110 1.25H7a.625.625 0 110-1.25zm0-2.5a.625.625 0 110 1.25H7a.625.625 0 110-1.25zm-2-2.5a.625.625 0 110 1.25H7a.625.625 0 110-1.25z"
        fill="#333"
      />
    </g>
  </svg>
);

export default Report;
