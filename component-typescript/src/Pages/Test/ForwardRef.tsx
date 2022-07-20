import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
interface RefObject {
    SayHi: () => void,
  }

const Child = forwardRef((props: {name: string}, ref: Ref<RefObject>)=> {
    const {name} = props;  
    console.log("ref", ref);
    useImperativeHandle(ref, () => ({ SayHi }));
    function SayHi() { 
        console.log("Hello " + name);

    }
    return (
      <div>
        {console.log("loideptrai")}
        {name}
      </div>
    )
     
});

const ForwardRef = () =>{
    const ref = useRef<RefObject>(null);
    const onButtonClick = (e: any) => {
      console.log("e", e);
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
