import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/logo/logo1.png";

function ChatBox() {
  const [isChat, setIsChat] = useState(false);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || []
  );
  const [inputMessage, setInputMessage] = useState("");
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Lưu tin nhắn vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Cuộn xuống tin nhắn mới nhất khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Xử lý sự kiện click ra ngoài để đóng hộp chat
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChat(false);
      }
    }
    if (isChat) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChat]);

  // Chatbot phản hồi thông minh hơn
  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("giá"))
      return "Bạn vui lòng kiểm tra bảng giá trên website!";
    if (lowerMsg.includes("khuyến mãi"))
      return "Hiện tại chúng tôi có chương trình giảm giá lên đến 20%!";
    if (lowerMsg.includes("bảo hành"))
      return "Sản phẩm được bảo hành chính hãng 12 tháng.";
    if (lowerMsg.includes("đổi trả"))
      return "Bạn có thể đổi trả sản phẩm trong vòng 7 ngày.";
    if (lowerMsg.includes("vận chuyển"))
      return "Chúng tôi hỗ trợ giao hàng toàn quốc.";
    if (lowerMsg.includes("thanh toán"))
      return "Chúng tôi hỗ trợ thanh toán qua thẻ và ví điện tử.";
    if (lowerMsg.includes("hỗ trợ"))
      return "Bạn có thể gọi hotline 0123 456 789 để được tư vấn.";
    if (lowerMsg.includes("tư vấn"))
      return "Bạn có thể để lại số điện thoại, nhân viên sẽ gọi lại tư vấn miễn phí!";
    return "Chúng tôi sẽ phản hồi lại quý khách sớm nhất có thể!";
  };

  // Xử lý gửi tin nhắn
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessages = [...messages, { text: inputMessage, sender: "user" }];
      setMessages(newMessages);
      setInputMessage("");

      // Chatbot phản hồi sau 1 giây
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: getBotResponse(inputMessage), sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed right-[40px] top-[10%] z-10">
      <div className="flex gap-3">
        {isChat && (
          <Draggable nodeRef={chatRef} handle=".drag-handle">
            <div ref={chatRef} className="cursor-move">
              <div className="w-[450px] h-[500px] p-5 bg-white shadow-2xl rounded-md flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center border-b py-3 border-gray-100 drag-handle cursor-grab">
                  <h1 className="text-[22px] font-semibold">
                    Hỏi đáp sản phẩm
                  </h1>
                  <IoMdClose
                    className="text-[30px] cursor-pointer text-gray-600 hover:text-red-500 transition"
                    onClick={() => setIsChat(false)}
                  />
                </div>

                {/* Nội dung chat */}
                <div className="flex-1 overflow-y-auto mt-3 p-2">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.sender === "bot" && (
                        <img
                          src={Logo}
                          alt="Bot"
                          className="w-[40px] h-[40px] rounded-full border shadow-md"
                        />
                      )}
                      <span
                        className={`max-w-[250px] p-3 rounded-md text-sm shadow ${
                          msg.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                  <div ref={messagesEndRef}></div>
                </div>

                {/* Nhập tin nhắn */}
                <div className="flex border-t border-gray-200 p-2">
                  <input
                    className="w-full h-[45px] text-[16px] p-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    placeholder="Nhập câu hỏi của bạn..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={sendMessage}
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </Draggable>
        )}

        {/* Nút mở chat */}
        <div
          className="flex flex-col h-[100px] items-center cursor-pointer bg-blue-500 text-white p-2 py-5 rounded-2xl shadow-lg transition-all hover:bg-blue-600"
          onClick={() => setIsChat(!isChat)}
        >
          <BsChatLeftDots className="text-[45px]" />
          <span className="text-[15px] text-center font-bold max-w-[90px]">
            Hỏi đáp
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
