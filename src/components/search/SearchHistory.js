import { IoIosSearch } from "react-icons/io";

function SearchHistory({
  searchHistory,
  setSearchHistory,
  setSearch,
  handleSearch,
}) {
  const handleDelete = (searchToDelete) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== searchToDelete
    );
    setSearchHistory(updatedHistory);

    // Cập nhật lại localStorage
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div>
      <div>
        <h1 className="text-lg font-bold p-3">Lịch sử tìm kiếm</h1>
        <div>
          {searchHistory.map((search, index) => (
            <div
              key={index}
              className="flex p-2 items-center gap-2 hover:bg-gray-200 cursor-pointer "
              onClick={() => {
                setSearch(search);
                handleSearch();
              }}
            >
              <IoIosSearch className="text-[28px] text-secondary" />
              <span className="text-lg cursor-pointer">{search}</span>
              <span
                className="text-primary ml-auto px-2 hover:underline"
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn sự kiện click vào cả dòng
                  handleDelete(search);
                }}
              >
                Xoá
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchHistory;
