import React from "react";

const Button = ({
  children,
  styles,
  startIcon,
  endIcon,
  variant = "contained", //'contained'|'outlined'
  ...otherProps
}) => {
  if (startIcon) {
    return (
      <button
        {...otherProps}
        className={`flex flex-row gap-1 justify-center items-center bg-indigo-400 hover:bg-indigo-600 transition-all duration-75 py-2 px-5 rounded-lg text-white shadow-lg ${styles}`}
      >
        {startIcon}
        <span>{children}</span>
      </button>
    );
  }

  if (variant === "outlined") {
    return (
      <button
        {...otherProps}
        className={`bg-transparent hover:bg-indigo-100 transition-all duration-75 py-2 px-5 rounded-lg text-gray-800 shadow-lg border-2 border-indigo-400  ${styles}`}
      >
        {children}
      </button>
    );
  }

  if (variant === "contained") {
    return (
      <button
        {...otherProps}
        className={`bg-indigo-400  hover:bg-indigo-600 transition-all duration-75 py-2 px-5 rounded-lg text-white shadow-lg border-2 border-indigo-400  ${styles}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
