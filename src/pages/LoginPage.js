import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import ConfirmDialogOk from "../message/ConfirmDialogOk";
import HomeImg from "../assets/camket/home.png";
import Home2Img from "../assets/camket/home2.png";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ HÀM KIỂM TRA DỮ LIỆU ĐẦU VÀO
  const validateInput = (
    username,
    email,
    phone,
    password,
    passwordConfirm,
    isLogin
  ) => {
    let errors = [];

    // Kiểm tra username và email khi đăng ký
    if (!isLogin) {
      if (!/^[a-zA-Z0-9]{3,}$/.test(username)) {
        errors.push(
          "Tên đăng nhập phải có ít nhất 3 ký tự, không chứa ký tự đặc biệt."
        );
      }
      if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.push("Email không hợp lệ.");
      }
    }

    // Kiểm tra số điện thoại (Việt Nam: 10 số, bắt đầu bằng 0 hoặc +84)
    if (!/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(phone)) {
      errors.push("Số điện thoại không hợp lệ.");
    }

    // Kiểm tra mật khẩu (tối thiểu 6 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt)
    if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      errors.push(
        "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt."
      );
    }

    // Kiểm tra xác nhận mật khẩu khi đăng ký
    if (!isLogin && password !== passwordConfirm) {
      errors.push("Mật khẩu nhập lại không khớp.");
    }

    return errors;
  };

  // ✅ XỬ LÝ ĐĂNG KÝ
  const handleRegister = (e) => {
    e.preventDefault();
    const errors = validateInput(
      username,
      email,
      phone,
      password,
      passwordConfirm,
      false
    );

    if (errors.length > 0) {
      setMessage(errors.join("\n"));
      setShowConfirm(true);
      return;
    }

    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];

    if (storedAccounts.some((account) => account.phone === phone)) {
      setMessage("Số điện thoại đã tồn tại!");
      setShowConfirm(true);
      return;
    }

    storedAccounts.push({ username, email, phone, password });
    localStorage.setItem("account", JSON.stringify(storedAccounts));

    setMessage("Đăng ký thành công! Vui lòng đăng nhập.");
    setShowConfirm(true);
    setIsLogin(true);
  };

  // ✅ XỬ LÝ ĐĂNG NHẬP
  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateInput("", "", phone, password, "", true);

    if (errors.length > 0) {
      setMessage(errors.join("\n"));
      setShowConfirm(true);
      return;
    }

    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    const user = storedAccounts.find(
      (account) => account.phone === phone && account.password === password
    );

    if (user) {
      localStorage.setItem("isAccount", JSON.stringify(user));
      navigate("/");
    } else {
      setMessage("Số điện thoại hoặc mật khẩu không đúng!");
      setShowConfirm(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-primary/25">
      {showConfirm && (
        <ConfirmDialogOk
          message={message}
          onConfirm={() => setShowConfirm(false)}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {/* Nút quay lại */}
      <div
        className="absolute top-4 left-6 flex items-center gap-2 text-white text-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="text-2xl" />
        <span>Trở về</span>
      </div>

      {/* Link về trang chủ */}
      <Link
        to="/"
        className="fixed top-3 right-8 cursor-pointer group flex flex-col items-center"
      >
        <img src={HomeImg} alt="" className="group-hover:hidden" />
        <img src={Home2Img} alt="" className="hidden group-hover:block" />
        <h1 className="text-[20px] font-bold text-secondary group-hover:text-primary">
          Trang chủ
        </h1>
      </Link>

      {/* Form Đăng nhập / Đăng ký */}
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-primary">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h2>
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="space-y-6"
        >
          {!isLogin && (
            <>
              <InputField
                label="Tên đăng nhập:"
                value={username}
                setValue={setUsername}
              />
              <InputField
                label="Email:"
                value={email}
                setValue={setEmail}
                type="email"
              />
            </>
          )}
          <InputField
            label="Số điện thoại:"
            value={phone}
            setValue={setPhone}
            type="tel"
          />
          <InputField
            label="Mật khẩu:"
            value={password}
            setValue={setPassword}
            type="password"
          />
          {!isLogin && (
            <InputField
              label="Nhập lại mật khẩu:"
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              type="password"
            />
          )}

          {/* Nút hành động */}
          <button
            type="submit"
            className="w-full px-4 py-4 font-bold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        {/* Chuyển đổi giữa đăng nhập / đăng ký */}
        <p className="text-sm text-center text-gray-500">
          {isLogin ? "Chưa có tài khoản?" : "Bạn đã có tài khoản?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-blue-600 hover:underline"
          >
            {isLogin ? "Đăng ký ngay" : "Đăng nhập ngay"}
          </button>
        </p>
      </div>
    </div>
  );
}

// ✅ Component ô nhập liệu tái sử dụng
const InputField = ({ label, value, setValue, type = "text" }) => (
  <div>
    <label className="block mb-2 text-xl font-bold text-gray-700">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-4 text-[18px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={`Nhập ${label.toLowerCase()}`}
      required
    />
  </div>
);

export default LoginPage;
