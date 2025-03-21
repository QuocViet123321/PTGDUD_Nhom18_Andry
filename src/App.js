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
import { useProduct } from "./API/UseProvider";
import SearchPage from "./pages/SearchPage";
import LuckyWheel from "./pages/LuckyWheel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { account } = useProduct();
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập
    setIsAuthenticated(!!account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Các trang yêu cầu đăng nhập */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/productManager" element={<ProductSoldPage />} />
          <Route path="/luckyWheel" element={<LuckyWheel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
