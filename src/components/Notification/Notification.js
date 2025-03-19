import { FaRegBell } from "react-icons/fa";
import Smile from "../../assets/camket/smile.png";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Notification() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Thêm state để kiểm soát dropdown

  const account = useMemo(
    () => JSON.parse(localStorage.getItem("isAccount")) || {},
    []
  );

  useEffect(() => {
    setInfo(account.bell || []);
  }, [account]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)} // Hiện dropdown khi di chuột vào
      onMouseLeave={() => setIsOpen(false)} // Ẩn dropdown khi rời chuột khỏi
    >
      <div className="flex items-center cursor-pointer group">
        <div className="relative">
          <FaRegBell className="text-[32px] text-secondary cursor-pointer group-hover:text-primary" />
          {info.length > 0 && (
            <span className="absolute top-0 right-1 translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-white text-sm rounded-full bg-red-500">
              {info.length > 0 && (
                <span className="absolute top-0 right-1 translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-white text-sm rounded-full bg-red-500">
                  {info.reduce((total, item) => total + (!item.see ? 1 : 0), 0)}
                </span>
              )}
            </span>
          )}
        </div>
        <span className="text-secondary text-lg group-hover:text-primary ml-2 hidden md:block">
          Thông báo
        </span>
      </div>

      {/* Dropdown Notification */}
      {isOpen && (
        <div className="absolute right-0 mt-1 p-4 z-10 top-[27px] w-[400px] min-h-[50px] bg-white border border-gray-300 rounded-md shadow-lg">
          <h1 className="text-lg font-bold pb-2 border-b border-gray-200">
            Thông báo
          </h1>
          {info.reduce((total, item) => total + (!item.see ? 1 : 0), 0) > 0 ? (
            <div className="flex flex-col max-h-[400px] overflow-y-auto mt-2">
              {info.map(
                (notification, index) =>
                  !notification.see && (
                    <div
                      key={notification.id}
                      onClick={() => {
                        navigate("/productManager");
                        localStorage.setItem(
                          "productManager",
                          JSON.stringify(notification)
                        );
                        localStorage.setItem(
                          "isAccount",
                          JSON.stringify({
                            ...account,
                            bell: account.bell.map((item) =>
                              item.id === notification.id
                                ? { ...item, see: true }
                                : item
                            ),
                          })
                        );
                      }}
                    >
                      {notification.info.map((item, index) => (
                        <div
                          key={index}
                          className="cursor-pointer flex gap-3 py-3 border-b border-gray-200 last:border-none"
                        >
                          <img
                            src={item.product.img[0].img}
                            alt=""
                            className="w-[45px] h-[45px] rounded-full object-cover"
                          />
                          <div className="flex flex-col">
                            <h1 className="text-[18px] font-semibold">
                              {item.name}
                            </h1>
                            <span className="italic text-secondary">
                              Trạng thái: {item.state}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center mt-3">
              <h1 className="text-center text-2xl font-bold text-primary">
                Không có thông báo
              </h1>
              <img
                src={Smile}
                alt="Không có thông báo"
                className="w-full max-w-[200px] object-contain rounded-lg mt-2"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Notification;
