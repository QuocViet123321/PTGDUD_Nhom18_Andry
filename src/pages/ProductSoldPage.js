import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeImg from "../assets/camket/home.png";
import Home2Img from "../assets/camket/home2.png";
import { GoAlert } from "react-icons/go";
// import ShippingInfo from "../components/cart/ShippingInfo";
import GiaoHangIcon from "../assets/camket/giaohang.png";
import formatCurrency from "../caculator/FormatCurrency";
import LocationIcon from "../assets/camket/dinhvi.png";
import CancelOrder from "../components/CancelOrder";
import Footer from "../components/Footer";
import axios from "axios";

function ProductSoldPage() {
  const [product, setProduct] = useState([]);
  const [cancelPopup, setCancelPopup] = useState(false);
  const navigate = useNavigate();
  const account = JSON.parse(localStorage.getItem("isAccount")) || {};

  const handleCancelOrder = () => {
    if (!product.cancel) {
      const productList = account.bell || [];
      const updatedBell = productList.map((item) =>
        item.id === product.id ? { ...item, cancel: true } : item
      );

      const updatedAccount = { ...account, bell: updatedBell };
      localStorage.setItem("isAccount", JSON.stringify(updatedAccount));

      // Cập nhật lại state để render giao diện với trạng thái mới
      setProduct({ ...product, cancel: true });

      // Cập nhật lại sold cho từng sản phẩm trong đơn hàng đã hủy
      const updateSoldPromises = product.info.map((item) =>
        axios
          .get(`http://localhost:3000/product/${item.product.id}`)
          .then((response) => {
            const updatedProduct = {
              ...response.data,
              sold: Math.max(
                response.data.sold - (item.product.quantity || 1),
                0
              ),
            };

            return axios.put(
              `http://localhost:3000/product/${item.product.id}`,
              updatedProduct
            );
          })
      );

      // Đợi tất cả các cập nhật hoàn tất
      Promise.all(updateSoldPromises)
        .then(() => console.log("Cập nhật sold khi hủy đơn hàng thành công!"))
        .catch((error) => console.error("Lỗi khi cập nhật sold:", error));
    }
  };

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("productManager")));
  }, []);
  console.log(product);
  return (
    <div>
      <CancelOrder
        cancelPopup={cancelPopup}
        setCancelPopup={setCancelPopup}
        handleCancelOrder={handleCancelOrder}
      />
      {/* Header */}
      <div className="flex items-center p-8 bg-white gap-6 shadow-md">
        <Link
          to="/"
          className=" cursor-pointer group flex flex-col items-center"
        >
          <img src={HomeImg} alt="" className="group-hover:hidden" />
          <img src={Home2Img} alt="" className="hidden group-hover:block" />
          <h1 className="text-[20px] font-bold text-secondary group-hover:text-primary">
            Trang chủ
          </h1>
        </Link>
        <div className="border border-[#1aa7ff] h-[40px]"></div>
        <h1 className="text-[35px] text-[#1aa7ff] font-medium">
          THÔNG TIN ĐƠN HÀNG
        </h1>
      </div>
      {/* Body */}
      <div className=" bg-[#f5f5fa] min-h-[600px]">
        <div className="flex border border-[#c2e1ff] mx-auto mt-3 rounded-lg max-w-[660px] justify-center items-center gap-2 p-4 bg-[#f0f8ff]">
          <GoAlert className="text-primary text-[20px]" />
          <span className="text-lg">
            Quý khách lưu ý xem kỹ thông tin trước khi mua sản phẩm!
          </span>
        </div>
        {/* Body */}
        <div className="flex">
          {/* Chi tiết đơn hàng */}
          <div className="w-[70%] mx-4">
            <div>
              <h1 className="font-bold text-[30px]">Đơn hàng</h1>
              <div>
                <div>
                  {/* Product */}
                  <div>
                    {product?.info?.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-md text-[20px] mt-3"
                      >
                        <div className="flex items-center">
                          <div className="flex w-[35%] items-center">
                            <div className="flex cursor-pointer">
                              <img
                                src={product.product.img[0].img}
                                alt=""
                                className="w-[80px] h-[80px] mx-3"
                              />
                              <div>
                                <h1 className="line-clamp-2">
                                  {product.product.name}
                                </h1>
                                <div className="flex gap-1">
                                  <img
                                    src={GiaoHangIcon}
                                    alt=""
                                    className="w-[28px]"
                                  />
                                  <span className="text-secondary text-[15px]">
                                    {product.cancel ? "Đã hủy" : "Đang xử lý"}
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
                                    product.product.price -
                                      product.product.price *
                                        (product.product.sale / 100)
                                  )}
                                </h1>
                                <del className="text-secondary text-[17px]">
                                  {formatCurrency(product.product.price)}
                                </del>
                              </div>
                            ) : (
                              <h1 className="text-red-500 font-bold">
                                {formatCurrency(product.product.price)}
                              </h1>
                            )}
                          </div>
                          <div className="w-[20%] flex">
                            <div className="cursor-pointer text-[20px] px-3 py-1 ">
                              SL: {product.product.quantity || 1}
                            </div>
                          </div>
                          <div className="w-[20%]">
                            <h1 className="text-red-500 font-bold">
                              {formatCurrency(
                                (product.product.price -
                                  (product.sale
                                    ? product.product.price *
                                      (product.product.sale / 100)
                                    : 0)) *
                                  (product.product.quantity || 1)
                              )}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[33.3333%]">
                <h1 className="font-bold text-transparent text-xl">a</h1>
                <div>
                  <div className="bg-white rounded-md mx-auto w-[92%] p-4 pb-8">
                    <div className="flex justify-between py-2">
                      <h1 className="text-secondary text-xl font-semibold ">
                        Thông tin giao hàng
                      </h1>
                    </div>
                    <div className="font-bold text-lg flex">
                      <span>{product?.addressMD?.name || "Lê Quốc Việt"}</span>
                      <div className="border mx-2"></div>
                      <span>{product?.addressMD?.phone || "090808977"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={LocationIcon} alt="" className="w-[30px]" />
                      <span className="text-lg text-secondary leading-6">
                        {product?.addressMD?.address ||
                          "Phường 4, Quận Gò Vấp, TP HCM"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mã giảm giá */}
              <div className="w-[33.3333%] flex flex-col gap-3 mt-7 bg-white rounded-md mx-auto my-7 px-4 py-10">
                <div className="text-[20px] font-bold">
                  Ngày đặt hàng {" " + product.ngayDatHang}
                </div>
                <div className="text-[20px] font-bold">
                  Ngày nhận hàng dự kiến {" " + product.ngayGiaoHang}
                </div>
              </div>
              <div className="w-[33.3333%] flex flex-col gap-3 ml-4 bg-white rounded-md mx-auto my-7 px-4 py-10">
                <h1 className="text-[20px] font-bold">HÌNH THỨC THANH TOÁN</h1>
                <span className="text-secondary text-[18px]">
                  {"Thanh toán bằng tiền mặt"}
                </span>
              </div>
            </div>
          </div>
          {/* Chi tiết thanh toán */}
          <div className="flex-1">
            {/* Thông tin giá cả */}
            <div className="flex flex-col gap-3 bg-white rounded-md mx-auto my-3 w-[90%] px-4 py-8">
              <h1 className="text-[25px] font-bold">Đơn hàng</h1>
              <div className="flex justify-between">
                <span className="text-[20px] text-secondary">
                  Phí vận chuyển
                </span>
                <span className="text-[20px]">{formatCurrency(37000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[20px] text-secondary">
                  Giảm giá vận chuyển
                </span>
                <span className="text-[20px] text-[#00ab56]">
                  {formatCurrency(product.priceSaleShip)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[20px] text-secondary">Mã giảm giá:</span>
                <span className="text-[20px] text-[#00ab56]">
                  {formatCurrency(product.priceSaleVoucher)}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-300 py-2">
                <span className="text-[20px] font-bold">
                  Tổng tiền thanh toán
                </span>
                <span className="text-[30px] text-red-500">
                  {formatCurrency(product.total)}
                </span>
              </div>
              <div className="text-[20px] text-center text-primary font-bold underline"></div>
              <span className="text-secondary text-right italic">
                {`(Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và
                các chi phí phát sinh khác)`}
              </span>
              <div className="text-[20px] text-center text-primary font-bold underline">
                {product.hinhThucThanhToan}
              </div>
              <div
                className={`w-[90%] mx-auto p-3 text-white text-center text-[20px] rounded-md cursor-pointer ${
                  product.cancel
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500"
                }`}
                onClick={() => {
                  if (!product.cancel) setCancelPopup(true);
                }}
              >
                {product.cancel ? "Đã hủy" : "Hủy đơn hàng"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductSoldPage;
