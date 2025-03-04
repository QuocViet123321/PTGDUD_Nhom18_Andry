import { useEffect, useState } from "react";
import formatCurrency from "../../caculator/FormatCurrency";
import { useNavigate } from "react-router-dom";
// import formatCurrency from "../../caculator/FormatCurrency";
function ProductCancel({ account }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productList = account.bell.filter((item) => item.cancel);
    setProduct(productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {product.map((pro, index) => (
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
                        <span className="text-secondary">{"Đã hủy"}</span>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCancel;
