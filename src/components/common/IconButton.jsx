import React from "react";

const IconButton = ({ children, styles, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`flex justify-center items-center rounded-full p-2 h-7 w-7  hover:bg-gray-200 ${styles}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
