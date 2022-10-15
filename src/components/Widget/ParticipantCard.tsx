import React from "react";
import Invite from "./Invite";
import ShareToWeb from "./ShareToWeb";
import CopyLink from "./CopyLink";

type Props = {};

const ParticipantCard = (props: Props) => {
  return (
    <div className="flex flex-col mb-4 border border-black h-auto w-[400px]">
      <ShareToWeb />
      <Invite />
      <CopyLink />
    </div>
  );
};

export default ParticipantCard;
