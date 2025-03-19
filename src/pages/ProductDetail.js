import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Header from "../components/Header";
import ImgDoiTra from "../assets/camket/doitra30ngay.png";
import ImgChinhHang from "../assets/camket/sanphamchinhhang.png";
// import ImgDemo from "../assets/dienthoai/samsungs24.webp";
import { FaStar } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import formatCurrency from "../caculator/FormatCurrency";
import { useEffect, useState } from "react";
import Img1 from "../assets/banner/bn1.webp";
import Img2 from "../assets/banner/bn2.png";
import Img3 from "../assets/banner/bn3.png";
import Img4 from "../assets/banner/bn4.webp";
import CamKet from "../components/productDetail/CamKet";
import ThongTinVanChuyen from "../components/productDetail/ThongTinVanChuyen";
import Comment from "../components/productDetail/Comment";
import ChatBox from "../components/chatbox/ChatBox";
import Footer from "../components/Footer";

const imgList = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img4,
  },
  {
    id: 4,
    img: Img3,
  },
];

const filterStar = [
  {
    id: 1,
    num: 1,
  },
  {
    id: 2,
    num: 2,
  },
  {
    id: 3,
    num: 3,
  },
  {
    id: 4,
    num: 4,
  },
  {
    id: 5,
    num: 5,
  },
];

const listComment = [
  {
    id: 1,
    star: 4,
    account: "Lê Hoài Nam",
    title: "Sản phẩm rất tốt, giá cả rất phù hợp.",
  },
  {
    id: 2,
    star: 3,
    account: "Đặng Thị Thu Vân",
    title: "Rất hài lòngg :)))).",
  },
];

function ProductDetail({ sale }) {
  const [isCart, setIsCart] = useState(false);
  const [num, setNum] = useState(1);
  const [filter, setFilter] = useState([1, 2]);
  const navigate = useNavigate();
  const location = useLocation();
  const [imgDevice, setImgDevice] = useState(0);
  // const [product, setProduct] = useState({});
  const product = JSON.parse(localStorage.getItem("detailProduct"));
  const account = JSON.parse(localStorage.getItem("isAccount"));
  const [cart, setCart] = useState(account?.cart || []);

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  useEffect(() => {
    if (!location.state?.fromData) {
      navigate(-1);
    }
  }, [location, navigate]);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div>
      <div className="fixed bottom-7 right-4 z-50">
        <ChatBox />
      </div>
      <div className="bg-[#f5f5fa] transform transition-all duration-500">
        <div>
          {/* HEADER */}
          <Header />
          {/* BODY */}
          <div className="flex flex-col md:flex-row gap-4 p-[24px]">
            {/* IMG */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full order-1 md:w-1/2   ">
                  <div className="sticky top-[12px] ">
                    <div className="flex flex-col md:flex-row items-center justify-center rounded-md bg-white overflow-hidden">
                      <img src={product.img[imgDevice].img} alt="" />
                    </div>
                    <div className="flex justify-center gap-1 mt-3">
                      {product.img.map((img) =>
                        img.id === imgDevice ? (
                          <div
                            key={img.id}
                            className="w-[80px] h-[80px] border-2 border-primary cursor-pointer rounded-lg"
                          >
                            <img
                              src={img.img}
                              alt=""
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        ) : (
                          <div
                            key={img.id}
                            className="w-[80px] h-[80px] border-2 border-gray-200 cursor-pointer rounded-lg"
                            // onClick={() => setImgDevice(img.id)}
                            onMouseOver={() => setImgDevice(img.id)}
                          >
                            <img
                              src={img.img}
                              alt=""
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {/* Chi tiet san pham */}
                <div className="w-full md:w-1/2 order-3 md:order-1">
                  <div>
                    {/* Sản phẩm */}
                    <div className="flex flex-col gap-3 bg-white rounded-md p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={ImgDoiTra}
                          alt=""
                          className="w-[114px] h-[20px]"
                        />
                        <img
                          src={ImgChinhHang}
                          alt=""
                          className="w-[89px] h-[20px]"
                        />
                        <span className="text-[14px]">
                          Thương hiệu: {product.info.thuonghieu}
                        </span>
                      </div>
                      {/* Tên sản phẩm */}
                      <h1 className="text-[24px] font-medium">
                        {product.name}
                      </h1>
                      <div className="flex items-center gap-4">
                        <div className="flex">
                          {Array.from({ length: product.star }, (_, index) => (
                            <FaStar
                              key={index}
                              className="text-yellow-400 text-sm"
                            />
                          ))}
                        </div>
                        <div className="border border-gray-200 h-[19px]"></div>
                        <div>Đã bán: {product.sold}</div>
                      </div>
                      <div>
                        {product.sale ? (
                          <div className="flex items-center gap-4">
                            <h1 className="text-red-500 text-[25px] font-semibold">
                              {formatCurrency(
                                product.price -
                                  product.price * (product.sale / 100)
                              )}
                            </h1>
                            <div className="space-x-2">
                              <span className="p-1 bg-gray-200 rounded-lg">
                                {"-" + 12 + "%"}
                              </span>
                              <del className="text-secondary text-[12px]">
                                {formatCurrency(product.price)}
                              </del>
                            </div>
                            <GoInfo />
                          </div>
                        ) : (
                          <div className="flex items-center gap-4">
                            <h1 className="text-red-500 text-[25px] font-semibold">
                              {formatCurrency(product.price)}
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Vận chuyển */}
                    <ThongTinVanChuyen />
                    {/* Bảo hành */}
                    <div className="flex mt-3 flex-col gap-3 bg-white rounded-md p-4">
                      <h1 className="font-bold text-center text-[25px]">
                        Thông tin bảo hành
                      </h1>
                      <div>
                        <div className="border-b border-gray-200 p-3 flex gap-2">
                          <span className="text-[18px]">
                            Thời gian bảo hành:
                          </span>
                          <span className="text-[18px] font-semibold">
                            {product.baohanh.thoigian}
                          </span>
                        </div>
                        <div className="border-b border-gray-200 p-3 flex gap-2">
                          <span className="text-[18px]">
                            Hình thức bảo hành::
                          </span>
                          <span className="text-[18px] font-semibold">
                            {product.baohanh.hinhthuc}
                          </span>
                        </div>
                        <div className="border-b border-gray-200 p-3 flex gap-2">
                          <span className="text-[18px]">Nơi bảo hành:</span>
                          <span className="text-[18px] font-semibold">
                            {product.baohanh.noibaohanh}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Cam kết */}
                    <CamKet />
                    {/* Thông số sản phẩm */}
                    <div className="flex mt-3 flex-col gap-3 bg-white rounded-md p-4">
                      <h1 className="font-bold text-center text-[25px]">
                        Thông tin chi tiết
                      </h1>
                      <div>
                        {product.info.map((item, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-200 p-3 flex gap-2"
                          >
                            <span className="text-secondary w-1/2 text-[18px]">
                              {item.name}
                            </span>
                            <span className="w-1/2 text-[18px]">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Đánh giá khách hàng */}
              <div className="bg-white rounded-md p-7">
                <h1 className="text-[25px] font-semibold">Đánh giá</h1>
                <div className="flex gap-10">
                  <div>
                    <h1 className="text-[18px] my-3">Tổng quan</h1>
                    {/* Star */}
                    <div>
                      <div className="flex gap-2">
                        <h1 className="text-[35px] font-semibold">{"4.9"}</h1>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar
                              key={index}
                              className="text-yellow-400 text-lg"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-secondary">{`(${"41 đánh giá"})`}</span>
                      {/* Chi tiết số Star */}
                      <div>
                        {/* 5 star */}
                        <div className="flex gap-2 w-[150px] justify-between items-center mt-3">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                          </div>
                          <span className="text-secondary">{"2"}</span>
                        </div>
                        {/* 4 star */}
                        <div className="flex gap-2 w-[150px] justify-between items-center mt-3">
                          <div className="flex items-center">
                            {Array.from({ length: 4 }, (_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                          </div>
                          <span className="text-secondary">{"2"}</span>
                        </div>
                        {/* 3 star */}
                        <div className="flex gap-2 w-[150px] justify-between items-center mt-3">
                          <div className="flex items-center">
                            {Array.from({ length: 3 }, (_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                          </div>
                          <span className="text-secondary">{"2"}</span>
                        </div>
                        {/* 2 star */}
                        <div className="flex gap-2 w-[150px] justify-between items-center mt-3">
                          <div className="flex items-center">
                            {Array.from({ length: 2 }, (_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                          </div>
                          <span className="text-secondary">{"2"}</span>
                        </div>
                        {/* 1 star */}
                        <div className="flex gap-2 w-[150px] justify-between items-center mt-3">
                          <div className="flex items-center">
                            {Array.from({ length: 1 }, (_, index) => (
                              <FaStar
                                key={index}
                                className="text-yellow-400 text-lg"
                              />
                            ))}
                          </div>
                          <span className="text-secondary">{"2"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 "></div>
                  {/* Bình luận */}
                  <div className="flex-1">
                    {/* Lọc */}
                    <h1 className="m-2 text-[20px] font-bold">Lọc theo</h1>
                    <div className="flex gap-3">
                      {filterStar.map((star) =>
                        filter.includes(star.id) ? (
                          <div
                            key={star.id}
                            className="text-[20px] border border-primary text-primary p-3 rounded-full
                        cursor-pointer"
                            onClick={() =>
                              setFilter(
                                filter.filter((item) => item !== star.num)
                              )
                            }
                          >
                            {star.num + " sao"}
                          </div>
                        ) : (
                          <div
                            key={star.id}
                            className="text-[20px] border border-gray-200 p-3 rounded-full
                        cursor-pointer"
                            onClick={() =>
                              setFilter((prev) => [...prev, star.id])
                            }
                          >
                            {star.num + " sao"}
                          </div>
                        )
                      )}
                    </div>
                    {/* List bình luận */}
                    <div>
                      <div className="space-y-5 mt-3">
                        {listComment.map((list) => (
                          <Comment key={list.id} list={list} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Thanh toan */}
            <div className="w-full md:w-1/3 order-2 md:order-1">
              <div className=" sticky top-[12px]">
                <div className=" flex flex-col gap-4 bg-white rounded-md p-4">
                  <div className="flex gap-3 items-center">
                    <img
                      src={product.img[imgDevice].img}
                      alt=""
                      className="w-[50px] h-[50px]"
                    />
                    <h1 className="line-clamp-1 text-[17px] font-medium">
                      {product.name}
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-[20px] font-semibold mb-2">Số lượng</h1>
                    <div className="flex gap-2">
                      <div
                        className="flex items-center cursor-pointer justify-center text-[28px] w-[39px] h-[39px] border border-gray-200 rounded-md text-secondary"
                        onClick={() => {
                          num !== 1 ? setNum(num - 1) : setNum(1);
                        }}
                      >
                        -
                      </div>
                      <div className="flex items-center cursor-pointer justify-center text-[20px] w-[39px] h-[39px] border border-gray-200 rounded-md text-secondary">
                        {num}
                      </div>
                      <div
                        className="flex items-center cursor-pointer justify-center text-[28px] w-[39px] h-[39px] border border-gray-200 rounded-md text-secondary"
                        onClick={() => {
                          setNum(num + 1);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[20px] font-semibold mb-2">Giá tiền</h1>
                    <div className="text-[30px] text-red-500">
                      {product.sale ? (
                        <div className="flex items-center gap-4">
                          <h1 className="text-red-500 text-[30px] font-semibold">
                            {formatCurrency(
                              product.price -
                                product.price * (product.sale / 100)
                            )}
                          </h1>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <h1 className="text-red-500 text-[30px] font-semibold">
                            {formatCurrency(product.price)}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Mua */}
                  <div className="space-y-2">
                    <div
                      className="w-[90%] mx-auto p-3 bg-red-500 text-white text-center text-[20px] rounded-md cursor-pointer"
                      onClick={() => {
                        if (account) {
                          localStorage.setItem(
                            "ProductPayNow",
                            JSON.stringify({
                              ...product,
                              quantity: num,
                            })
                          );
                          navigate("/paymentNow");
                        } else {
                          navigate("/login");
                        }
                      }}
                    >
                      Mua ngay
                    </div>
                    <div
                      className="w-[90%] mx-auto p-3 text-primary text-center border border-primary text-[20px] rounded-md cursor-pointer"
                      onClick={() => {
                        if (account) {
                          account.cart = account.cart || [];

                          // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
                          const existingProduct = account.cart.find(
                            (item) => item.id === product.id
                          );

                          if (!existingProduct) {
                            // Nếu chưa có, thêm mới với quantity = 1
                            account.cart.push({ ...product, quantity: num });
                          }

                          // Cập nhật localStorage
                          localStorage.setItem(
                            "isAccount",
                            JSON.stringify(account)
                          );

                          // Cập nhật trong danh sách tài khoản
                          const listAccount =
                            JSON.parse(localStorage.getItem("account")) || [];
                          const updatedListAccount = listAccount.map((acc) =>
                            acc.username === account.username
                              ? { ...acc, cart: account.cart }
                              : acc
                          );
                          localStorage.setItem(
                            "account",
                            JSON.stringify(updatedListAccount)
                          );

                          setIsCart(true);
                        } else {
                          navigate("/login");
                        }
                      }}
                    >
                      {isProductInCart(product.id)
                        ? "Đã thêm vào giỏ hàng"
                        : isCart
                          ? "Đã thêm vào giỏ hàng"
                          : "Thêm vào giỏ hàng"}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Slider {...settings}>
                    {imgList.map((img, index) => (
                      <div key={index}>
                        <div>
                          <img
                            src={img.img}
                            alt=""
                            className="w-full rounded-md h-[173px]"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
