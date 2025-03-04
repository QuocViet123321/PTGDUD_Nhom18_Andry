const thuongHieuList = [
  {
    id: 1,
    name: "Samsung",
  },
  {
    id: 2,
    name: "Apple",
  },
  {
    id: 3,
    name: "Xiaomi",
  },
  {
    id: 4,
    name: "Oppo",
  },
  {
    id: 5,
    name: "Vivo",
  },
  {
    id: 6,
    name: "Realme",
  },
];

function ThuongHieuDetail({ thuongHieu = [], setThuongHieu }) {
  return (
    <div className="bg-white mt-5 p-4 rounded-md ">
      <div className="flex gap-5">
        {thuongHieuList.map((item) =>
          thuongHieu.includes(item.name) ? (
            <span
              key={item.name}
              className="p-2 px-4 border border-primary text-primary rounded-xl
            cursor-pointer hover:bg-gray-200"
              onClick={() =>
                setThuongHieu(
                  thuongHieu.filter((thuonghieu) => thuonghieu !== item.name)
                )
              }
            >
              {item.name}
            </span>
          ) : (
            <span
              key={item.name}
              className="p-2 px-4 border border-gray-300 rounded-xl
            cursor-pointer hover:bg-gray-200"
              onClick={() => setThuongHieu([...thuongHieu, item.name])}
            >
              {item.name}
            </span>
          )
        )}
        <span
          className="p-2 px-6 font-semibold border-primary text-primary rounded-md border-[2px] 
            cursor-pointer hover:bg-gray-200 ml-auto"
          onClick={() => setThuongHieu([])}
        >
          Xóa lọc
        </span>
      </div>
    </div>
  );
}

export default ThuongHieuDetail;
