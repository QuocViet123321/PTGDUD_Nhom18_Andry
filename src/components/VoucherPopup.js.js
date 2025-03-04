import { IoCloseOutline } from "react-icons/io5";
import Voucher from "./voucher/Voucher";
import { useEffect, useRef, useCallback, useState } from "react";

function VoucherPopup({
  voucherPopup,
  setVoucherPopup,
  myVoucher,
  setMyVoucher,
  voucherList,
  setVoucherList,
  setMess,
}) {
  const chatRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(""); // State lưu trữ thông báo lỗi

  // Hàm đóng popup khi click bên ngoài
  const handleClickOutside = useCallback(
    (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setVoucherPopup(false);
      }
    },
    [setVoucherPopup]
  );

  // Hàm đóng popup khi nhấn phím ESC
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setVoucherPopup(false);
      }
    },
    [setVoucherPopup]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  useEffect(() => {
    if (myVoucher.length > 2) {
      setErrorMessage("Bạn chỉ được chọn tối đa 2 voucher.");
    } else {
      setErrorMessage(""); // Xóa thông báo nếu số lượng hợp lệ
    }
  }, [myVoucher]);

  return (
    <div>
      {voucherPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              ref={chatRef}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 
            shadow-md bg-white dark:bg-gray-900 rounded-md
            duration-200 w-[700px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[30px]">Voucher</h1>
                <IoCloseOutline
                  className="text-[30px] cursor-pointer"
                  onClick={() => setVoucherPopup(false)}
                />
              </div>

              {/* Body */}
              <div className="mt-4">
                {/* Ô nhập mã voucher */}
                <div className="flex gap-3 items-center">
                  <input
                    placeholder="Nhập mã giảm giá"
                    type="search"
                    className="px-3 text-[20px] outline-none w-[75%] h-[60px] rounded-sm border border-primary"
                  />
                  <button className="flex-1 h-[60px] text-[20px] font-bold cursor-pointer leading-[60px] text-center border border-gray-200">
                    Áp dụng
                  </button>
                </div>

                {/* Thông báo lỗi */}
                {errorMessage && (
                  <p className="mt-2 text-red-500 text-lg font-semibold">
                    {errorMessage}
                  </p>
                )}

                {/* Danh sách voucher */}
                <div className="mt-4 flex gap-2 max-h-[500px] overflow-y-scroll flex-col items-center">
                  {voucherList.map(
                    (voucher) =>
                      !voucher.select && (
                        <Voucher
                          key={voucher.id}
                          datavoucher={voucher}
                          voucherList={voucherList}
                          setVoucherList={setVoucherList}
                          myVoucher={myVoucher}
                          setMyVoucher={setMyVoucher}
                          setMess={setMess}
                          disabled={myVoucher.length >= 2} // Truyền prop disabled
                        />
                      )
                  )}
                </div>
              </div>

              {/* Danh sách voucher đã chọn */}
              {myVoucher.length > 0 && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h2 className="font-bold text-[25px]">Voucher đã chọn:</h2>
                  <ul className="mt-2">
                    {myVoucher.map((voucher) => (
                      <li key={voucher.id} className="text-[20px] text-primary">
                        {voucher.name} - Giảm: {voucher.condition}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VoucherPopup;
