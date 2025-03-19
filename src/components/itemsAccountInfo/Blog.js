import React, { Component } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

class Blog extends Component {
  render() {
    const articles = [
      {
        title: "Review iPhone 15 Pro Max - Đánh giá chi tiết",
        date: "15/03/2025",
        author: "Admin",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.QxFKSvj6AcK-6PfgxTgcAgHaEK&pid=Api&P=0&h=220",
        excerpt:
          "Đánh giá chi tiết về iPhone 15 Pro Max, những cải tiến vượt trội về camera, hiệu năng và thiết kế...",
      },
      {
        title: "5 mẹo sử dụng điện thoại hiệu quả",
        date: "12/03/2025",
        author: "Nguyễn Văn A",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.BPLZW7IKlcqtBzLZ2qKeJAHaFj&pid=Api&P=0&h=220",
        excerpt:
          "Những mẹo giúp bạn tối ưu hóa trải nghiệm điện thoại, kéo dài tuổi thọ pin và tăng tốc hiệu suất...",
      },
      {
        title: "Samsung Galaxy S25 Ultra có gì mới?",
        date: "10/03/2025",
        author: "Trần Bảo",
        image:
          "https://www.movilzona.es/app/uploads-movilzona.es/2025/01/Samsung-Galaxy-S25-Ultra-3.jpg",
        excerpt:
          "Samsung Galaxy S24 Ultra đã chính thức ra mắt, với những cải tiến vượt bậc về AI, màn hình và camera...",
      },
      {
        title: "So sánh iOS 18 và Android 15 - Nên chọn hệ điều hành nào?",
        date: "08/03/2025",
        author: "Lê Minh",
        image:
          "https://www.kindpng.com/picc/m/49-498005_ios-android-png-android-icon-png-transparent-png.png",
        excerpt:
          "Bài viết phân tích ưu và nhược điểm của iOS 18 và Android 15, giúp bạn chọn hệ điều hành phù hợp...",
      },
    ];

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Tin tức công nghệ</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{article.title}</h2>
              <div className="text-gray-500 flex items-center text-sm mt-2">
                <FaCalendarAlt className="mr-2" /> {article.date} &nbsp; |
                &nbsp;
                <FaUser className="mr-2" /> {article.author}
              </div>
              <p className="text-gray-600 mt-2">{article.excerpt}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Đọc thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
