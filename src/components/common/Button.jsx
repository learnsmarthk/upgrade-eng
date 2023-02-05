import React from "react";

const Button = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className="bg-indigo-400 hover:bg-indigo-600 transition-all duration-75 py-2 px-5 rounded-lg text-white shadow-lg"
    >
      {children}
    </button>
  );
};

export default Button;
