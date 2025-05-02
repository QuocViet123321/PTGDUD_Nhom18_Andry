import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { BsChatLeftDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/logo/logo1.png";
import stringSimilarity from "string-similarity";
import { useProduct } from "../../API/UseProvider";
import formatCurrency from "../../caculator/FormatCurrency";

function ChatBox() {
  const [isChat, setIsChat] = useState(false);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || []
  );
  const [inputMessage, setInputMessage] = useState("");
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);
  const { product } = useProduct();

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const findClosestProduct = (query, list) => {
    const names = list.map((p) => p.name.toLowerCase());
    const bestMatch = stringSimilarity.findBestMatch(
      query.toLowerCase(),
      names
    );
    const bestIndex = bestMatch.bestMatchIndex;
    return list[bestIndex];
  };

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();

    if (!product || product.length === 0)
      return "Dữ liệu sản phẩm chưa sẵn sàng!";

    const p = findClosestProduct(message, product);
    if (!p) return "Không tìm thấy sản phẩm phù hợp.";

    if (
      lowerMsg.includes("giá") ||
      lowerMsg.includes("bao nhiêu") ||
      lowerMsg.includes("giá tiền")
    ) {
      if (p.sale) {
        return `Sản phẩm: ${p.name + "  Giá: " + formatCurrency(p.price - p.price * (p.sale / 100))} - Giảm ${p.sale}%\n Ảnh: ${p.img[0]?.img}`;
      } else {
        return `Sản phẩm: ${p.name}\nGiá: ${p.price}đ Ảnh: ${p.img[0]?.img}`;
      }
    }

    if (lowerMsg.includes("bảo hành")) {
      if (p.baohanh) {
        return `Sản phẩm: ${p.name} Bảo hành: ${p.baohanh.thoigian} - ${p.baohanh.hinhthuc} - ${p.baohanh.noibaohanh} \n Ảnh: ${p.img[0]?.img}`;
      } else {
        return `Sản phẩm: ${p.name}\nKhông có thông tin bảo hành. Ảnh: ${p.img[0]?.img}`;
      }
    }

    if (
      lowerMsg.includes("khuyến mãi") ||
      lowerMsg.includes("giảm giá") ||
      lowerMsg.includes("sale")
    ) {
      return `Sản phẩm: ${p.name} - Khuyến mãi: giảm ${p.sale}% \n Ảnh: ${p.img[0]?.img}`;
    }

    if (lowerMsg.includes("ảnh") || lowerMsg.includes("hình")) {
      return `Sản phẩm: ${p.name}\nẢnh: ${p.img[0]?.img}`;
    }

    return "Bạn có thể hỏi về giá, khuyến mãi, bảo hành hoặc hình ảnh sản phẩm.";
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessages = [...messages, { text: inputMessage, sender: "user" }];
      setMessages(newMessages);
      setInputMessage("");

      setTimeout(() => {
        const response = getBotResponse(inputMessage);
        const hasImage = response.includes("http");

        setMessages((prev) => [
          ...prev,
          { text: response, sender: "bot", isImage: hasImage },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed right-[40px] bottom-[10%] z-10">
      <div className="flex gap-3">
        {isChat && (
          <Draggable nodeRef={chatRef} handle=".drag-handle">
            <div ref={chatRef} className="cursor-move">
              <div className="w-[450px] h-[500px] p-5 bg-white shadow-2xl rounded-md flex flex-col">
                <div className="flex justify-between items-center border-b py-3 border-gray-100 drag-handle cursor-grab">
                  <h1 className="text-[22px] font-semibold">
                    Hỏi đáp sản phẩm
                  </h1>
                  <IoMdClose
                    className="text-[30px] cursor-pointer text-gray-600 hover:text-red-500 transition"
                    onClick={() => setIsChat(false)}
                  />
                </div>

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
                        className={`max-w-[250px] p-3 rounded-md text-sm shadow whitespace-pre-line ${
                          msg.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        {msg.isImage && msg.text.includes("http") ? (
                          <>
                            <div>{msg.text.split("\n")[0]}</div>
                            <img
                              src={msg.text.split("Ảnh: ")[1]}
                              alt="product"
                              className="mt-2 rounded-lg border"
                            />
                          </>
                        ) : (
                          msg.text
                        )}
                      </span>
                    </div>
                  ))}
                  <div ref={messagesEndRef}></div>
                </div>

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
