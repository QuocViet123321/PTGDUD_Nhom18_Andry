const searchList = [
  {
    id: 1,
    name: "Điện thoại giá rẽ",
  },
  {
    id: 2,
    name: "Iphone 16",
  },
  {
    id: 3,
    name: "Tay nghe bluetooth",
  },
  {
    id: 4,
    name: "Đồng hồ thông minh",
  },
];
function SearchFlashPopular({ setSearch, input }) {
  return (
    <div className="flex gap-4 items-center p-2 rounded-md bg-white">
      {searchList.map((item) => (
        <h1
          key={item.name}
          className="text-secondary text-[18px] cursor-pointer"
          onClick={() => {
            setSearch(item.name);
            input.current.focus();
          }}
        >
          {item.name}
        </h1>
      ))}
    </div>
  );
}

export default SearchFlashPopular;
