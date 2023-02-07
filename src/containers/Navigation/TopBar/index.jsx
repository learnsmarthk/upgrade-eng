import React from "react";
import { signOut } from "next-auth/react";
import { Button, IconButton, Typography } from "@/components";
import { RiLogoutCircleRLine } from "@/components/icons";
import Router from "next/router";

const TopBar = ({ setSearchTerm, searchRef }) => {
  const onSubmitHandler = () => {
    setSearchTerm(searchRef.current.value);
  };

  const signOutHandler = async () => {
    await signOut();
    Router.replace("/auth");
  };

  return (
    <div className="sticky top-0 bg-white z-10 p-5 shadow-lg rounded-lg w-full h-15 flex items-center border-2 border-gray-200">
      <div className="flex gap-4 w-full mr-auto">
        <input
          placeholder="search..."
          ref={searchRef}
          className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150"
        />

        <Button type="button" onClick={onSubmitHandler}>
          Search
        </Button>
      </div>

      <button
        onClick={signOutHandler}
        className="flex gap-2 ml-10 items-center w-28"
      >
        <Typography>Sign out</Typography>
        <RiLogoutCircleRLine style={{ fontSize: "1.2rem", color: "red" }} />
      </button>
    </div>
  );
};

export default TopBar;
