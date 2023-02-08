import React from "react";

const Overlay = ({ showUp = true, setShowUp, zIndex = 20 }) => {
  return (
    <div
      zIndex={zIndex}
      showUp={showUp}
      onClick={() => setShowUp(false)}
      className={`fixed top-0 left-0 right-0 bottom-0 z-40 
bg-black opacity-70
      
      `}
    />
  );
};

export default Overlay;
