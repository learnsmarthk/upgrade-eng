import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="container ml-auto mr-auto h-full px-1">
      <>{children}</>
    </div>
  );
};
export default ContentWrapper;
