import GiaoHangIcon from "../../assets/camket/giaohang.png";
import ImgFreeShip from "../../assets/camket/freeshipGreen.png";
import ShippingInfo from "../cart/ShippingInfo";
import { GoInfo } from "react-icons/go";

function ThongTinVanChuyen() {
  function getDateAfterFourDays() {
    const today = new Date(); // Lấy ngày hiện tại
    today.setDate(today.getDate() + 4); // Thêm 4 ngày
    return today.toLocaleDateString("vi-VN"); // Định dạng ngày theo kiểu Việt Nam
  }
  return (
    <div className="flex mt-3 flex-col gap-3 bg-white rounded-md p-4">
      <h1 className="font-bold text-center text-[25px]">
        Thông tin vận chuyển
      </h1>
      <div className="flex items-center gap-1 mx-auto -mb-[30px]">
        <img src={GiaoHangIcon} alt="" className="w-[28px]" />
        <span className="text-secondary text-[20px] ">
          {"Giao hàng ngày " + getDateAfterFourDays()}
        </span>
      </div>
      <ShippingInfo />
      <div
        className="flex items-center justify-center gap-3
              border-t border-gray-200 py-2"
      >
        <img src={ImgFreeShip} alt="" className="w-[18px] h-[18px]" />
        <h1 className="text-[18px]">
          Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k
        </h1>
        <GoInfo />
      </div>
    </div>
  );
}

export default ThongTinVanChuyen;
