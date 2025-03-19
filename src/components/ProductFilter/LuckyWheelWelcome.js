import { Link } from "react-router-dom";
import { GiSpinningWheel } from "react-icons/gi";

function LuckyWheelWelcome() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white mt-5 p-8 pb-12 rounded-lg transform transition duration-300 hover:scale-105 shadow-2xl border border-white">
      <Link to="/luckyWheel" className="block text-center">
        <div className="relative inline-block">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.dGAHrtw67PMJ5jiFVfcAjwHaHa&pid=Api&P=0&h=220"
            alt="Lucky Wheel"
            className="mx-auto rounded-full border-4 border-white shadow-lg hover:rotate-6 transition-transform duration-300"
          />
          <GiSpinningWheel className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-yellow-400 animate-spin" />
        </div>
        <h2 className="mt-6 text-2xl font-extrabold drop-shadow-lg">
          🎉 Nhấn vào để thử vận may ngay! 🎉
        </h2>
        <p className="mt-2 text-lg font-medium text-white/90">
          Cơ hội nhận ngay voucher cực khủng! 🎁
        </p>
      </Link>
    </div>
  );
}

export default LuckyWheelWelcome;
