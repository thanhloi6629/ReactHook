import React, { useState } from 'react';
import VerySlowComponent from './VerySlowComponent';

const FullComponent = () => {
    const [state, setState] = useState(1);

    const onClick = () => {
      setState(state + 1);
    };

  return (
    <div>
      <>
      <h3>component with everything</h3>
      <p>Click this button - "slow" component will re-render</p>
      <p>Re-render count: {state}</p>
      <button onClick={onClick}>click here</button>
      <VerySlowComponent />
    </>
    </div>
  )
}

export default FullComponent
