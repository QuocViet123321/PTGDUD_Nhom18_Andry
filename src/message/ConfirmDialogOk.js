import React from "react";

const ConfirmDialogOk = ({ message, onConfirm, onCancel }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg text-center font-semibold text-gray-800">
          {message}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/95  transition"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialogOk;
