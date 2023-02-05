import React from "react";

const IconButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className="flex justify-center items-center rounded-full p-1 h-7 w-7  hover:bg-gray-200 "
    >
      {children}
    </button>
  );
};

export default IconButton;
