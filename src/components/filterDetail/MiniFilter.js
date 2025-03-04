import { FaStar } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

function MiniFilter({
  thuongHieu,
  setThuongHieu,
  danhGia,
  setDanhGia,
  giaCa,
  setGiaCa,
}) {
  return (
    <div className="sticky top-3 z-10 shadow-md">
      <div>
        {(thuongHieu.length > 0 || danhGia.length > 0 || giaCa !== 0) && (
          <div className="bg-white mt-5 p-5 rounded-lg">
            <h1 className="text-[20px] font-bold text-primary">
              Đang lọc theo
            </h1>
            <div className="flex gap-3 items-center bg-white mt-5 p-5 rounded-md">
              {/* Giá cả */}
              {giaCa !== 0 && (
                <div
                  className="bg-white  p-4 cursor-pointer rounded-md w-1/3  font-bold text-center text-[18px] border border-primary text-primary"
                  onClick={() => setGiaCa(0)}
                >
                  {giaCa}
                </div>
              )}
              {/* Thương hiệu */}
              {thuongHieu?.map((thuonghieu) => (
                <div
                  className="flex items-center gap-3 p-2 px-4 border border-primary text-primary rounded-xl
            cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    setThuongHieu(
                      thuongHieu.filter((item) => thuonghieu !== item)
                    )
                  }
                >
                  <span key={thuonghieu}>{thuonghieu}</span>
                </div>
              ))}
              {/* Đánh giá */}
              {danhGia?.map((danhgia) => (
                <div
                  key={danhgia}
                  className="flex items-center border-2 border-primary p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    setDanhGia(danhGia.filter((id) => id !== danhgia))
                  }
                >
                  {Array(danhgia)
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MiniFilter;
