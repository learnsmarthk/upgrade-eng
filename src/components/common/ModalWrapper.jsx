import React from "react";

const ModalWrapper = ({ children }) => {
  return (
    <div class="modalWrapper border-2 rounded-xl border-slate-100 overflow-hidden shadow-xl z-50">
      {children}
    </div>
  );
};

export default ModalWrapper;
