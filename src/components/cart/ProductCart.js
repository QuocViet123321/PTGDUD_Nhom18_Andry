// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import GiaoHangIcon from "../../assets/camket/giaohang.png";
import formatCurrency from "../../caculator/FormatCurrency";
function ProductCart({
  product,
  setCart,
  handleSelectProduct,
  selectAll,
  selectedProducts,
}) {
  const navigate = useNavigate();

  function getDateAfterFourDays() {
    const today = new Date();
    today.setDate(today.getDate() + 4);
    return today.toLocaleDateString("vi-VN");
  }

  // Hàm cập nhật số lượng sản phẩm
  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity < 1) return; // Không cho số lượng nhỏ hơn 1

    // Lấy tài khoản từ localStorage
    const account = JSON.parse(localStorage.getItem("isAccount"));
    if (account) {
      // Cập nhật số lượng trong giỏ hàng
      const updatedCart = account.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      );

      // Cập nhật lại localStorage
      account.cart = updatedCart;
      localStorage.setItem("isAccount", JSON.stringify(account));

      // Cập nhật state giỏ hàng
      setCart(updatedCart);
    }
  };

  const handleDelete = () => {
    const account = JSON.parse(localStorage.getItem("isAccount"));
    if (account) {
      const updatedCart = account.cart.filter((item) => item.id !== product.id);
      account.cart = updatedCart;
      localStorage.setItem("isAccount", JSON.stringify(account));
      setCart(updatedCart);
    }
  };

  return (
    <div className="bg-white p-3 rounded-md text-[18px] mt-3">
      <div className="flex items-center">
        <div className="flex w-[35%] items-center">
          <input
            type="checkbox"
            className="w-[25px] cursor-pointer scale-150"
            checked={selectedProducts.includes(product.id)} // Cập nhật trạng thái checkbox
            onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
          />

          <div
            className="flex cursor-pointer"
            onClick={() => {
              localStorage.setItem("detailProduct", JSON.stringify(product));
              navigate("/productDetail", { state: { fromData: true } });
            }}
          >
            <img
              src={product.img[0].img}
              alt=""
              className="w-[80px] h-[80px] mx-3"
            />
            <div>
              <h1 className="line-clamp-2">{product.name}</h1>
              <div className="flex gap-1">
                <img src={GiaoHangIcon} alt="" className="w-[28px]" />
                <span className="text-secondary text-[15px]">
                  Giao hàng ngày {getDateAfterFourDays()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%] pl-3">
          {product.sale ? (
            <div>
              <h1 className="text-red-500 font-bold">
                {formatCurrency(
                  product.price - product.price * (product.sale / 100)
                )}
              </h1>
              <del className="text-secondary text-[17px]">
                {formatCurrency(product.price)}
              </del>
            </div>
          ) : (
            <h1 className="text-red-500 font-bold">
              {formatCurrency(product.price)}
            </h1>
          )}
        </div>
        <div className="w-[20%] flex">
          <button
            className="rounded-s-md cursor-pointer hover:bg-gray-100 px-3 py-1 border border-gray-500 border-opacity-50"
            onClick={() => handleUpdateQuantity(product.quantity - 1)}
          >
            -
          </button>
          <div className="cursor-pointer hover:bg-gray-100 px-3 py-1 border-y border-gray-500 border-opacity-50">
            {product.quantity || 1}
          </div>
          <button
            className="rounded-e-md cursor-pointer hover:bg-gray-100 px-3 py-1 border border-gray-500 border-opacity-50"
            onClick={() => handleUpdateQuantity(product.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="w-[20%]">
          <h1 className="text-red-500 font-bold">
            {formatCurrency(
              (product.price - product.price * (product.sale / 100)) *
                product.quantity
            )}
          </h1>
        </div>
        <div className="w-[5%]">
          <MdOutlineDelete
            className="text-[25px] text-secondary cursor-pointer hover:scale-110 transform transition-all"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
