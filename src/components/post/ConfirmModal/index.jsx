import React from "react";

import { Button, ModalWrapper, Overlay } from "@/components";

const ConfirmModal = ({ cancelFn, confirmFn, title, message }) => {
  const onConfirmHandler = () => {
    confirmFn();
  };
  const onCancelHandler = () => {
    cancelFn();
  };

  return (
    <>
      <Overlay setShowUp={() => {}} />
      <ModalWrapper>
        <div className="flex flex-col p-5 bg-white z-30 h-48">
          <h3 className="text-center font-medium text-xl mb-5">{title}</h3>
          <p>{message}</p>
          <div className="flex gap-5 w-full mt-auto">
            <Button
              onClick={onConfirmHandler}
              variant="contained"
              styles="w-full"
            >
              Confirm
            </Button>
            <Button
              styles="w-full"
              onClick={onCancelHandler}
              variant="outlined"
            >
              Cancel
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ConfirmModal;
