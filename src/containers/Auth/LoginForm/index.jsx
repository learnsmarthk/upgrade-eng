import React, { useState } from "react";

import { Button, InputForm } from "@/components";
import Router from "next/router";

import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
const LoginForm = () => {
  // STATES MANAGEMENT
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [isSigningIn, setIsSigningIn] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    if (!username || !password) {
      toast.error("Please provide username and password");
      setIsSigningIn(false);
      return;
    }

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (!res.ok) {
      toast.error("Wrong username or password.");
      setIsSigningIn(false);
      return;
    } else {
      toast.success("Welcome back!");
      Router.replace("/");
      setIsSigningIn(false);
    }
  };

  const onCancelHandler = () => {
    setPassword("");
    setUsername("");
  };

  return (
    <div className="flex flex-col m-auto p-6 justify-center items-center border-2 border-slate-400 rounded-lg shadow-lg bg-white drop-shadow-lg">
      <h3 className="text-2xl font-medium">Sign in</h3>
      <form
        onSubmit={onSubmitHandler}
        className="flex m-auto w-full justify-center items-center"
      >
        <div className="flex flex-col items-center gap-2 w-80 p-3">
          <InputForm
            placeholder="Type your username"
            value={username}
            setFn={setUsername}
            label="Username"
          />
          <InputForm
            placeholder="Type your password"
            type="password"
            value={password}
            setFn={setPassword}
            label="Password"
          />
          <div className="flex h-10 gap-2 mt-6 w-full">
            <Button styles="w-full" type="submit" isLoading={isSigningIn}>
              Sign In
            </Button>
            <Button
              styles="w-full"
              variant="outlined"
              type="button"
              onClick={onCancelHandler}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
