import React from "react";

import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      className="my-0 mx-auto flex items-center justify-center 
     "
    >
      <Oval
        height="25"
        width="25"
        radius="9"
        color="#fff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
