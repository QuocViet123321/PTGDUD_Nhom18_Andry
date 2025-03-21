import axios from "axios";
import { useEffect, useState } from "react";
import formatCurrency from "../../caculator/FormatCurrency";
import { useNavigate } from "react-router-dom";

function ProductAll({ account }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productList = account.bell || [];
    setProduct(productList);
  }, [account]);

  const handleCancelOrder = async (pro) => {
    // Cập nhật trạng thái hủy trong danh sách đơn hàng
    const updatedBell = product.map((item) =>
      item.id === pro.id ? { ...item, cancel: true } : item
    );

    const updatedAccount = { ...account, bell: updatedBell };
    localStorage.setItem("isAccount", JSON.stringify(updatedAccount));

    // Cập nhật state để giao diện phản ánh trạng thái mới
    setProduct(updatedBell);

    // Giảm sold cho từng sản phẩm trong đơn hàng đã hủy
    try {
      const updateSoldPromises = pro.info.map(async (item) => {
        const res = await axios.get(
          `http://localhost:3000/product/${item.product.id}`
        );
        const updatedProduct = {
          ...res.data,
          sold: Math.max(res.data.sold - (item.product.quantity || 1), 0),
        };
        await axios.put(
          `http://localhost:3000/product/${item.product.id}`,
          updatedProduct
        );
      });

      await Promise.all(updateSoldPromises);
      console.log("Cập nhật sold khi hủy đơn hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật sold:", error);
    }
  };

  return (
    <div>
      {product &&
        product.map((pro) => (
          <div key={pro.id}>
            <div className="bg-white mt-4">
              {pro.info.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center bg-white p-4 rounded-md">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.img[0].img}
                        alt=""
                        className="w-[80px] h-[80px]"
                      />
                      <div>
                        <h1 className="line-clamp-2 text-[18px]">
                          {item.product.name}
                        </h1>
                        {pro.cancel ? (
                          <span className="text-secondary">Đã hủy</span>
                        ) : (
                          <span className="text-secondary">{item.state}</span>
                        )}
                        <div>SL: {" " + item.product.quantity}</div>
                      </div>
                    </div>
                    <div className="text-[18px]">
                      {formatCurrency(item.price)}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-2 space-y-1 bg-white p-4 items-end justify-end border-t border-gray-200">
                <div className="flex gap-2">
                  <span className="text-secondary text-[20px]">
                    Giảm vận chuyển:
                  </span>
                  <span className="text-[20px] text-[#00ab56]">
                    {formatCurrency(pro.priceSaleShip)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-secondary text-[20px]">
                    Giảm Voucher:
                  </span>
                  <span className="text-[20px] text-[#00ab56]">
                    {formatCurrency(pro.priceSaleVoucher)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-secondary text-[25px]">Tổng tiền:</span>
                  <span className="text-[25px] text-red-500">
                    {formatCurrency(pro.total)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-end p-5 pt-0">
                <div
                  className="w-[150px] cursor-pointer text-[18px] rounded-lg text-center py-3 bg-primary text-white"
                  onClick={() => {
                    navigate("/productManager");
                    localStorage.setItem("productManager", JSON.stringify(pro));
                  }}
                >
                  Xem
                </div>
                {pro.cancel ? (
                  <div hidden></div>
                ) : (
                  <div
                    className="w-[150px] cursor-pointer text-[18px] rounded-lg text-center py-3 border-2 border-red-500 text-red-500"
                    onClick={() => handleCancelOrder(pro)}
                  >
                    Hủy
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductAll;
