import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "../API/UseProvider";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q") || ""; // Lấy từ khóa từ URL
  const { product } = useProduct(); // Lấy danh sách sản phẩm
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query, product]);

  return (
    <div className="bg-[#f5f5fa] min-h-screen">
      <Header />
      <div className="container mx-auto py-6">
        <h2 className="text-xl font-semibold mb-4">
          Kết quả tìm kiếm cho: "{query}"
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
