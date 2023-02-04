import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="container ml-auto mr-auto h-full">
      <>{children}</>
    </div>
  );
};
export default ContentWrapper;
