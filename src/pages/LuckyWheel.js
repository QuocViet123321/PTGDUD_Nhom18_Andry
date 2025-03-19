import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../caculator/FormatCurrency";

const prizes = [
  { option: "Giảm 100K", value: 100000 },
  { option: "Giảm 10%", percent: 10 },
  { option: "Giảm 500K", value: 500000 },
  { option: "Giảm 2 Triệu", value: 2000000 },
  { option: "Tiếc quá", value: 0 },
];

const LuckyWheel = () => {
  const navigate = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [voucherList, setVoucherList] = useState([]);

  // Load voucher từ localStorage khi component mount
  useEffect(() => {
    const savedVouchers = JSON.parse(localStorage.getItem("voucherList")) || [];
    setVoucherList(savedVouchers);
  }, []);

  // Hàm quay số
  const handleSpin = () => {
    if (hasSpun) return;
    const newPrizeNumber = Math.floor(Math.random() * prizes.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setHasSpun(true);
  };

  // Lưu voucher vào localStorage
  const saveVoucher = (prize) => {
    if (prize.option === "Tiếc quá") return;

    const newVoucher = {
      id: new Date().getTime().toString(),
      name:
        "Phần thưởng vòng quay! - " +
        (prize.value ? formatCurrency(prize.value) : prize.percent + "%"),
      condition: "Áp dụng tất cả đơn hàng",
      value: prize.value || null,
      percent: prize.percent || null,
      endDate: "30/04/2025",
      select: false,
      valueCondition: 0,
    };

    const updatedVouchers = [...voucherList, newVoucher];
    setVoucherList(updatedVouchers);
    localStorage.setItem("voucherList", JSON.stringify(updatedVouchers));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-700 to-purple-700 p-6">
      <div
        className="absolute top-4 left-6 flex items-center gap-2 text-white text-lg font-semibold cursor-pointer hover:scale-110 transition-transform"
        onClick={() => navigate(-1)}
      >
        <IoArrowBack className="text-4xl" />
        <span className="text-2xl">Trở về</span>
      </div>
      <h1 className="text-6xl font-extrabold text-white mb-12 drop-shadow-lg animate-pulse">
        Vòng quay may mắn 🎉
      </h1>
      <div className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-2xl border-8 border-indigo-400">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={prizes}
          backgroundColors={[
            "#FF5733",
            "#FFC300",
            "#28A745",
            "#17A2B8",
            "#6610F2",
          ]}
          textColors={["#ffffff"]}
          outerBorderColor="#FFD700"
          innerBorderColor="#FFFFFF"
          radiusLineColor="#FFD700"
          onStopSpinning={() => {
            setMustSpin(false);
            setSelectedPrize(prizes[prizeNumber].option);
            saveVoucher(prizes[prizeNumber]);
          }}
        />
        <button
          onClick={handleSpin}
          className={`mt-10 px-12 py-5 font-extrabold text-3xl rounded-full shadow-lg transform transition-all duration-300 ${
            hasSpun
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-125"
          }`}
          disabled={hasSpun}
        >
          🎡 Quay ngay!
        </button>
        {selectedPrize && (
          <div className="mt-8 text-4xl font-extrabold text-green-700 drop-shadow-lg animate-bounce bg-yellow-200 px-6 py-3 rounded-xl border-4 border-yellow-500">
            🎉
            {selectedPrize === "Tiếc quá" ? (
              <span className="text-red-500 block mt-3 text-2xl">
                Hẹn gặp lại lần sau!
              </span>
            ) : (
              "Bạn nhận được :" + selectedPrize
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LuckyWheel;
