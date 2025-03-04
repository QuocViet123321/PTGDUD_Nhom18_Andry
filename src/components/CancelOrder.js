import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useCallback, useState } from "react";

function CancelOrder({ cancelPopup, setCancelPopup, handleCancelOrder }) {
  const chatRef = useRef(null);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Đóng popup khi click bên ngoài
  const handleClickOutside = useCallback(
    (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setCancelPopup(false);
      }
    },
    [setCancelPopup]
  );

  // Đóng popup khi nhấn phím ESC
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setCancelPopup(false);
      }
    },
    [setCancelPopup]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <div>
      {cancelPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={chatRef}
            className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-bold text-xl">Lý do hủy đơn hàng</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setCancelPopup(false)}
              />
            </div>

            {/* Thông báo */}
            <p className="text-red-500 text-sm mb-4">
              Mã khuyến mãi vẫn có thể áp dụng cho đơn hàng khác sau khi hủy đơn
              hàng này (với các điều kiện áp dụng tương tự, kể cả thời hạn sử
              dụng mã).
            </p>

            {/* Dropdown chọn lý do hủy */}
            <label className="block mb-2 font-medium">Lý do:</label>
            <select
              className="w-full p-2 border rounded-md mb-4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="">Chọn lý do hủy</option>
              <option value="change_mind">Thay đổi ý định</option>
              <option value="found_cheaper">Tìm thấy giá rẻ hơn</option>
              <option value="order_mistake">Đặt nhầm sản phẩm</option>
            </select>

            {/* Ô nhập chi tiết lý do */}
            <label className="block mb-2 font-medium">Chi tiết:</label>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              placeholder="Xin cho biết lý do hủy đơn hàng"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            {/* Nút Đồng ý */}
            <button
              className={`w-full p-2 rounded-md text-white ${reason ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"}`}
              onClick={() => {
                if (reason) {
                  handleCancelOrder(reason, details);
                  setCancelPopup(false);
                }
              }}
            >
              Đồng ý
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CancelOrder;
