import React, { ReactElement, useState } from 'react'


const ComponentWidthScroll = ({ children }: any) => {
    const [value, setValue] = useState(0);
    console.log("value", value);

  return (
      <div>
          <button onClick={() => setValue(value + 1)}>loi dept trai</button>
          {value}
      {children}
    </div>
  )
}

export default ComponentWidthScroll
