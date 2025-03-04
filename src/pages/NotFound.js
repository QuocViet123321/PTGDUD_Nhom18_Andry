import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Trang Không Tồn Tại</h2>
      <p className="text-gray-600 mb-6">
        Rất tiếc, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Quay Về Trang Chủ
      </Link>
    </div>
  );
};

export default NotFound;
