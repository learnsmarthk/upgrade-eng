import React from "react";
import { InputForm, Button } from "@/components";

const TopBar = ({ setSearchTerm, searchRef }) => {
  const onSubmitHandler = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <div className="bg-white z-10 p-5 shadow-lg rounded-lg w-full h-15">
      <div className="flex gap-4">
        <input
          ref={searchRef}
          className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150"
        />

        <Button type="button" onClick={onSubmitHandler}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
