import React from 'react';
import ComponentWidthScroll from './ComponentWidthScroll';

const VerySlowComponent = () => {
    console.log("Chỉ chạy lên đầu tiên, state cha thay đổi, con k bị render lại");
    return <div>Very slow component</div>;
};
  

const Test3 = () => {
  return (
    <ComponentWidthScroll >
        <VerySlowComponent />
    </ComponentWidthScroll>
  )
}

export default Test3
