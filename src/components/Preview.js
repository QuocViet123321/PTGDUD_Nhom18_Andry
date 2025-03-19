import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Img1 from "../assets/banner/bn1.webp";
import Img2 from "../assets/banner/bn2.png";
import Img3 from "../assets/banner/bn3.png";
import Img4 from "../assets/banner/bn4.webp";
import Img5 from "../assets/banner/bn5.webp";

const imgList = [
  { img: Img1, title: "Thor: Ragnarok" },
  { img: Img2, title: "Doctor Strange" },
  { img: Img3, title: "Justice League" },
  { img: Img4, title: "Guardians of the Galaxy" },
  { img: Img5, title: "Spider-Man: No Way Home" },
];

function ProductSale() {
  return (
    <div className="bg-white mt-5 p-5 pb-10 rounded-md shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0, // Không xoay
          stretch: 0, // Không kéo giãn
          depth: 200, // Độ sâu của các slide phía sau
          modifier: 1, // Tăng hiệu ứng coverflow
          slideShadows: false, // Bỏ bóng slide để hình ảnh rõ nét hơn
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {imgList.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-[500px] h-[300px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSale;
