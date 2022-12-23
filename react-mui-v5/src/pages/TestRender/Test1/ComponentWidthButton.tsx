import React, { useState } from 'react';

const ComponentWidthButton = () => {
    const [state, setState] = useState(1);

    const onClick = () => {
      setState(state + 1);
    };
  
    return (
      <>
        <p>Re-render count: {state}</p>
        <button onClick={onClick}>click here</button>
      </>
    );
}

export default ComponentWidthButton
