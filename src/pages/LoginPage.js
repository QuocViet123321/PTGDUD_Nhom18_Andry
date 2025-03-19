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
  const [errors, setErrors] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const validateInput = () => {
    let errors = {};

    if (!isLogin) {
      if (!/^[a-zA-Z0-9]{3,}$/.test(username)) {
        errors.username =
          "Tên đăng nhập phải có ít nhất 3 ký tự, không chứa ký tự đặc biệt.";
      }
      if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.email = "Email không hợp lệ.";
      }
    }

    if (!/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ.";
    }

    if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      errors.password =
        "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.";
    }

    if (!isLogin && password !== passwordConfirm) {
      errors.passwordConfirm = "Mật khẩu nhập lại không khớp.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    if (storedAccounts.some((account) => account.phone === phone)) {
      setErrors({ phone: "Số điện thoại đã tồn tại!" });
      return;
    }

    storedAccounts.push({ username, email, phone, password });
    localStorage.setItem("account", JSON.stringify(storedAccounts));

    setMessage("Đăng ký thành công! Vui lòng đăng nhập.");
    setShowConfirm(true);
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
    const user = storedAccounts.find(
      (account) => account.phone === phone && account.password === password
    );

    if (user) {
      localStorage.setItem("isAccount", JSON.stringify(user));
      navigate("/");
    } else {
      setErrors({ phone: "Số điện thoại hoặc mật khẩu không đúng!" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-primary/25">
      {showConfirm && (
        <ConfirmDialogOk
          message={message}
          onConfirm={() => setShowConfirm(false)}
        />
      )}

      <div
        className="absolute top-4 left-6 flex items-center gap-2 text-white text-lg font-semibold cursor-pointer hover:scale-105"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="text-2xl" />
        <span>Trở về</span>
      </div>

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

      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-primary">
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <InputField
              label="Tên đăng nhập:"
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
          )}
          {!isLogin && (
            <InputField
              label="Email:"
              value={email}
              setValue={setEmail}
              type="email"
              error={errors.email}
            />
          )}
          <InputField
            label="Số điện thoại:"
            value={phone}
            setValue={setPhone}
            type="tel"
            error={errors.phone}
          />

          <InputField
            label="Mật khẩu:"
            value={password}
            setValue={setPassword}
            type="password"
            error={errors.password}
          />

          {!isLogin && (
            <InputField
              label="Nhập lại mật khẩu:"
              value={passwordConfirm}
              setValue={setPasswordConfirm}
              type="password"
              error={errors.passwordConfirm}
            />
          )}

          <button
            type="submit"
            className="w-full my-4 px-4 py-4 font-bold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          {isLogin ? "Chưa có tài khoản?" : "Bạn đã có tài khoản?"}
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

const InputField = ({ label, value, setValue, type = "text", error }) => (
  <div>
    <label className="block mb-2 my-2 text-xl font-bold text-gray-700">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

export default LoginPage;
