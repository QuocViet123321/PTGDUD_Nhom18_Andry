import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { HiMenu, HiX } from "react-icons/hi";
import Cart from "../assets/camket/cart.png";
import Logo from "../assets/logo/logo1.png";
import Notification from "./Notification/Notification";
import SearchFlashPopular from "../components/search/SearchFlashPopular";
import SearchPopular from "./search/SearchPopular";
import SearchHistory from "./search/SearchHistory";

function Header() {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Hook điều hướng
  const account = JSON.parse(localStorage.getItem("isAccount")) || {};

  // Lấy dữ liệu searchHistory từ localStorage khi component được mount
  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      let updatedHistory = searchHistory.filter(
        (item) => item !== trimmedSearch
      ); // Xóa nếu từ khóa đã tồn tại
      updatedHistory.unshift(trimmedSearch); // Thêm từ khóa mới vào đầu danh sách
      if (updatedHistory.length > 7) {
        updatedHistory.pop(); // Giữ tối đa 7 từ khóa
      }
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`); // Chuyển hướng đến trang tìm kiếm
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Gọi hàm tìm kiếm khi nhấn Enter
    }
  };

  return (
    <div className="py-2 flex bg-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Logo"
              className="block w-[150px] rounded-full cursor-pointer"
            />
            <h4 className="text-primary font-bold italic hidden">
              Giá cả phải chăng
            </h4>
          </Link>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="flex-col mt-3 flex">
          <div className="relative flex group ml-2">
            <IoIosSearch
              size={25}
              className="absolute top-1/4 left-3 text-secondary"
            />
            <input
              spellCheck={false}
              ref={inputRef}
              value={search}
              onKeyDown={handleKeyDown} // Nhấn Enter sẽ tìm kiếm
              onChange={(e) => {
                if (!e.target.value.startsWith(" ")) {
                  setSearch(e.target.value);
                }
              }}
              type="text"
              placeholder="Tìm kiếm sản phẩm ... "
              className="text-lg w-[300px] lg:w-[550px] h-[50px] border border-gray-300 rounded-s-md pl-12 outline-none"
            />
            {search && (
              <IoMdClose
                className="absolute top-1/2 right-[110px] -translate-y-1/2 font-bold text-2xl cursor-pointer block"
                onClick={() => {
                  setSearch("");
                  inputRef.current.focus();
                }}
              />
            )}
            <span
              className="w-[100px] h-[50px] flex items-center justify-center text-center text-primary text-[18px] border border-gray-300 rounded-e-md hover:bg-[rgba(10,104,255,0.2)] cursor-pointer"
              onClick={handleSearch} // Nhấn nút tìm kiếm sẽ tìm kiếm
            >
              Tìm kiếm
            </span>
            {/* Hiển thị lịch sử tìm kiếm */}
            <div className="hidden absolute py-2 z-10 top-full left-0 translate-x-2 w-[590px] min-h-[50px] bg-white border border-gray-300 rounded-md group-hover:block">
              {searchHistory.length > 0 && (
                <SearchHistory
                  setSearchHistory={setSearchHistory}
                  searchHistory={searchHistory}
                  setSearch={setSearch}
                  handleSearch={handleSearch}
                />
              )}
              <SearchPopular
                input={inputRef}
                searchHistory={searchHistory}
                setSearchHistory={setSearchHistory}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
            </div>
          </div>
          <SearchFlashPopular
            setSearch={setSearch}
            input={inputRef}
            handleSearch={handleSearch}
          />
        </div>

        {/* Giỏ hàng & tài khoản */}
        <div className="flex space-x-6 items-center">
          <Link to="/cart" className="relative group cursor-pointer">
            <div className="hidden lg:block p-3 group-hover:bg-primary/15 rounded-full">
              <img src={Cart} alt="Cart" className="w-[40px] h-[40px]" />
            </div>
            {account.cart && account.cart.length > 0 && (
              <span className="hidden lg:block absolute top-4 right-3 translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-white text-sm rounded-full bg-red-500">
                {account.cart.length}
              </span>
            )}
          </Link>

          {/* Thông báo */}
          <Notification />

          <span className="border border-gray-400 h-[30px] hidden md:block"></span>

          {/* Tài khoản */}
          {account.username ? (
            <Link
              to="/account"
              className="items-center gap-1 cursor-pointer group hidden md:flex"
            >
              {account.avatar ? (
                <img
                  src={account.avatar}
                  alt="Avatar"
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
              className="hidden md:flex items-center gap-1 cursor-pointer group"
            >
              <VscAccount className="text-[32px] text-secondary group-hover:text-primary" />
              <h4 className="text-secondary text-lg group-hover:text-primary">
                Đăng nhập
              </h4>
            </Link>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Dropdown menu mobile */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-white shadow-md rounded-md w-48 p-4 z-50"
        >
          <Link to="/cart" className="flex items-center space-x-2 mb-2">
            <img src={Cart} alt="Cart" className="w-8 h-8" />
            <span>Giỏ hàng</span>
          </Link>
          {account.username ? (
            <Link to="/account" className="flex items-center space-x-2 mt-2">
              <VscAccount size={25} className="text-secondary" />
              <span>{account.username}</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center space-x-2 mt-2">
              <VscAccount size={25} className="text-secondary" />
              <span>Đăng nhập</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
