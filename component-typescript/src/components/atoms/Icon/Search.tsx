import React, { SVGProps } from 'react';

const Search: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.8536 17.1464L13.9994 13.2923C15.2445 11.882 16 10.0292 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C10.0292 16 11.882 15.2445 13.2923 13.9994L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" fill="#999999" />
  </svg>
);

export default Search;
