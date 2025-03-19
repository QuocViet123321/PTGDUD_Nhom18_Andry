import { useEffect, useState } from "react";

import Banner from "../components/Banner";
// import Category from "../components/Category";
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
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import { useProduct } from "../API/UseProvider";
import LuckyWheelWelcome from "../components/ProductFilter/LuckyWheelWelcome";
// import SearchFlashPopular from "../components/search/SearchFlashPopular";

function HomePage() {
  const [filter, setFilter] = useState(1);
  const [thuongHieu, setThuongHieu] = useState([]);
  const [giaCa, setGiaCa] = useState(0);
  const [danhGia, setDanhGia] = useState([]);
  const [productList, setProductList] = useState([]);
  const { product } = useProduct();

  // Lọc sản phẩm theo thương hiệu và đánh giá
  const filterProduct = productList.filter((item) => {
    const isThuongHieuValid =
      thuongHieu.length === 0 || thuongHieu.includes(item.thuongHieu);
    const isDanhGiaValid = danhGia.length === 0 || danhGia.includes(item.star);
    return isThuongHieuValid && isDanhGiaValid;
  });

  useEffect(() => {
    if (filter === 1 || filter === 4) {
      setThuongHieu([]);
      setDanhGia([]);
      setGiaCa(0);
    }
  }, [filter]);

  useEffect(() => {
    setProductList(product);
  }, [product]);

  let kq;
  if (giaCa === "Giá cao đến thấp") {
    kq = [...filterProduct].sort((a, b) => b.price - a.price);
  } else if (giaCa === "Giá thấp đến cao") {
    kq = [...filterProduct].sort((a, b) => a.price - b.price);
  } else {
    kq = [...filterProduct];
  }

  return (
    <div className="bg-[#f5f5fa] transform transition-all duration-500">
      <div>
        <Header />
        <div className="flex gap-4 container">
          {/* Danh mục */}
          {/* <div className="w-1/5">
            <div className="sticky pt-3 top-0 z-10">
              <Category />
            </div>
          </div> */}
          {/* Sản phẩm */}
          <div className="mt-3 w-[90%] mx-auto min-h-[900px]">
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
                {productList
                  .sort((a, b) => b.sold - a.sold)
                  .slice(0, 10)
                  .map((product) => (
                    <Product key={product.id} product={product} />
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

            {/* Sản phẩm được Filter */}
            {(thuongHieu.length > 0 || danhGia.length > 0 || giaCa !== 0) &&
              kq.length > 0 && (
                <FilterProduct title={"Kết quả lọc"}>
                  {kq.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </FilterProduct>
              )}

            {/* Sản phẩm sale */}
            <ProductSale />
            {/* Flash Sale */}
            <ProductFlashSale />
            {/* Lucky wheel */}
            <LuckyWheelWelcome />
            {/* Preview */}
            <Preview />
            {/* Sản phẩm gợi ý */}
            <ProductSuggest />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
