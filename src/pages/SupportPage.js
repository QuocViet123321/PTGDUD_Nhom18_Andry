import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Nút quay lại */}
      <div
        className="absolute top-4 left-6 flex items-center gap-2 text-primary text-[25px] font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="text-2xl" />
        <span>Trở về</span>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Hỗ Trợ Khách Hàng
      </h1>

      {/* Câu hỏi thường gặp */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Câu Hỏi Thường Gặp</h2>
        <details className="mb-4 border-b pb-2">
          <summary className="cursor-pointer font-medium">
            Làm thế nào để đổi hàng?
          </summary>
          <p className="text-gray-600 mt-2">
            Bạn có thể đổi trả trực tuyến trên trang chủ của chúng tôi hoặc liên
            hệ hotline.
          </p>
        </details>
        <details className="mb-4 border-b pb-2">
          <summary className="cursor-pointer font-medium">
            Tôi có thể trả góp không?
          </summary>
          <p className="text-gray-600 mt-2">
            Bạn có thể trả góp tùy theo chính sách của nhà cung cấp dịch vụ
          </p>
        </details>
      </div>

      {/* Form liên hệ */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Liên Hệ Hỗ Trợ</h2>
        {success && (
          <p className="text-green-600">
            Gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Họ và Tên"
            className="w-full p-3 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Nội dung yêu cầu hỗ trợ"
            className="w-full p-3 border rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            Gửi Yêu Cầu
          </button>
        </form>
      </div>

      {/* Phương thức liên hệ */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
        <div className="flex items-center space-x-4 mb-4">
          <FaPhone className="text-blue-600 text-2xl" />
          <p className="text-gray-700">Hotline: 111 112 113</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <p className="text-gray-700">Email: viet@gmai.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
          <p className="text-gray-700">
            Địa chỉ: Tay Hue, Binh Thanh, An Giang, Viet Nam
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
