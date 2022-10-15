import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

type Props = {};

const CopyLink = (props: Props) => {
  //   const currentLink = process.env.hostURL || "currentURL.com";
  const currentURL = "https://currentURL.com";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(currentURL);
  };

  return (
    <div className="flex flex-row justify-between items-center border-b p-1 m-1 border-gray-500 bg-slate-200">
      <div className="flex flex-row items-center">
        <AiOutlineQuestionCircle className="mr-1" />
        <a
          className="underline font-bold hover:shadow-xl cursor-pointer text-sm"
          target="_blank"
        >
          {currentURL}
        </a>
      </div>
      <div className="flex flex-row">
        <button
          className="flex flex-row justify-center items-center cursor-pointer"
          onClick={copyToClipBoard}
        >
          <BsLink45Deg className="mr-1 h-4" />
          Copy link
        </button>
      </div>
    </div>
  );
};

export default CopyLink;
