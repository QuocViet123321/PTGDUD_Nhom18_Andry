// import { IoCloseOutline } from "react-icons/io5";

function Message({ orderPopup, setOrderPopup, title }) {
  return (
    <div>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7
            shadow-md bg-white dark:bg-gray-900 rounded-md
            duration-200 w-[300px]"
            >
              {/* Header */}
              <div className="flex items-center justify-center">
                <h1 className="font-bold text-[30px]">Thông báo</h1>
              </div>
              {/* Body Section */}
              <div className="mt-4">
                <h1 className="my-3 text-center text-[20px]">{title}</h1>
                <div className="flex justify-center">
                  <button
                    className="px-7 py-3 bg-primary text-white rounded-lg"
                    onClick={() => setOrderPopup(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
