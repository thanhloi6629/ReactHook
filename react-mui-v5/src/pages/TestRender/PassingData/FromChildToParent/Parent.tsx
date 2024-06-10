import React from "react";
import Child from "./Child";

const Parent = () => {
  const Callback = (message: string) => {
    return <div> {message}</div>;
  };
  return (
    <div>
      <Child handleCallback={Callback} />
    </div>
  );
};

export default Parent;
