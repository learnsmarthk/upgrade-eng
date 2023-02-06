import React from "react";

const ContentWrapper = ({ children, styles }) => {
  return (
    <div className={`container ml-auto mr-auto h-full px-1 ${styles}`}>
      <>{children}</>
    </div>
  );
};
export default ContentWrapper;
