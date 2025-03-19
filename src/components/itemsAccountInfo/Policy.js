import { FaShieldAlt, FaExchangeAlt, FaShippingFast } from "react-icons/fa";

const Policy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Chính sách cửa hàng
      </h1>
      <div className="space-y-6">
        {/* Chính sách bảo hành */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Chính sách bảo hành</h2>
          </div>
          <ul className="text-gray-600 space-y-2">
            <li>
              🔹 <strong>Thời gian bảo hành:</strong> 12 tháng cho tất cả sản
              phẩm.
            </li>
            <li>
              🔹 <strong>Điều kiện bảo hành:</strong> Lỗi phần cứng do nhà sản
              xuất, không bao gồm rơi vỡ, vào nước.
            </li>
            <li>
              🔹 <strong>Hình thức bảo hành:</strong> Bảo hành tại trung tâm ủy
              quyền hoặc tại cửa hàng.
            </li>
            <li>
              🔹 <strong>Cách yêu cầu bảo hành:</strong> Mang sản phẩm kèm hóa
              đơn đến cửa hàng hoặc gửi qua bưu điện.
            </li>
          </ul>
        </div>

        {/* Chính sách đổi trả */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <div className="flex items-center mb-4">
            <FaExchangeAlt className="text-green-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Chính sách đổi trả</h2>
          </div>
          <ul className="text-gray-600 space-y-2">
            <li>
              🔹 <strong>Thời gian đổi trả:</strong> Trong vòng 7 ngày nếu chưa
              kích hoạt hoặc có lỗi từ nhà sản xuất.
            </li>
            <li>
              🔹 <strong>Điều kiện đổi trả:</strong> Hộp nguyên vẹn, đầy đủ phụ
              kiện, chưa có dấu hiệu sử dụng.
            </li>
            <li>
              🔹 <strong>Chi phí đổi trả:</strong> Miễn phí nếu lỗi do nhà sản
              xuất, 10% giá trị sản phẩm nếu đổi do nhu cầu cá nhân.
            </li>
            <li>
              🔹 <strong>Quy trình thực hiện:</strong> Liên hệ cửa hàng để được
              hướng dẫn chi tiết.
            </li>
          </ul>
        </div>

        {/* Chính sách giao hàng */}
        <div className="border p-6 rounded-lg shadow-lg bg-white">
          <div className="flex items-center mb-4">
            <FaShippingFast className="text-red-500 text-2xl mr-2" />
            <h2 className="text-xl font-semibold">Chính sách giao hàng</h2>
          </div>
          <ul className="text-gray-600 space-y-2">
            <li>
              🔹 <strong>Khu vực áp dụng:</strong> Giao hàng toàn quốc.
            </li>
            <li>
              🔹 <strong>Thời gian giao hàng:</strong> 1-3 ngày tại TP.HCM, 3-5
              ngày đối với các tỉnh thành khác.
            </li>
            <li>
              🔹 <strong>Phí vận chuyển:</strong> Miễn phí với đơn hàng trên 2
              triệu VNĐ, phí 30k với đơn dưới 2 triệu VNĐ.
            </li>
            <li>
              🔹 <strong>Hỗ trợ kiểm tra hàng:</strong> Được kiểm tra hàng trước
              khi thanh toán.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
