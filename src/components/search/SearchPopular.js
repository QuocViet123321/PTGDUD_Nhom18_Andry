import { IoIosSearch } from "react-icons/io";

const searchList = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
  },
  {
    id: 2,
    name: "Iphone 16",
  },
  {
    id: 3,
    name: "Apple",
  },
  {
    id: 4,
    name: "Redmi Note 10",
  },
];

function SearchPopular({ setSearch, input, handleSearch }) {
  return (
    <div>
      {/* Tippy tìm kiếm*/}
      <div>
        <div>
          <h1 className="text-lg font-bold p-3">Tìm kiếm phổ biến</h1>
          <div>
            {searchList.map((search) => (
              <div
                key={search.id}
                className="flex p-2 items-center gap-2 hover:bg-gray-200 cursor-pointer "
                onClick={() => {
                  setSearch(search.name);
                  handleSearch();
                  input.current.focus();
                }}
              >
                <IoIosSearch className="text-[28px] text-secondary" />
                <span className="text-lg cursor-pointer">{search.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPopular;
