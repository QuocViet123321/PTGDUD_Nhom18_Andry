import { useState } from "react";
import ProductAll from "./ProductAll";
import ProductDangXuLy from "./ProductDangXuLy";
import ProductCancel from "./ProductCancel";

const list = [
  {
    id: 1,
    name: "Tất cả đơn",
  },
  {
    id: 2,
    name: "Đang xử lý",
  },
  { id: 3, name: "Đang vận chuyển" },
  {
    id: 4,
    name: "Đã giao",
  },
  {
    id: 5,
    name: "Đã hủy",
  },
];

function OrderManagement() {
  const [filter, setFilter] = useState(1);
  const account = JSON.parse(localStorage.getItem("isAccount")) || {};
  return (
    <div>
      <h1 className="text-[25px] text-center">Đơn hàng của tôi</h1>
      <div>
        <div className="flex justify-between p-4 bg-white rounded-md">
          {list.map((item) =>
            item.id === filter ? (
              <h1
                key={item.id}
                className="cursor-pointer text-primary text-[18px]"
                onClick={() => setFilter(item.id)}
              >
                {item.name}
              </h1>
            ) : (
              <h1
                key={item.id}
                className="cursor-pointer text-secondary text-[18px]"
                onClick={() => setFilter(item.id)}
              >
                {item.name}
              </h1>
            )
          )}
        </div>
        {/* Tất cả */}
        <div>{filter === 1 && <ProductAll account={account} />}</div>
        <div>{filter === 2 && <ProductDangXuLy account={account} />}</div>
        <div>{filter === 5 && <ProductCancel account={account} />}</div>
      </div>
    </div>
  );
}

export default OrderManagement;
