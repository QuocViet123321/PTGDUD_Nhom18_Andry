import { FaStar } from "react-icons/fa";

const starList = [
  {
    id: 1,
    num: 1,
  },
  {
    id: 2,
    num: 2,
  },
  {
    id: 3,
    num: 3,
  },
  {
    id: 4,
    num: 4,
  },
  {
    id: 5,
    num: 5,
  },
];

function DanhGiaFilter({ danhGia, setDanhGia }) {
  return (
    <div className="bg-white mt-5 p-3 rounded-md">
      <h1 className="my-2 font-semibold text-[18px] ">Chọn đánh giá</h1>

      <div className="flex gap-3">
        {starList.map((item) =>
          danhGia.includes(item.id) ? (
            <div
              key={item.id}
              className="flex items-center border-2 border-primary mb-2 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => setDanhGia(danhGia.filter((id) => id !== item.id))}
            >
              {Array(item.num)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
          ) : (
            <div
              key={item.id}
              className="flex items-center mb-2 p-3 border-2 border-transparent bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => setDanhGia([...danhGia, item.id])}
            >
              {Array(item.num)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
          )
        )}
        <span
          className="px-3 p-2 pt-3 font-semibold border-primary text-primary rounded-md border-[2px] 
            cursor-pointer hover:bg-gray-200"
          onClick={() => setDanhGia([])}
        >
          Xóa lọc
        </span>
      </div>
    </div>
  );
}

export default DanhGiaFilter;
