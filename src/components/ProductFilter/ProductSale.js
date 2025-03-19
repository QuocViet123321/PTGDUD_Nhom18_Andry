import Slider from "react-slick";
import Product from "../Product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useProduct } from "../../API/UseProvider";

// Nút điều hướng trái
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-10 bg-white shadow-lg p-2 rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-200"
      onClick={onClick}
    >
      <FaChevronLeft size={20} className="text-gray-600" />
    </button>
  );
};

// Nút điều hướng phải
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 z-10 bg-white shadow-lg p-2 rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-200"
      onClick={onClick}
    >
      <FaChevronRight size={20} className="text-gray-600" />
    </button>
  );
};

function ProductSale() {
  const [productSale, setProductSale] = useState([]);
  const { product } = useProduct();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (product.length > 0) {
      const filteredProducts = product
        .filter((p) => p.sale) // Lọc sản phẩm có sale
        .sort((a, b) => b.sale - a.sale) // Sắp xếp theo giảm giá từ cao -> thấp
        .slice(0, 15); // Lấy 15 sản phẩm có sale cao nhất
      setProductSale(filteredProducts);
    }
  }, [product]); // Thêm product vào dependency để cập nhật khi dữ liệu thay đổi

  return (
    <div className="bg-white mt-5 p-5 pb-10 rounded-md relative">
      <div>
        <h1 className="text-red-500 text-2xl py-2 font-semibold">Top Sale</h1>
        <Slider {...settings}>
          {productSale.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSale;
