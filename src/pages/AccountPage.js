import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { RiAccountCircle2Line } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import AccountInfo from "../components/itemsAccountInfo/AccountInfo";
import OrderManagement from "../components/itemsAccountInfo/OrderManagement";
import ConfirmDialog from "../message/ConfirmDialog";

const infoList = [
  { id: 1, name: "Thông tin tài khoản", icon: RiAccountCircle2Line },
  { id: 2, name: "Quản lý đơn hàng", icon: FaBookOpen },
  { id: 3, name: "Địa chỉ giao hàng", icon: IoLocationOutline },
  { id: 4, name: "Mã giảm giá", icon: RiMoneyDollarBoxLine },
  { id: 5, name: "Hỗ trợ khách hàng", icon: MdSupervisorAccount },
  { id: 6, name: "Đăng xuất", icon: IoMdExit },
];

function AccountPage() {
  const account = JSON.parse(localStorage.getItem("isAccount")) || {};
  const navigate = useNavigate();
  const [filter, setFilter] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleMenuClick = (data) => {
    if (data.id === 6) {
      setShowConfirm(true);
    } else if (data.id === 3) {
      navigate("/instantShipping");
    } else if (data.id === 5) {
      navigate("/supportPage");
    }
    setFilter(data.id);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAccount");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-[#f5f5fa] min-h-screen">
      <Header />
      <div className="container mx-auto py-4 px-3">
        {/* Chia layout theo cột trên mobile và hàng trên desktop */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full md:w-1/5">
            <div className="sticky top-0 bg-white mt-2 md:mt-4 rounded-md shadow-md">
              <div className="flex flex-col items-center py-4">
                <span className="text-secondary">Tài khoản của</span>
                <h1 className="text-lg md:text-xl font-semibold">
                  {account.username || "Khách hàng"}
                </h1>
              </div>
              <div className="border-t">
                {infoList.map((data) => (
                  <div
                    key={data.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                      data.id === filter && data.id !== 6
                        ? "bg-gray-300"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleMenuClick(data)}
                  >
                    <data.icon className="text-[24px] md:text-[30px] text-primary" />
                    <span className="text-[16px] md:text-[18px] font-medium">
                      {data.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nội dung */}
          <div className="w-full md:w-4/5 bg-white rounded-md shadow-md p-3 md:p-4">
            {filter === 1 && <AccountInfo account={account} />}
            {filter === 2 && <OrderManagement />}
          </div>
        </div>
      </div>

      {/* Hộp thoại xác nhận đăng xuất */}
      {showConfirm && (
        <ConfirmDialog
          message="Bạn có chắc chắn muốn đăng xuất?"
          onConfirm={handleLogout}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}

export default AccountPage;
