import DienThoaiImg from "../assets/danhmuc/dienthoai.webp";
import DongHoImg from "../assets/danhmuc/dongho.png";

const categoryList = [
  {
    id: 1,
    name: "Điện thoại",
    img: DienThoaiImg,
  },
  {
    id: 2,
    name: "Đồng hồ",
    img: DongHoImg,
  },
  {
    id: 1,
    name: "Điện thoại",
    img: DienThoaiImg,
  },
  {
    id: 2,
    name: "Đồng hồ",
    img: DongHoImg,
  },
  {
    id: 1,
    name: "Điện thoại",
    img: DienThoaiImg,
  },
  {
    id: 2,
    name: "Đồng hồ",
    img: DongHoImg,
  },
];

function Category() {
  return (
    <div className="bg-white rounded-md">
      <div>
        <h1 className="text-[25px] text-center font-bold py-2">Danh mục</h1>
        <ul>
          {categoryList.map((category, index) => (
            <li
              key={index}
              className="flex items-center gap-3  m-2 p-2 pl-3 hover:bg-gray-200 cursor-pointer rounded-lg"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-[40px]"
              />
              <p className="text-[18px]">{category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
