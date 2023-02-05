import React from "react";
import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title} | Upgrade</title>
    </Head>
  );
};

export default CustomHead;
