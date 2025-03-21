import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [voucherList, setVoucherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedVouchers =
      JSON.parse(localStorage.getItem("voucherList")) || [];
    setVoucherList(storedVouchers);
  }, []);

  useEffect(() => {
    const getAccount = JSON.parse(localStorage.getItem("isAccount")) || {};
    setAccount(getAccount);
  }, []);

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
        endDate: "12/07/2025",
        select: false,
      },
      {
        id: "FEBL40",
        name: "Giảm 5%",
        condition: "Cho đơn hàng từ 700k",
        valueCondition: 700000,
        percent: 5,
        endDate: "20/04/2025",
        select: false,
      },
      {
        id: "FEBL50",
        name: "Giảm 150k",
        condition: "Cho đơn hàng từ 4 triệu",
        valueCondition: 4000000,
        value: 150000,
        endDate: "30/3/2025",
        select: false,
      },
      {
        id: "FEBL20",
        name: "Giảm 1950k",
        condition: "Cho đơn hàng từ 20 triệu",
        valueCondition: 20000000,
        value: 1950000,
        endDate: "29/03/2025",
        select: false,
      },
    ])
  );

  return (
    <UserContext.Provider
      value={{
        product,
        loading,
        voucherList,
        setVoucherList,
        account,
        setAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProduct = () => useContext(UserContext);
