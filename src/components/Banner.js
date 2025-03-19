import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Img1 from "../assets/banner/bn1.webp";
import Img2 from "../assets/banner/bn2.png";
// import Img3 from "../assets/banner/bn3.png";
import Img4 from "../assets/banner/bn4.webp";
import Img5 from "../assets/banner/bn5.webp";

const imgList = [
  {
    id: 1,
    img1: Img5,
    img2: Img2,
  },
  {
    id: 2,
    img1: Img4,
    img2: Img2,
  },
  {
    id: 3,
    img1: Img1,
    img2: Img5,
  },
];

function Banner() {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="bg-white rounded-md">
      <div>
        <Slider {...settings}>
          {imgList.map((img, index) => (
            <div key={index}>
              <div className="w-[100%] md:w-[50%] h-[400px] p-3 float-left">
                <img
                  src={img.img1}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="w-[50%] h-[400px] p-3 float-left hidden md:block">
                <img
                  src={img.img2}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
