import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import { ContentWrapper, CustomHead } from "@/components";
import { LoginForm } from "@/containers";

const AuthPage = () => {
  return (
    <>
      <CustomHead title="Sign in" />
      <main className="w-screen h-screen bg-gradient-to-br from-cyan-300  to-blue-500">
        <ContentWrapper>
          <div className="flex h-full w-full mt-auto mb-auto">
            <LoginForm />
          </div>
        </ContentWrapper>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // nothing to return
  return {
    props: {},
  };
}

export default AuthPage;
