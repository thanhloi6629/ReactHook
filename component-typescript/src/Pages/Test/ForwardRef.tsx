import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
interface RefObject {
    SayHi: () => void,
  }

const Child = forwardRef((props: {name: string}, ref: Ref<RefObject>)=> {
    const {name} = props;  
    useImperativeHandle(ref, () => ({ SayHi }));
    function SayHi() { 
        console.log("Hello " + name);

    }
    return <div>{name}</div>;
});

const ForwardRef = () =>{
    const ref = useRef<RefObject>(null);
    const onButtonClick = () => {
      if (ref.current) {
        ref.current.SayHi();
      }
    };
    return (
      <div>
        <Child name="Adam" ref={ref}/>
        <button onClick={onButtonClick}>Log console</button>
      </div>
    );
}

export default ForwardRef
