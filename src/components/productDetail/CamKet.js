import ImgHangThat from "../../assets/camket/chinhhang.png";
import ImgFree from "../../assets/camket/freeship.png";
import ImgHoanTien from "../../assets/camket/hoantien.png";
import ImgGiaoNhanh from "../../assets/camket/giaonhanh.png";
import ImgGiaRe from "../../assets/camket/giare.png";
import Img30Doitra from "../../assets/camket/doitra.png";

function CamKet() {
  return (
    <div className="flex mt-3 flex-col gap-3 bg-white rounded-md p-4">
      <h1 className="font-bold text-center text-[25px]">Cam kết</h1>
      <div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={ImgHangThat} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"100% hàng thật"}</span>
        </div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={ImgFree} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"FreeShip mọi nơi"}</span>
        </div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={ImgHoanTien} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"Hoàn 200% nếu hàng giả"}</span>
        </div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={Img30Doitra} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"30 ngày đổi trả"}</span>
        </div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={ImgGiaoNhanh} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"Giao nhanh"}</span>
        </div>
        <div className="border-b border-gray-200 p-3 flex items-center gap-4">
          <img src={ImgGiaRe} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[20px] ">{"Giá siêu rẽ"}</span>
        </div>
      </div>
    </div>
  );
}

export default CamKet;
