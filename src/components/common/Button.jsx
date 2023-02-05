import React from "react";

const Button = ({
  children,
  height,
  width,
  startIcon,
  endIcon,
  ...otherProps
}) => {
  if (startIcon) {
    return (
      <button
        {...otherProps}
        className="flex flex-row gap-1 justify-center items-center bg-indigo-400 hover:bg-indigo-600 transition-all duration-75 py-2 px-5 rounded-lg text-white shadow-lg"
      >
        {startIcon}
        <span>{children}</span>
      </button>
    );
  }

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
