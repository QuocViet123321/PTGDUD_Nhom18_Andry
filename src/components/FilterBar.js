import { FaHotjar } from "react-icons/fa";
import { IoPricetagsOutline, IoStar } from "react-icons/io5";
import { SiSalesforce } from "react-icons/si";
import { TbBorderAll, TbBrandAzure } from "react-icons/tb";

const filterList = [
  { id: 1, title: "Tất cả", icon: <TbBorderAll /> },
  { id: 2, title: "Thương hiệu", icon: <TbBrandAzure /> },
  { id: 3, title: "Giá cả", icon: <IoPricetagsOutline /> },
  { id: 4, title: "Bán chạy", icon: <FaHotjar /> },
  { id: 5, title: "Khuyến mãi", icon: <SiSalesforce /> },
  { id: 6, title: "Đánh giá", icon: <IoStar /> },
];

function FilterBar({ filter = 1, setFilter }) {
  return (
    <div className="bg-white mt-5 p-4 rounded-md">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-2 text-center">
        {filterList.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center w-[80%] p-2 cursor-pointer font-semibold border-2 rounded-lg 
            transition-all duration-200 ${
              item.id === filter
                ? "bg-primary text-white border-primary"
                : "text-primary border-primary hover:bg-primary/35 hover:text-white"
            }`}
            onClick={() => setFilter(item.id)}
          >
            <span className="text-sm md:text-base">{item.title}</span>
            <span className="text-[20px] md:text-[25px]">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
