import { FaHotjar } from "react-icons/fa";
import { IoPricetagsOutline, IoStar } from "react-icons/io5";
import { SiSalesforce } from "react-icons/si";
import { TbBorderAll, TbBrandAzure } from "react-icons/tb";

const filterList = [
  {
    id: 1,
    title: "Tất cả",
    icon: <TbBorderAll />,
  },
  {
    id: 2,
    title: "Thương hiệu",
    icon: <TbBrandAzure />,
  },
  {
    id: 3,
    title: "Giá cả",
    icon: <IoPricetagsOutline />,
  },
  {
    id: 4,
    title: "Bán chạy",
    icon: <FaHotjar />,
  },
  {
    id: 5,
    title: "Khuyến mãi",
    icon: <SiSalesforce />,
  },
  {
    id: 6,
    title: "Đánh giá",
    icon: <IoStar />,
  },
];

function FilterBar({ filter = 1, setFilter }) {
  return (
    <div className="bg-white mt-5 p-4 rounded-md">
      <div className="flex justify-evenly items-center  text-center">
        {filterList.map((item) =>
          item.id === filter ? (
            <div
              key={item.id}
              className="flex flex-col items-center min-w-[150px] p-1 border-transparent cursor-pointer text-white font-semibold  border-2 border-primary rounded-[8px]
            bg-primary "
            >
              <span>{item.title}</span>
              <span className=" text-[25px] scale-110">{item.icon}</span>
            </div>
          ) : (
            <div
              key={item.id}
              className="flex flex-col items-center min-w-[150px] p-1 cursor-pointer text-primary font-semibold  border-2 border-primary rounded-[8px]
            hover:bg-primary/35 hover:text-white "
              onClick={() => setFilter(item.id)}
            >
              <span>{item.title}</span>
              <span className=" text-[25px] scale-110">{item.icon}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FilterBar;
