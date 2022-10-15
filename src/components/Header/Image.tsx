import React from "react";

type Props = {};

const Image = (props: Props) => {
  return (
    <div className="flex flex-row w-32 justify-around items-center">
      <img src="./logo.png" alt="Logo" className="h-max w-max" />
    </div>
  );
};

export default Image;
