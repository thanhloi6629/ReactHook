import React, { SVGProps } from 'react';

const style = {
  width: '10px',
  marginLeft: '5px',
}

const Dropdown: React.FC<SVGProps<SVGSVGElement>> = props => {
  
  return (
    <svg style={style} width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.17461 0.120381C7.38428 -0.0593303 7.69993 -0.0350495 7.87964 0.174613C8.05935 0.384276 8.03507 0.699926 7.8254 0.879637L4.3254 3.87964C4.13816 4.04013 3.86186 4.04013 3.67461 3.87964L0.174613 0.879637C-0.0350495 0.699926 -0.0593303 0.384276 0.120381 0.174613C0.300092 -0.0350495 0.615742 -0.0593303 0.825405 0.120381L4.00001 2.84147L7.17461 0.120381Z" />
    </svg>
  )
};

export default Dropdown;
