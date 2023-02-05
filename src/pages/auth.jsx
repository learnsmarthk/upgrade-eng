import React from "react";

import { ContentWrapper, CustomHead } from "@/components";
import { LoginForm } from "@/containers";

const AuthPage = () => {
  return (
    <>
      <CustomHead title="Sign in" />
      <main className="w-screen h-screen">
        <ContentWrapper>
          <div className="flex h-full w-full mt-auto mb-auto">
            <LoginForm />
          </div>
        </ContentWrapper>
      </main>
    </>
  );
};

export default AuthPage;
