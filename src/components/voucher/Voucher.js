import { GoInfo } from "react-icons/go";
import { useState } from "react";

function Voucher({ datavoucher, myVoucher, setMyVoucher, setVoucherList }) {
  const [errorMessage, setErrorMessage] = useState("");
  const isSelected = myVoucher.some((v) => v.id === datavoucher.id);

  const handleSelectVoucher = () => {
    if (isSelected) {
      // Nếu đã chọn, thì bỏ chọn
      setMyVoucher((prev) => prev.filter((v) => v.id !== datavoucher.id));
      setVoucherList((prev) =>
        prev.map((item) =>
          item.id === datavoucher.id ? { ...item, select: false } : item
        )
      );
      setErrorMessage(""); // Xóa thông báo lỗi khi bỏ chọn
    } else {
      // Nếu chưa chọn và đã đủ 2 voucher
      if (myVoucher.length >= 2) {
        setErrorMessage("Bạn chỉ được chọn tối đa 2 voucher.");
        return;
      }

      setMyVoucher((prev) => [...prev, { ...datavoucher, select: true }]);
      setVoucherList((prev) =>
        prev.map((item) =>
          item.id === datavoucher.id ? { ...item, select: true } : item
        )
      );
      setErrorMessage(""); // Xóa thông báo lỗi nếu chọn hợp lệ
    }
  };

  return (
    <div className="w-full">
      <div className="w-[100%] p-6 border rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-[25px] font-semibold">{datavoucher.name}</h1>
          <GoInfo className="text-[25px]" />
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-[20px] text-secondary">
              {datavoucher.condition}
            </p>
            <div className="text-[20px] text-secondary">
              <span>Ngày kết thúc:</span>
              <span>{" " + datavoucher.endDate}</span>
            </div>
          </div>

          <button
            className={`py-2 px-6 rounded-md font-semibold ${
              isSelected ? "bg-gray-500 text-white" : "bg-primary/70 text-white"
            }`}
            onClick={handleSelectVoucher}
          >
            {isSelected ? "Bỏ chọn" : "Chọn"}
          </button>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
        {errorMessage && (
          <p className="mt-2 text-red-500 text-lg font-semibold">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Voucher;
