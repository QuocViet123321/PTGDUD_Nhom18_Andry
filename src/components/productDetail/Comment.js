import { FaCheckCircle, FaStar } from "react-icons/fa";
import { RiAccountBox2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
function Comment({ list }) {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 border border-gray-200 rounded-md p-4">
      <div className="flex gap-3 items-center">
        <div>
          <RiAccountBox2Line className="text-[35px]" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center mt-1">
            {Array.from({ length: list.star }, (_, index) => (
              <FaStar key={index} className="text-yellow-400 text-lg" />
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <FaCheckCircle className="text-[#00ab56]" />
            <span className="text-[#00ab56]">Đã mua hàng</span>
          </div>
          <h1 className="">{list.title}</h1>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col cursor-pointer items-center"
          onClick={() => setIsLike(!isLike)}
        >
          <AiOutlineLike
            className={isLike ? `text-[30px] text-primary` : `text-[30px]`}
          />
          <span className={isLike ? `text-[15px] text-primary` : `text-[15px]`}>
            Hữu ích
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
