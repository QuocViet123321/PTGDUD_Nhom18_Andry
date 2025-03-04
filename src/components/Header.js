import { useState, useRef, useEffect } from "react";

import Logo from "../assets/logo/logo1.png";
import Cart from "../assets/camket/cart.png";
// import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import SearchPopular from "./search/SearchPopular";
import SearchHistory from "./search/SearchHistory";
import Notification from "./Notification/Notification";
import SearchFlashPopular from "../components/search/SearchFlashPopular";

function Header() {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const account = JSON.parse(localStorage.getItem("isAccount")) || {};

  // Lấy dữ liệu searchHistory từ localStorage khi component được mount
  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmedSearch = search.trim();
      if (trimmedSearch && !searchHistory.includes(trimmedSearch)) {
        const updatedHistory = [...searchHistory, trimmedSearch];
        setSearchHistory(updatedHistory);

        // Lưu vào localStorage
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      }
    }
  };

  return (
    <div className="py-2 bg-white">
      <div className="container flex justify-between items-center">
        <div>
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt=""
              className="block w-[100px] rounded-full cursor-pointer"
            />
            <h4 className="text-primary font-bold italic">Giá cả phải chăng</h4>
          </Link>
        </div>
        <div className="flex flex-col mt-3">
          <div className="relative flex group ml-2">
            <IoIosSearch
              size={25}
              className="absolute top-1/4 left-3 text-secondary"
            />
            <input
              spellCheck={false}
              ref={inputRef}
              value={search}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                if (!e.target.value.startsWith(" ")) {
                  setSearch(e.target.value);
                }
              }}
              type="text"
              placeholder="Tìm kiếm sản phẩm ... "
              className="text-lg w-[550px] h-[50px] border border-gray-300 rounded-s-md pl-12
           outline-none "
            />
            {search && (
              <IoMdClose
                className="absolute top-1/2 right-[110px] -translate-y-1/2
            font-bold text-2xl cursor-pointer block "
                onClick={() => {
                  setSearch("");
                  inputRef.current.focus();
                }}
              />
            )}
            <span
              className="w-[100px] h-[50px] flex items-center justify-center text-center text-primary text-[18px] border border-gray-300 rounded-e-md
          hover:bg-[rgba(10,104,255,0.2)] cursor-pointer"
            >
              Tìm kiếm
            </span>
            {/* Tìm kiếm */}
            <div className="hidden absolute py-2 z-10 top-full left-0 translate-x-2 w-[590px] min-h-[50px] bg-white border border-gray-300 rounded-md group-hover:block">
              {searchHistory.length > 0 && (
                <SearchHistory
                  setSearchHistory={setSearchHistory}
                  searchHistory={searchHistory}
                  setSearch={setSearch}
                />
              )}
              <SearchPopular
                input={inputRef}
                searchHistory={searchHistory}
                setSearchHistory={setSearchHistory}
                setSearch={setSearch}
              />
            </div>
          </div>
          <SearchFlashPopular setSearch={setSearch} input={inputRef} />
        </div>
        <div className="flex space-x-6 items-center">
          {/* CART */}
          <Link to="/cart" className="relative group cursor-pointer">
            {/* <FiShoppingCart className="text-[35px] text-primary" /> */}
            <div className="p-3 group-hover:bg-primary/15 rounded-full">
              <img src={Cart} alt="" className="w-[40px] h-[40px] " />
            </div>
            {account.cart && account.cart.length > 0 ? (
              <span className="absolute top-4 right-3 translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-white text-sm rounded-full bg-red-500">
                {account.cart.length}
              </span>
            ) : (
              <></>
            )}
          </Link>
          {/* INFO */}
          <Notification />
          <span className="border border-gray-400 h-[30px] "></span>
          {/* ACCOUNT  */}
          {account && account.username ? (
            <Link
              to="/account"
              className="flex items-center gap-1 cursor-pointer group "
            >
              {account && account.avatar ? (
                <img
                  src={account.avatar}
                  alt=""
                  className="w-[32px] h-[32px] rounded-full"
                />
              ) : (
                <VscAccount className="text-[32px] text-secondary group-hover:text-primary" />
              )}
              <h4 className="text-secondary text-lg group-hover:text-primary">
                {account.username}
              </h4>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 cursor-pointer group "
            >
              <VscAccount className="text-[32px] text-secondary group-hover:text-primary" />
              <h4 className="text-secondary text-lg group-hover:text-primary">
                Đăng nhập
              </h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
