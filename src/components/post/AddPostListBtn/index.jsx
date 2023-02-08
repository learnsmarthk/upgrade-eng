import React from "react";

import { BsPlusLg } from "@/components/icons";

const AddPostListBtn = ({ btn1Fn, btn2Fn, setShowDropdown, showDropdown }) => {
  const onClickAddSingle = () => {
    btn1Fn(true);
    setShowDropdown(false);
  };

  const onClickAddMultiple = () => {
    btn2Fn(true);
    setShowDropdown(false);
  };

  return (
    <div className="flex relative w-52 justify-end">
      <div
        className="flex justify-center items-center rounded-full bg-indigo-500 h-16 w-16 text-2xl text-white shadow-xl cursor-pointer hover:bg-indigo-600"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <BsPlusLg />
      </div>
      {showDropdown && (
        <div className="absolute bottom-[70px] right-0 flex flex-col items-end bg-slate-100 rounded-lg gap-2 py-3 shadow-md">
          <button
            className="hover:bg-indigo-200 px-3 py-2 w-full"
            onClick={onClickAddSingle}
          >
            Add Single Questions
          </button>
          <button
            className="hover:bg-indigo-200 px-3 py-2 w-full"
            onClick={onClickAddMultiple}
          >
            Add Multiple Questions
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPostListBtn;
