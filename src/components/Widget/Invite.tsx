import React, { useState } from "react";
import Select from "react-select";

type Props = {};

// Dummy Data: This data can be fetched using API
const options = [
  { value: "Ashutosh", label: "Ashutosh Jha" },
  { value: "Everyone", label: "Everyone @ OSlash" },
  { value: "CI/CD", label: "CI/CD Team" },
  { value: "Frontend", label: "Frontend Team" },
  { value: "Private", label: "Private" },
  { value: "Backend", label: "Backend Team" },
  { value: "Android", label: "Android Team" },
  { value: "ML Team", label: "ML Team" },
  { value: "Private", label: "Private" },
];

const Invite = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options: any) => {
    setSelectedOptions(options);
  };

  const onSubmit = (formData, event) => {
    // sendToAPI(formData)
    event.preventDeafault();
    event.target.reset;
  };

  return (
    <div className="flex flex-col border-b p-1 m-1 border-gray-500 bg-slate-200">
      <div className="flex justify-center pb-2">
        <form
          action="submit"
          className="flex flex-row justify-between items-center"
        >
          <Select
            placeholder="Enter People, Email or Groups"
            isMulti
            value={selectedOptions}
            onChange={handleChange}
            name="colors"
            options={options}
            className="basic-multi-select multiSelect"
            classNamePrefix="select"
          />
          <button
            type="submit"
            className="flex justify-center items-center border border-black p-1 ml-1 font-semibold bg-slate-500 text-white"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-start items-start">
        <p>Selected Options: </p>

        <div className="flex flex-row flex-wrap">
          {selectedOptions.map((selected) => (
            <div className="bg-white text-black font-semibold m-2 p-1 rounded-l w-auto">
              <p>{selected.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invite;
