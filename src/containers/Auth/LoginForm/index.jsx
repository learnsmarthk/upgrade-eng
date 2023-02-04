import React, { useState } from "react";

import { Button, InputForm } from "@/compnents";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ password, userName });
  };

  return (
    <div className="flex m-auto">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col items-center gap-2">
          <InputForm value={userName} setFn={setUserName} label="Username" />
          <InputForm value={password} setFn={setPassword} label="Password" />
          <div className="flex gap-2 mt-2">
            <Button type="submit">Sign In</Button>
            <Button type="submit">Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
