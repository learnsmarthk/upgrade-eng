import React from "react";

import {
  BsPlusLg,
  BsFileEarmarkCheck,
  GrMultiple,
  FiDownload,
} from "@/components/icons";

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
    <div className="flex relative w-[25rem] justify-end ">
      <div
        className="flex justify-center items-center rounded-full bg-indigo-500 h-16 w-16 text-2xl text-white cursor-pointer hover:bg-indigo-600  drop-shadow-xl"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <BsPlusLg />
      </div>
      {showDropdown && (
        <div className="absolute bottom-[75px] right-0 flex flex-col items-end bg-slate-100 rounded-lg gap-2 p-3 shadow-md ">
          <button
            className="flex items-center gap-2 hover:bg-indigo-200 px-3 py-2 w-full rounded-lg"
            onClick={onClickAddSingle}
          >
            <BsFileEarmarkCheck />
            Add Single Questions
          </button>
          <button
            className="flex items-center gap-2 hover:bg-indigo-200 px-3 py-2 w-full rounded-lg"
            onClick={onClickAddMultiple}
          >
            <GrMultiple />
            Add Multiple Questions
          </button>
          <a
            download
            href="/template.csv"
            className="flex items-center gap-2 hover:bg-indigo-200 px-3 py-2 w-full rounded-lg"
            onClick={() => setShowDropdown(false)}
          >
            <FiDownload />
            Download upload template
          </a>
        </div>
      )}
    </div>
  );
};

export default AddPostListBtn;
