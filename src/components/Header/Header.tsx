import Image from "./Image";
import GetStarted from "./GetStarted";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-16 px-36 flex flex-row justify-between items-center">
      <Image />
      <GetStarted />
    </div>
  );
};

export default Header;
