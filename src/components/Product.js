import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import formatCurrency from "../caculator/FormatCurrency";

function Product({ product }) {
  const { name, price, img, star, sale, sold } = product;
  const navigate = useNavigate();
  return (
    <div
      className="mx-auto w-[95%] h-[325px] border border-gray-200 rounded-lg
    cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
      onClick={() => {
        localStorage.setItem("detailProduct", JSON.stringify(product));
        navigate("/productDetail", { state: { fromData: true } });
      }}
    >
      <div className="p-2">
        {/* IMG */}
        <div className="h-[148px]">
          <img src={img[0].img} alt="" className="w-full h-[148px]" />
        </div>
        <div className="p-2">
          {/* Description */}
          <h1 className="line-clamp-2">{name}</h1>
          <div className="flex items-center mt-1">
            {Array.from({ length: star }, (_, index) => (
              <FaStar key={index} className="text-yellow-400 text-sm" />
            ))}
          </div>
          <div>
            {sale !== undefined ? (
              <>
                <h1 className="text-red-500 text-[20px] font-semibold">
                  {formatCurrency(price - price * (sale / 100))}
                </h1>
                <div className="space-x-2">
                  <span className="p-1 bg-gray-200 rounded-lg">
                    {"-" + sale + "%"}
                  </span>
                  <del className="text-secondary text-[12px]">
                    {formatCurrency(price)}
                  </del>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-red-500 text-[20px] font-semibold">
                  {formatCurrency(price)}
                </h1>
                <div className="space-x-2">
                  <span className="p-1 rounded-lg"></span>
                  <del className="text-secondary"></del>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="p-1 border-t border-gray-200 ">
          <span className="text-secondary float-right">Đã bán {sold}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
