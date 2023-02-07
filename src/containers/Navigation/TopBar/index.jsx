import React from "react";
import { signOut } from "next-auth/react";
import { Button, IconButton } from "@/components";
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
    <div className="bg-white z-10 p-5 shadow-lg rounded-lg w-full h-15 flex items-center">
      <div className="flex gap-4 w-full">
        <input
          ref={searchRef}
          className="w-full ring-2 rounded-sm py-2 px-3 outline-none focus:border-indigo-300 focus:ring-4 transition-all duration-150"
        />

        <Button type="button" onClick={onSubmitHandler}>
          Search
        </Button>
      </div>
      <IconButton styles="ml-10 h-10 w-10" onClick={signOutHandler}>
        <RiLogoutCircleRLine style={{ fontSize: "2rem", color: "red" }} />
      </IconButton>
    </div>
  );
};

export default TopBar;
