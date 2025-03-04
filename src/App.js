import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import ChangeShippingInfo from "./components/cart/ChangeShippingInfo";
import ProductDetail from "./pages/ProductDetail";
import PaymentNowPage from "./pages/PaymentNowPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCartPage from "./pages/PaymentCartPage";
import ProductSoldPage from "./pages/ProductSoldPage";
import PrivateRoute from "./pages/PrivateRoute";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Chỉ thiết lập voucher nếu chưa có
    localStorage.setItem(
      "voucherList",
      JSON.stringify([
        {
          id: "FEBL30",
          name: "Giảm 300k",
          condition: "Cho đơn hàng từ 10 triệu",
          valueCondition: 10000000,
          value: 300000,
          endDate: "12/02/2025",
          select: false,
        },
        {
          id: "FEBL40",
          name: "Giảm 5%",
          condition: "Cho đơn hàng từ 700k",
          valueCondition: 700000,
          percent: 5,
          endDate: "20/03/2025",
          select: false,
        },
        {
          id: "FEBL50",
          name: "Giảm 150k",
          condition: "Cho đơn hàng từ 4 triệu",
          valueCondition: 4000000,
          value: 150000,
          endDate: "22/03/2025",
          select: false,
        },
        {
          id: "FEBL20",
          name: "Giảm 1950k",
          condition: "Cho đơn hàng từ 20 triệu",
          valueCondition: 20000000,
          value: 1950000,
          endDate: "22/03/2025",
          select: false,
        },
      ])
    );

    // Kiểm tra trạng thái đăng nhập
    const userData = localStorage.getItem("isAccount");
    setIsAuthenticated(!!userData);
  }, []);

  return (
    <div className="App font-title">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/instantShipping" element={<ChangeShippingInfo />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/paymentNow" element={<PaymentNowPage />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/paymentCartSuccess" element={<PaymentCartPage />} />
        <Route path="/supportPage" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Các trang yêu cầu đăng nhập */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/productManager" element={<ProductSoldPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
