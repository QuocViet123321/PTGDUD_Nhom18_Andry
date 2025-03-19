import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-3">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Cột 1: Giới thiệu Andry */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Andry - Điện Thoại & Phụ Kiện
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Chuyên cung cấp điện thoại và phụ kiện chính hãng, giá tốt nhất. Cam
            kết chất lượng và bảo hành uy tín.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-white" /> 123 Đường ABC, Quận
              1, TP. HCM
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-white" /> 0123 456 789
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-white" /> support@andry.com
            </p>
          </div>
        </div>

        {/* Cột 2: Danh mục sản phẩm */}
        <div>
          <h2 className="text-xl font-semibold text-white">Danh mục</h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>
              <button className="hover:text-white">Điện thoại</button>
            </li>
            <li>
              <button className="hover:text-white">Phụ kiện</button>
            </li>
            <li>
              <button className="hover:text-white">Sản phẩm mới</button>
            </li>
            <li>
              <button className="hover:text-white">Giảm giá</button>
            </li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Hỗ trợ khách hàng
          </h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>
              <button className="hover:text-white">Chính sách bảo hành</button>
            </li>
            <li>
              <button className="hover:text-white">Chính sách đổi trả</button>
            </li>
            <li>
              <button className="hover:text-white">Hướng dẫn mua hàng</button>
            </li>
            <li>
              <button className="hover:text-white">Câu hỏi thường gặp</button>
            </li>
          </ul>
        </div>

        {/* Cột 4: Đăng ký nhận tin & Mạng xã hội */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Nhận thông tin khuyến mãi
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Đăng ký email để nhận thông tin khuyến mãi và sản phẩm mới nhất từ
            Andry.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full px-3 py-1 text-gray-800 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700">
              Đăng ký
            </button>
          </form>

          {/* Mạng xã hội */}
          <h2 className="text-xl font-semibold text-white mt-6">
            Theo dõi chúng tôi
          </h2>
          <div className="mt-3 flex space-x-4">
            <button className="text-gray-400 hover:text-white text-xl">
              <FaFacebook />
            </button>
            <button className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </button>
            <button className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </button>
            <button className="text-gray-400 hover:text-white text-xl">
              <FaTiktok />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2025 Andry. Bản quyền thuộc về Andry.
      </div>
    </footer>
  );
};

export default Footer;
