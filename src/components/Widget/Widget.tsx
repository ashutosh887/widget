import React, { useState } from "react";
import ParticipantCard from "./ParticipantCard";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  widgetActive: boolean;
  updateWidgetState: any;
};

const Widget = ({ widgetActive, updateWidgetState }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ParticipantCard />

      <button
        onClick={updateWidgetState}
        className="bg-black rounded-2xl w-24 h-10 font-semibold text-white flex flex-row justify-center items-center hover:shadow-xl"
      >
        Cancel
        <MdOutlineCancel style={{ color: "white" }} className="ml-2" />
      </button>
    </div>
  );
};

export default Widget;
