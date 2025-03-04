import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <BiCheckCircle className="w-24 h-24 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">Đặt hàng thành công!</h1>
      <p className="text-gray-600 mt-2">
        Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Tiếp tục mua sắm
      </Link>
    </div>
  );
}

export default PaymentSuccess;
