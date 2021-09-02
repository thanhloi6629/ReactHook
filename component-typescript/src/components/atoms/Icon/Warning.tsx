import React, { SVGProps } from 'react';

const Warning: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.05879 0.266056C9.2466 -0.0886854 9.75478 -0.0886854 9.94258 0.266056L18.9426 17.2661C19.1189 17.5991 18.8775 18 18.5007 18H0.500685C0.123898 18 -0.117503 17.5991 0.0587914 17.2661L9.05879 0.266056ZM9.50069 11C9.77683 11 10.0007 10.7761 10.0007 10.5V6.5C10.0007 6.22386 9.77683 6 9.50069 6C9.22454 6 9.00069 6.22386 9.00069 6.5V10.5C9.00069 10.7761 9.22454 11 9.50069 11ZM10.0007 14V13H9.00069V14H10.0007ZM17.6702 17H1.33114L9.50068 1.56863L17.6702 17Z" fill="#ED5D5D" />
  </svg>
);

export default Warning;
