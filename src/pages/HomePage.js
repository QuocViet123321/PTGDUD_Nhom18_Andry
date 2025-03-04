import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Category from "../components/Category";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import ProductSale from "../components/ProductFilter/ProductSale";
import ThuongHieuDetail from "../components/filterDetail/ThuongHieuFilter";
import GiaCaFilter from "../components/filterDetail/GiaCaFilter";
import ProductSuggest from "../components/ProductFilter/ProductSuggest";
import DanhGiaFilter from "../components/filterDetail/DanhGiaFilter";
import FilterProduct from "../components/FilterProduct";
import Product from "../components/Product";
import MiniFilter from "../components/filterDetail/MiniFilter";
import ProductFlashSale from "../components/ProductFilter/ProductFlashSale";
// import SearchFlashPopular from "../components/search/SearchFlashPopular";

const productSale = [
  {
    id: 1,
    name: "Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng",
    price: 31090000,
    thuongHieu: "Samsung",
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/5b/7f/3e/4df5438a9ab573ede025c941a155c1b4.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/76/aa/c3/1eaa3b283a42bfc7ab7166d06844d101.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/f3/3f/0d/8c158e4de31e496a21d4a91a73551e15.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/4c/00/f2729a5048a6c397551f28f2eaf23bd6.jpg.webp",
      },
    ],
    star: 5,
    info: [
      {
        name: "Dung lượng pin",
        value: "5000 mAh",
      },
      {
        name: "Bluetooth",
        value: "v5.3",
      },
      {
        name: "Thương hiệu",
        value: "Samsung",
      },
      {
        name: "Xuất xứ thương hiệu",
        value: "Hàn Quốc",
      },
      {
        name: "Camera sau",
        value: "12MP,200MP,50MP",
      },
      {
        name: "Camera trước",
        value: "12MP",
      },
      {
        name: "Chip đồ họa (GPU)",
        value: "Adreno 750",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Kích thước",
        value: "Dài 147 mm - Ngang 70.6 mm - Dày 7.6 mm - Nặng 167 g",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "QHD+ Dynamic AMOLED 2X",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Model",
        value: "S 24 Ultra",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Samsung Việt Nam",
    },
    sale: 15,
    sold: 12,
    inventory: 30,
  },
  {
    id: 2,
    name: "Apple iPhone 16 - Hàng chính hãng giá ưu đãi",
    price: 20900000,
    thuongHieu: "Apple",
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/08/c4/e4/7f1e1531606703edb5055af6f0578e24.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/c2/17/1b2a787927d9b8a76dbdb5c65769cdcd.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/be/1f/2b/8a9395d5f18337a1060abcc2ff5011f9.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/9e/cb/31/ab5bf3021b24e9124eeab62581f4abe5.jpg.webp",
      },
    ],
    star: 4,
    info: [
      {
        name: "Bluetooth",
        value: "Bluetooth 5.3",
      },
      {
        name: "Thương hiệu",
        value: "Apple",
      },
      {
        name: "Hỗ trợ thẻ nhớ ngoài",
        value: "Không",
      },
      {
        name: "Chip set",
        value: "Chip A18",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "Super Retina XDR",
      },
      {
        name: "GPS",
        value: "Có",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Phụ kiện đi kèm",
        value: "Cáp Sạc USB‑C (1m), Sách hướng dẫn",
      },
      {
        name: "Model",
        value: "iPhone 16",
      },
      {
        name: "Jack tai nghe",
        value: "Type-C",
      },
      {
        name: "Loại pin",
        value: "lithium-ion",
      },
      {
        name: "Xuất xứ (Made in)",
        value: "Trung Quốc",
      },
      {
        name: "Cổng sạc",
        value: "Type-C",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Apple Việt Nam",
    },
    sale: 10,
    sold: 3,
    inventory: 20,
  },
];

function HomePage() {
  const [filter, setFilter] = useState(1);
  const [thuongHieu, setThuongHieu] = useState([]);
  const [giaCa, setGiaCa] = useState(0);
  const [danhGia, setDanhGia] = useState([]);

  // Lọc sản phẩm theo thương hiệu và đánh giá
  const filterProduct = productSale.filter((item) => {
    const isThuongHieuValid = thuongHieu.includes(item.thuongHieu);
    const isDanhGiaValid = danhGia.includes(item.star); // Giả sử danhGia chứa các đánh giá sao cần lọc

    return isThuongHieuValid || isDanhGiaValid;
  });

  useEffect(() => {
    if (filter === 1 || filter === 4) {
      setThuongHieu([]);
      setDanhGia([]);
      setGiaCa(0);
    }
  }, [filter]);

  let kq;
  if (giaCa === "Giá cao đến thấp") {
    kq =
      filterProduct.length > 0
        ? filterProduct.sort((a, b) => b.price - a.price)
        : productSale.sort((a, b) => b.price - a.price);
  } else if (giaCa === "Giá thấp đến cao") {
    kq =
      filterProduct.length > 0
        ? filterProduct.sort((a, b) => a.price - b.price)
        : productSale.sort((a, b) => a.price - b.price);
  } else {
    kq = filterProduct;
  }

  return (
    <div className="bg-[#f5f5fa] transform transition-all duration-500">
      <div>
        <Header />
        <div className="flex gap-4 container">
          {/* Danh mục */}
          <div className="w-1/5">
            <div className="sticky pt-3 top-0 z-10">
              <Category />
            </div>
          </div>
          {/* Sản phẩm */}
          <div className="mt-3 w-4/5 min-h-[900px]">
            <Banner />
            {/* Bộ lọc */}
            <FilterBar filter={filter} setFilter={setFilter} />
            {/* + Thương hiệu */}
            {filter === 2 && (
              <ThuongHieuDetail
                thuongHieu={thuongHieu}
                setThuongHieu={setThuongHieu}
              />
            )}
            {/* + Giá cả */}
            {filter === 3 && <GiaCaFilter giaCa={giaCa} setGiaCa={setGiaCa} />}
            {/* + Đánh giá */}
            {filter === 6 && (
              <DanhGiaFilter danhGia={danhGia} setDanhGia={setDanhGia} />
            )}

            {/* + Bán chạy */}
            {filter === 4 && (
              <FilterProduct title={"Sản phẩm bán chạy"}>
                {productSale
                  .sort((a, b) => b.price - a.price)
                  .slice(0, 10)
                  .map((product, index) => (
                    <Product key={index} product={product} />
                  ))}
              </FilterProduct>
            )}
            <MiniFilter
              thuongHieu={thuongHieu}
              setThuongHieu={setThuongHieu}
              danhGia={danhGia}
              setDanhGia={setDanhGia}
              giaCa={giaCa}
              setGiaCa={setGiaCa}
            />

            {/* Sản phẩm được Filter  */}
            {kq.length > 0 && (
              <FilterProduct title={"Kết quả lọc"}>
                {kq.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </FilterProduct>
            )}

            {/* Sản phẩm sale  */}
            <ProductSale />
            {/* Flash Sale */}
            <ProductFlashSale />
            {/* Sản phẩm gợi ý */}
            <ProductSuggest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
