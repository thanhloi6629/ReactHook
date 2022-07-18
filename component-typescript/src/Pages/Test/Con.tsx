import React, { useState } from 'react'

const Con = ( {parentcallback}: any) => {

    const [count, setCount] = useState(0);
    console.log("prop", parentcallback);

    const clickFuntion = () => {
        const newValue = count + 1;
        setCount(newValue);
        parentcallback(newValue);
        
    }
  return (
    <div>
      <button onClick= {clickFuntion}>
          Click me {count}
        </button>
    </div>
  )
}

export default Con
