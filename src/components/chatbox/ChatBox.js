import { useState, useRef, useEffect } from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/logo/logo1.png";

function ChatBox() {
  const [isChat, setIsChat] = useState(false);
  const [messages, setMessages] = useState([]); // Danh sách tin nhắn
  const [inputMessage, setInputMessage] = useState(""); // Nội dung nhập vào
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Đóng chat nếu click bên ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChat(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cuộn xuống tin nhắn mới nhất khi có tin nhắn mới
  //   useEffect(() => {
  //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [messages]);

  // Xử lý gửi tin nhắn
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");

      // Giả lập phản hồi từ hệ thống sau 1s
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Chúng tôi sẽ phản hồi lại quý khách nhanh nhất có thể !",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed right-[40px] top-[10%] z-10">
      <div className="flex gap-3">
        {isChat && (
          <div ref={chatRef}>
            <div className="w-[450px] h-[500px] p-5 bg-white shadow-2xl rounded-t-md flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center border-b py-3 border-gray-100">
                <h1 className="text-[30px] font-bold">Hỏi đáp sản phẩm</h1>
                <IoMdClose
                  className="text-[35px] cursor-pointer"
                  onClick={() => setIsChat(false)}
                />
              </div>

              {/* Nội dung chat */}
              <div className="flex-1 overflow-y-auto mt-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 my-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "bot" && (
                      <img src={Logo} alt="Bot" className="w-[40px] h-[40px]" />
                    )}
                    <span
                      className={`max-w-[250px] p-2 rounded-md ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>

              {/* Nhập tin nhắn */}
              <div className="flex bg-white border-t border-gray-200">
                <input
                  className="w-[80%] h-[50px] text-[18px] p-2 border border-secondary rounded-s-lg outline-none"
                  placeholder="Hỏi đáp về sản phẩm ..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <span
                  className="w-[20%] h-[50px] leading-[50px] text-center border border-secondary bg-primary text-white cursor-pointer rounded-e-lg"
                  onClick={sendMessage}
                >
                  Gửi
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Nút mở chat */}
        <div
          className="flex flex-col h-[100px] items-center cursor-pointer bg-primary text-white p-2 py-5 rounded-2xl"
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
