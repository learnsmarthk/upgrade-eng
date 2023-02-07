import React from "react";

const InputForm = ({
  value,
  setFn,
  label,
  textArea = false,
  textAreaRow = 4, //number 1,2,3
  type = "text",
  placeholder = "",
}) => {
  if (textArea) {
    return (
      <div className="flex flex-col gap-1 text-gray-600 w-full">
        {label && <span className="font-medium">{label}</span>}
        <textarea
          placeholder={placeholder}
          type={type}
          value={value}
          rows={textAreaRow}
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
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150"
      />
    </div>
  );
};

export default InputForm;
