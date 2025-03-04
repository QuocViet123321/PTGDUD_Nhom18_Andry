import { useState, useEffect } from "react";
import AddressShip from "./AddressShip";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import ConfirmDialogOk from "../../message/ConfirmDialogOk";

function ChangeShippingInfo() {
  const [addAddress, setAddAddress] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [account, setAccount] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccount = JSON.parse(localStorage.getItem("isAccount")) || {};
    setAccount(storedAccount);
  }, []);

  const handleSelectAddressShip = (id) => {
    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    const updatedAccounts = storedAccounts.map((accountItem) =>
      accountItem.username === account.username
        ? {
            ...accountItem,
            addressShip: accountItem.addressShip.map((add) =>
              add.id === id
                ? { ...add, isMacDinh: true }
                : { ...add, isMacDinh: false }
            ),
          }
        : accountItem
    );
    localStorage.setItem("account", JSON.stringify(updatedAccounts));
    const updatedAccount = updatedAccounts.find(
      (acc) => acc.username === account.username
    );
    if (updatedAccount) {
      localStorage.setItem("isAccount", JSON.stringify(updatedAccount));
      setAccount(updatedAccount);
    }
  };

  const handleDeleteAdressShip = (id) => {
    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    const updatedAccounts = storedAccounts.map((accountItem) =>
      accountItem.username === account.username
        ? {
            ...accountItem,
            addressShip: accountItem.addressShip.filter(
              (item) => item.id !== id
            ),
          }
        : accountItem
    );
    localStorage.setItem("account", JSON.stringify(updatedAccounts));
    const updatedAccount = updatedAccounts.find(
      (acc) => acc.username === account.username
    );
    if (updatedAccount) {
      localStorage.setItem("isAccount", JSON.stringify(updatedAccount));
      setAccount(updatedAccount);
    }
    setMessage("Xóa địa chỉ thành công!");
    setShowConfirm(true);
  };

  function generateUniqueKey() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  const handleShipping = (e) => {
    e.preventDefault();
    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    const updatedAccounts = storedAccounts.map((accountItem) =>
      accountItem.username === account.username
        ? {
            ...accountItem,
            addressShip: [
              ...(accountItem.addressShip || []),
              {
                id: generateUniqueKey(),
                name,
                phone,
                address,
                isMacDinh: false,
              },
            ],
          }
        : accountItem
    );
    localStorage.setItem("account", JSON.stringify(updatedAccounts));
    const updatedAccount = updatedAccounts.find(
      (acc) => acc.username === account.username
    );
    if (updatedAccount) {
      localStorage.setItem("isAccount", JSON.stringify(updatedAccount));
      setAccount(updatedAccount);
    }

    setMessage("Thêm địa chỉ thành công!");
    setShowConfirm(true);
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="bg-[#f5f5fa] min-h-[100vh]">
      {showConfirm && (
        <ConfirmDialogOk
          message={message}
          onConfirm={() => setShowConfirm(false)}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      <div>
        <div className="flex items-center p-8 bg-white gap-6 shadow-md">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack className="text-2xl text-[#1aa7ff]" />
            <span className="text-[#1aa7ff] text-[25px]">Trở về</span>
          </div>
          <div className="border border-[#1aa7ff] h-[40px]"></div>
          <h1 className="text-[35px] text-[#1aa7ff] font-medium">
            Địa chỉ giao hàng
          </h1>
        </div>
        <div className="bg-white mt-5 p-6 pl-[100px] rounded-md">
          <h1 className="text-[25px] my-2 font-bold">Địa chỉ giao hàng</h1>
          <p className="text-[20px] font-semibold">
            Chọn địa chỉ giao hàng có sẵn bên dưới
          </p>
          <div
            className="p-4 bg-primary text-[20px] w-[200px] text-white font-semibold rounded-md cursor-pointer"
            onClick={() => setAddAddress(true)}
          >
            Thêm địa chỉ mới
          </div>
        </div>
        <div className="p-5 mx-[100px]">
          <div className="flex flex-wrap justify-center gap-4 my-4">
            {account?.addressShip?.map((item) => (
              <AddressShip
                key={item.id}
                id={item.id}
                isMacDinh={item.isMacDinh}
                name={item.name}
                phone={item.phone}
                address={item.address}
                handleDeleteAdressShip={handleDeleteAdressShip}
                handleSelectAddressShip={handleSelectAddressShip}
              />
            ))}
          </div>
          {addAddress && (
            <form
              onSubmit={handleShipping}
              className="w-full mx-auto max-w-lg p-8 bg-white rounded-lg shadow-2xl"
            >
              <span
                className="flex justify-center text-[18px] bg-primary text-white p-3 w-[100px] rounded-md cursor-pointer mb-4"
                onClick={() => setAddAddress(false)}
              >
                Đóng
              </span>
              <label className="block mb-2 text-xl font-bold">Họ và tên</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 border rounded-md"
                placeholder="Nhập tên"
                required
              />
              <label className="block mb-2 text-xl font-bold">
                Số điện thoại
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-4 border rounded-md"
                placeholder="Nhập số điện thoại"
                required
              />
              <label className="block mb-2 text-xl font-bold">Địa chỉ</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-4 border rounded-md"
                placeholder="Nhập địa chỉ"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-4 text-white bg-blue-600 rounded-md"
              >
                Lưu thông tin
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default ChangeShippingInfo;
