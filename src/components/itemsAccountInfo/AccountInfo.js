import { useState } from "react";
import ShippingInfo from "../cart/ShippingInfo";
import { MdEdit } from "react-icons/md";
import AvatarImg from "../../assets/camket/avatar.png";

function AccountInfo({ account }) {
  const [username, setUserName] = useState(account.username || "");
  const [phone, setPhone] = useState(account.phone || "");
  const [email, setEmail] = useState(account.email || "");
  const [isEditable, setIsEditable] = useState(false);
  const [avatar, setAvatar] = useState(account.avatar || AvatarImg);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Lấy file đầu tiên
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Cập nhật avatar vào state và localStorage
        setAvatar(reader.result); // Lưu avatar vào state

        // Cập nhật avatar vào account trong localStorage
        const updatedAccount = { ...account, avatar: reader.result };
        localStorage.setItem("isAccount", JSON.stringify(updatedAccount));

        // Cập nhật avatar trong danh sách account nếu có nhiều tài khoản
        const listAccount = JSON.parse(localStorage.getItem("account")) || [];
        const updatedListAccount = listAccount.map((acc) =>
          acc.username === account.username
            ? { ...acc, avatar: reader.result }
            : acc
        );
        localStorage.setItem("account", JSON.stringify(updatedListAccount));
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng base64
    }
  };

  const handleSave = () => {
    const updatedAccount = { ...account, username, phone, email };
    localStorage.setItem("isAccount", JSON.stringify(updatedAccount));

    // Cập nhật avatar trong danh sách account nếu có nhiều tài khoản
    const listAccount = JSON.parse(localStorage.getItem("account")) || [];
    const updatedListAccount = listAccount.map((acc) =>
      acc.username === account.username
        ? { ...acc, ...account, username, phone, email }
        : acc
    );
    localStorage.setItem("account", JSON.stringify(updatedListAccount));
    setIsEditable(false);
    alert("Lưu thông tin thành công");
  };

  return (
    <div>
      <h1 className="text-[25px] text-center">Thông tin tài khoản</h1>
      <div className="flex">
        {/* Cột trái */}
        <div className="w-[60%] p-4 rounded-md bg-white">
          <h1 className="text-secondary text-[20px] py-4">Thông tin cá nhân</h1>
          <input
            type="file"
            id="avatarInput"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="flex items-center">
            <label htmlFor="avatarInput">
              <div className="relative cursor-pointer flex items-center justify-center text-[#1a94ff] w-[190px] h-[190px] border-[7px] border-[#c2e1ff] rounded-full bg-[#f0f8ff]">
                <MdEdit className="absolute text-[20px] text-white bg-secondary rounded-full right-[18px] bottom-0 " />
                <img
                  src={avatar} // Hiển thị ảnh đã chọn hoặc ảnh mặc định
                  alt="Avatar"
                  className="rounded-full w-[140px] h-[140px] object-cover"
                />
              </div>
            </label>
            <div className="flex-1 ml-5">
              <div className="flex items-center justify-between">
                <span className="text-[20px]">Username</span>
                <input
                  type="text"
                  value={username}
                  readOnly={!isEditable}
                  onChange={(e) => setUserName(e.target.value)}
                  className={` p-2 text-[20px] w-[200px] border ${
                    isEditable ? "border-gray-600" : "border-gray-400"
                  } rounded-md mx-1`}
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[20px]">Phone</span>
                <input
                  type="text"
                  value={phone}
                  readOnly={!isEditable}
                  onChange={(e) => setPhone(e.target.value)}
                  className={` p-2 text-[20px] w-[200px] border ${
                    isEditable ? "border-gray-600" : "border-gray-400"
                  } rounded-md mx-1`}
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[20px]">Email</span>
                <input
                  type="email"
                  value={email}
                  readOnly={!isEditable}
                  onChange={(e) => setEmail(e.target.value)}
                  className={` p-2 text-[20px] w-[200px] border ${
                    isEditable ? "border-gray-600" : "border-gray-400"
                  } rounded-md mx-1`}
                />
              </div>
            </div>
          </div>
          {!isEditable ? (
            <button
              onClick={() => setIsEditable(true)}
              className="px-6 mt-2 py-3 bg-primary text-white rounded-md text-[18px] hover:bg-blue-700"
            >
              Chỉnh sửa thông tin
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="px-6 mt-2 py-3 bg-green-600 text-white rounded-md text-[18px] hover:bg-green-700"
            >
              Lưu thông tin
            </button>
          )}
        </div>
        {/* Cột phải */}
        <div className="w-[40%] mx-4 rounded-md bg-white flex flex-col items-center justify-center">
          <h1 className="text-[18px] font-bold border-b border-gray-300 pb-2">
            Địa chỉ giao hàng
          </h1>
          <div>
            <ShippingInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
