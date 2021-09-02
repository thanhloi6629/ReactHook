import React, { SVGProps } from 'react';

const Notification: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" fill="white" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.375a2.125 2.125 0 00-1.744 3.34A4.626 4.626 0 005.375 10v4.375H4.5l-.092.007a.625.625 0 00.092 1.243H6.938a3.126 3.126 0 006.125 0H15.5l.092-.007a.625.625 0 00-.092-1.243h-.875V10a4.626 4.626 0 00-2.881-4.285A2.125 2.125 0 0010 2.375zm1.768 13.25H8.232a1.876 1.876 0 003.536 0zM13.375 10v4.375h-6.75V10A3.375 3.375 0 0110 6.625l.185.005a3.375 3.375 0 013.19 3.37zM10 5.375a.875.875 0 100-1.75.875.875 0 000 1.75z"
      fill="#333"
    />
  </svg>
);

export default Notification;
