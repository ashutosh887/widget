import { useState } from "react";

import { FiShare2 } from "react-icons/fi";
import Widget from "./Widget";
import { ToastContainer } from "react-toastify";

type Props = {};

const WidgetContainer = (props: Props) => {
  const [widgetActive, setWidgetActive] = useState(false);

  const updateWidgetState = () => {
    setWidgetActive(!widgetActive);
  };

  return (
    <div className="widget-container">
      <div className="flex flex-col justify-between border border-black p-4 items-center">
        <p className="font-semibold mb-6 text-2xl">
          Click on share button to share links:
        </p>

        {/* Show share button only if the widgetActive state if false else show the widget */}
        {widgetActive === false ? (
          <button
            onClick={updateWidgetState}
            className="bg-black rounded-2xl w-24 h-10 font-semibold text-white flex flex-row justify-center items-center hover:shadow-xl"
          >
            Share <FiShare2 style={{ color: "white" }} className="ml-2" />
          </button>
        ) : (
          <Widget
            widgetActive={widgetActive}
            updateWidgetState={updateWidgetState}
          />
        )}
      </div>
    </div>
  );
};

export default WidgetContainer;
