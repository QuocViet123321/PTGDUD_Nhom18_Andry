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
    name: "Iphone 16 plus",
  },
  {
    id: 4,
    name: "Samsung Galaxy S25",
  },
];
function SearchFlashPopular({ setSearch, input, handleSearch }) {
  return (
    <div className="hidden lg:flex gap-4 items-center p-2 rounded-md bg-white">
      {searchList.map((item) => (
        <h1
          key={item.name}
          className="text-secondary text-[18px] cursor-pointer"
          onClick={() => {
            setSearch(item.name);
            handleSearch();
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
