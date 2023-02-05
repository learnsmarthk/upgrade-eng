import React from "react";

const InputForm = ({ value, setFn, label }) => {
  return (
    <div className="flex flex-col gap-1 text-gray-600 w-full">
      {label && <span className="font-medium ">{label}</span>}
      <input
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="w-full ring-1 rounded-sm py-2 px-3 hover:border-indigo-400 "
      />
    </div>
  );
};

export default InputForm;
