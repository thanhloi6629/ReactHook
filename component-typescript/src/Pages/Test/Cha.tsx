import React from 'react'
import Con from './Con';

const Cha = () => {
    const callback = (count: any) => {
        console.log("count", count);
        //lay dc state cua thang con dang dung o cha
    }
    
  return (
    <div>
      <Con parentcallback={callback}>
          <h2>con ne</h2>
      </Con>
    </div>
  )
}

export default Cha
