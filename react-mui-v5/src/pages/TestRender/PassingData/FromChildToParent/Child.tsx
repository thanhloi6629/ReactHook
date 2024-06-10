import React from "react";

interface IChild {
  handleCallback: (value: string) => React.ReactNode;
}

const Child = ({ handleCallback }: IChild) => {
  const message = "Hello from child";

  return (
    <>
      <div>{handleCallback(message)}</div>;
    </>
  );
};

export default Child;
