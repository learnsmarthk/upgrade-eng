import React, { useState } from "react";

import { Button, InputForm } from "@/components";
import Router from "next/router";

import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
const LoginForm = () => {
  // STATES MANAGEMENT
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please provide username and password");
      return;
    }

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (!res.ok) {
      return toast.error("Wrong username or password.");
    } else {
      toast.success("Welcome back!");
      Router.replace("/");
    }
  };

  const onCancelHandler = () => {
    setPassword("");
    setUsername("");
  };

  return (
    <div className="flex flex-col m-auto p-6 justify-center items-center border-2 rounded-lg shadow-md">
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
          <div className="flex gap-2 mt-6">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={onCancelHandler}>
              Clear
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
