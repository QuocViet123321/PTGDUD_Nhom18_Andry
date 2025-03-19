import { useState, useEffect } from "react";
import FireImg from "../../assets/camket/fireSale.svg";
import formatCurrency from "../../caculator/FormatCurrency";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../API/UseProvider";

function ProductFlashSale() {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [maxProducts, setMaxProducts] = useState(6);
  const [productList, setProductList] = useState([]);
  const { product } = useProduct();
  const [timeLeft, setTimeLeft] = useState(2483); // 41 phút 23 giây (41 * 60 + 23)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsHidden(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (product && Array.isArray(product)) {
      setProductList(product.filter((item) => item.flashSale));
    }
  }, [product]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      {isHidden && (
        <div className="bg-white mt-5 p-5 pb-10 rounded-md transform transition duration-300">
          <div className="flex justify-between">
            <div className="flex mb-2 items-center space-x-2 text-xl font-semibold">
              <span>Flash Sale</span>
              <div className="flex space-x-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {hours}
                </span>
                <span>:</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {minutes}
                </span>
                <span>:</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {seconds}
                </span>
              </div>
            </div>
            {maxProducts === productList.length ? (
              <div
                className="p-3 text-primary text-[18px] font-bold cursor-pointer"
                onClick={() => setMaxProducts(6)}
              >
                Thu gọn
              </div>
            ) : (
              <div
                className="p-3 text-primary text-[18px] font-bold cursor-pointer"
                onClick={() => setMaxProducts(productList.length)}
              >
                Xem tất cả
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
            {productList.slice(0, maxProducts).map((product, index) => (
              <div
                key={index}
                className="mx-auto w-[95%] h-[280px] border border-gray-200 rounded-lg
    cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
                onClick={() => {
                  localStorage.setItem(
                    "detailProduct",
                    JSON.stringify(product)
                  );
                  localStorage.setItem(
                    "detailProduct",
                    JSON.stringify(product)
                  );
                  navigate("/productDetail", { state: { fromData: true } });
                }}
              >
                <div className="p-2">
                  {/* IMG */}
                  <div className="relative h-[148px]">
                    <img
                      src={product.img[0].img}
                      alt=""
                      className="w-full h-[148px]"
                    />
                    <span className="absolute top-0 left-0 p-1 bg-[#ffdbde] rounded text-[#ff424e] font-bold text-[15px] leading-[150%]">
                      {"- " + product.sale + "%"}
                    </span>
                  </div>
                  <div className="p-2">
                    {/* Description */}
                    <div className="mt-3">
                      <h1 className="text-red-500 text-center text-[20px] font-semibold">
                        {formatCurrency(
                          product.price - product.price * (product.sale / 100)
                        )}
                      </h1>
                    </div>
                    {/* Process */}
                    <div className="relative">
                      <img
                        src={FireImg}
                        alt=""
                        className="z-10 absolute w-[24px] bt-[4px] left-[5px] -top-[10px]"
                      />
                      <div className="relative overflow-hidden mt-[20px] flex rounded-[16px] bg-[#ffaaaf] w-[100%] h-[20px] ">
                        <div
                          className="absolute left-0 top-0 bg-[#ff424e] h-[20px] rounded-[16px]"
                          style={{
                            width: `${(product.sold * 100) / product.inventory}%`,
                          }}
                        ></div>
                        {product.sold === product.inventory ? (
                          <span className="absolute text-white text-center text-[13px] leading-[15px] flex items-center justify-center h-full w-full ">
                            Đã bán hết
                          </span>
                        ) : product.sold > 0 ? (
                          <span className="absolute text-white text-center text-[13px] leading-[15px] flex items-center justify-center h-full w-full ">
                            Đã bán {" " + product.sold}
                          </span>
                        ) : (
                          <span className="absolute text-white text-center text-[13px] leading-[15px] flex items-center justify-center h-full w-full ">
                            Vừa mở bán
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductFlashSale;
