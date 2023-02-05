import React from "react";

const Typography = ({
  children,
  variant,
  component,
  styles,
  ...otherProps
}) => {
  if (variant === "title") {
    return (
      <span {...otherProps} className={`text-xl font-semibold  ${styles} `}>
        {children}
      </span>
    );
  }

  if (variant === "text") {
    return (
      <p {...otherProps} className={`text-base  ${styles} `}>
        {children}
      </p>
    );
  }
};

export default Typography;
