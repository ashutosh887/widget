import React from "react";

import ToggleButton from "../Utils/ToggleButton";
type Props = {};

const ShareToWeb = (props: Props) => {
  return (
    <div className="flex flex-row border-b p-1 m-1 border-gray-500 bg-slate-200 justify-between">
      <div className="flex flex-col items-start">
        <p className="text-base font-semibold">Share to web!</p>
        <p className="text-xs">Publish and share link with anyone.</p>
      </div>
      <ToggleButton />
    </div>
  );
};

export default ShareToWeb;
