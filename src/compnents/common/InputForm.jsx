import React from "react";

const InputForm = ({ value, setFn, label }) => {
  return (
    <div className="flex flex-col gap-1 text-gray-600">
      {label && <span className="font-medium ">{label}</span>}
      <input
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="ring-1 rounded-sm py-1 px-2 hover:border-indigo-400 "
      />
    </div>
  );
};

export default InputForm;
