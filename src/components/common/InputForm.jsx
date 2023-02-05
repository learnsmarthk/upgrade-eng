import React from "react";

const InputForm = ({ value, setFn, label, textArea = false }) => {
  if (textArea) {
    return (
      <div className="flex flex-col gap-1 text-gray-600 w-full">
        {label && <span className="font-medium ">{label}</span>}
        <textarea
          value={value}
          onChange={(e) => setFn(e.target.value)}
          className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150 "
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 text-gray-600 w-full  ">
      {label && <span className="font-medium ">{label}</span>}
      <input
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150"
      />
    </div>
  );
};

export default InputForm;