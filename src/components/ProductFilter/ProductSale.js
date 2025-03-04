import Slider from "react-slick";
import Product from "../Product";

const productSale = [
  {
    id: 1,
    name: "Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng",
    price: 31090000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/5b/7f/3e/4df5438a9ab573ede025c941a155c1b4.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/76/aa/c3/1eaa3b283a42bfc7ab7166d06844d101.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/f3/3f/0d/8c158e4de31e496a21d4a91a73551e15.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/4c/00/f2729a5048a6c397551f28f2eaf23bd6.jpg.webp",
      },
    ],
    star: 5,
    info: [
      {
        name: "Dung lượng pin",
        value: "5000 mAh",
      },
      {
        name: "Bluetooth",
        value: "v5.3",
      },
      {
        name: "Thương hiệu",
        value: "Samsung",
      },
      {
        name: "Xuất xứ thương hiệu",
        value: "Hàn Quốc",
      },
      {
        name: "Camera sau",
        value: "12MP,200MP,50MP",
      },
      {
        name: "Camera trước",
        value: "12MP",
      },
      {
        name: "Chip đồ họa (GPU)",
        value: "Adreno 750",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Kích thước",
        value: "Dài 147 mm - Ngang 70.6 mm - Dày 7.6 mm - Nặng 167 g",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "QHD+ Dynamic AMOLED 2X",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Model",
        value: "S 24 Ultra",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Samsung Việt Nam",
    },
    sale: 15,
    sold: 12,
    inventory: 30,
  },
  {
    id: 2,
    name: "Apple iPhone 16 - Hàng chính hãng giá ưu đãi",
    price: 20900000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/08/c4/e4/7f1e1531606703edb5055af6f0578e24.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/c2/17/1b2a787927d9b8a76dbdb5c65769cdcd.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/be/1f/2b/8a9395d5f18337a1060abcc2ff5011f9.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/9e/cb/31/ab5bf3021b24e9124eeab62581f4abe5.jpg.webp",
      },
    ],
    star: 4,
    info: [
      {
        name: "Bluetooth",
        value: "Bluetooth 5.3",
      },
      {
        name: "Thương hiệu",
        value: "Apple",
      },
      {
        name: "Hỗ trợ thẻ nhớ ngoài",
        value: "Không",
      },
      {
        name: "Chip set",
        value: "Chip A18",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "Super Retina XDR",
      },
      {
        name: "GPS",
        value: "Có",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Phụ kiện đi kèm",
        value: "Cáp Sạc USB‑C (1m), Sách hướng dẫn",
      },
      {
        name: "Model",
        value: "iPhone 16",
      },
      {
        name: "Jack tai nghe",
        value: "Type-C",
      },
      {
        name: "Loại pin",
        value: "lithium-ion",
      },
      {
        name: "Xuất xứ (Made in)",
        value: "Trung Quốc",
      },
      {
        name: "Cổng sạc",
        value: "Type-C",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Apple Việt Nam",
    },
    sale: 10,
    sold: 3,
    inventory: 20,
  },
  {
    id: 1,
    name: "Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng",
    price: 31090000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/5b/7f/3e/4df5438a9ab573ede025c941a155c1b4.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/76/aa/c3/1eaa3b283a42bfc7ab7166d06844d101.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/f3/3f/0d/8c158e4de31e496a21d4a91a73551e15.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/4c/00/f2729a5048a6c397551f28f2eaf23bd6.jpg.webp",
      },
    ],
    star: 5,
    info: [
      {
        name: "Dung lượng pin",
        value: "5000 mAh",
      },
      {
        name: "Bluetooth",
        value: "v5.3",
      },
      {
        name: "Thương hiệu",
        value: "Samsung",
      },
      {
        name: "Xuất xứ thương hiệu",
        value: "Hàn Quốc",
      },
      {
        name: "Camera sau",
        value: "12MP,200MP,50MP",
      },
      {
        name: "Camera trước",
        value: "12MP",
      },
      {
        name: "Chip đồ họa (GPU)",
        value: "Adreno 750",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Kích thước",
        value: "Dài 147 mm - Ngang 70.6 mm - Dày 7.6 mm - Nặng 167 g",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "QHD+ Dynamic AMOLED 2X",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Model",
        value: "S 24 Ultra",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Samsung Việt Nam",
    },
    sale: 15,
    sold: 12,
    inventory: 30,
  },
  {
    id: 2,
    name: "Apple iPhone 16 - Hàng chính hãng giá ưu đãi",
    price: 20900000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/08/c4/e4/7f1e1531606703edb5055af6f0578e24.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/c2/17/1b2a787927d9b8a76dbdb5c65769cdcd.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/be/1f/2b/8a9395d5f18337a1060abcc2ff5011f9.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/9e/cb/31/ab5bf3021b24e9124eeab62581f4abe5.jpg.webp",
      },
    ],
    star: 4,
    info: [
      {
        name: "Bluetooth",
        value: "Bluetooth 5.3",
      },
      {
        name: "Thương hiệu",
        value: "Apple",
      },
      {
        name: "Hỗ trợ thẻ nhớ ngoài",
        value: "Không",
      },
      {
        name: "Chip set",
        value: "Chip A18",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "Super Retina XDR",
      },
      {
        name: "GPS",
        value: "Có",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Phụ kiện đi kèm",
        value: "Cáp Sạc USB‑C (1m), Sách hướng dẫn",
      },
      {
        name: "Model",
        value: "iPhone 16",
      },
      {
        name: "Jack tai nghe",
        value: "Type-C",
      },
      {
        name: "Loại pin",
        value: "lithium-ion",
      },
      {
        name: "Xuất xứ (Made in)",
        value: "Trung Quốc",
      },
      {
        name: "Cổng sạc",
        value: "Type-C",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Apple Việt Nam",
    },
    sale: 10,
    sold: 3,
    inventory: 20,
  },
  {
    id: 1,
    name: "Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng",
    price: 31090000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/5b/7f/3e/4df5438a9ab573ede025c941a155c1b4.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/76/aa/c3/1eaa3b283a42bfc7ab7166d06844d101.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/f3/3f/0d/8c158e4de31e496a21d4a91a73551e15.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/4c/00/f2729a5048a6c397551f28f2eaf23bd6.jpg.webp",
      },
    ],
    star: 5,
    info: [
      {
        name: "Dung lượng pin",
        value: "5000 mAh",
      },
      {
        name: "Bluetooth",
        value: "v5.3",
      },
      {
        name: "Thương hiệu",
        value: "Samsung",
      },
      {
        name: "Xuất xứ thương hiệu",
        value: "Hàn Quốc",
      },
      {
        name: "Camera sau",
        value: "12MP,200MP,50MP",
      },
      {
        name: "Camera trước",
        value: "12MP",
      },
      {
        name: "Chip đồ họa (GPU)",
        value: "Adreno 750",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Kích thước",
        value: "Dài 147 mm - Ngang 70.6 mm - Dày 7.6 mm - Nặng 167 g",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "QHD+ Dynamic AMOLED 2X",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Model",
        value: "S 24 Ultra",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Samsung Việt Nam",
    },
    sale: 15,
    sold: 12,
    inventory: 30,
  },
  {
    id: 2,
    name: "Apple iPhone 16 - Hàng chính hãng giá ưu đãi",
    price: 20900000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/08/c4/e4/7f1e1531606703edb5055af6f0578e24.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/c2/17/1b2a787927d9b8a76dbdb5c65769cdcd.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/be/1f/2b/8a9395d5f18337a1060abcc2ff5011f9.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/9e/cb/31/ab5bf3021b24e9124eeab62581f4abe5.jpg.webp",
      },
    ],
    star: 4,
    info: [
      {
        name: "Bluetooth",
        value: "Bluetooth 5.3",
      },
      {
        name: "Thương hiệu",
        value: "Apple",
      },
      {
        name: "Hỗ trợ thẻ nhớ ngoài",
        value: "Không",
      },
      {
        name: "Chip set",
        value: "Chip A18",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "Super Retina XDR",
      },
      {
        name: "GPS",
        value: "Có",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Phụ kiện đi kèm",
        value: "Cáp Sạc USB‑C (1m), Sách hướng dẫn",
      },
      {
        name: "Model",
        value: "iPhone 16",
      },
      {
        name: "Jack tai nghe",
        value: "Type-C",
      },
      {
        name: "Loại pin",
        value: "lithium-ion",
      },
      {
        name: "Xuất xứ (Made in)",
        value: "Trung Quốc",
      },
      {
        name: "Cổng sạc",
        value: "Type-C",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Apple Việt Nam",
    },
    sale: 10,
    sold: 3,
    inventory: 20,
  },
  {
    id: 1,
    name: "Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng",
    price: 31090000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/5b/7f/3e/4df5438a9ab573ede025c941a155c1b4.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/76/aa/c3/1eaa3b283a42bfc7ab7166d06844d101.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/f3/3f/0d/8c158e4de31e496a21d4a91a73551e15.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/45/4c/00/f2729a5048a6c397551f28f2eaf23bd6.jpg.webp",
      },
    ],
    star: 5,
    info: [
      {
        name: "Dung lượng pin",
        value: "5000 mAh",
      },
      {
        name: "Bluetooth",
        value: "v5.3",
      },
      {
        name: "Thương hiệu",
        value: "Samsung",
      },
      {
        name: "Xuất xứ thương hiệu",
        value: "Hàn Quốc",
      },
      {
        name: "Camera sau",
        value: "12MP,200MP,50MP",
      },
      {
        name: "Camera trước",
        value: "12MP",
      },
      {
        name: "Chip đồ họa (GPU)",
        value: "Adreno 750",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Kích thước",
        value: "Dài 147 mm - Ngang 70.6 mm - Dày 7.6 mm - Nặng 167 g",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "QHD+ Dynamic AMOLED 2X",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Model",
        value: "S 24 Ultra",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Samsung Việt Nam",
    },
    sale: 15,
    sold: 12,
    inventory: 30,
  },
  {
    id: 2,
    name: "Apple iPhone 16 - Hàng chính hãng giá ưu đãi",
    price: 20900000,
    img: [
      {
        id: 0,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/08/c4/e4/7f1e1531606703edb5055af6f0578e24.jpg.webp",
      },
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/91/c2/17/1b2a787927d9b8a76dbdb5c65769cdcd.jpg.webp",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/be/1f/2b/8a9395d5f18337a1060abcc2ff5011f9.jpg.webp",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/750x750/ts/product/9e/cb/31/ab5bf3021b24e9124eeab62581f4abe5.jpg.webp",
      },
    ],
    star: 4,
    info: [
      {
        name: "Bluetooth",
        value: "Bluetooth 5.3",
      },
      {
        name: "Thương hiệu",
        value: "Apple",
      },
      {
        name: "Hỗ trợ thẻ nhớ ngoài",
        value: "Không",
      },
      {
        name: "Chip set",
        value: "Chip A18",
      },
      {
        name: "NFC",
        value: "Có",
      },
      {
        name: "Đèn Flash",
        value: "Có",
      },
      {
        name: "Loại/ Công nghệ màn hình",
        value: "Super Retina XDR",
      },
      {
        name: "GPS",
        value: "Có",
      },
      {
        name: "Hỗ trợ 5G",
        value: "Có",
      },
      {
        name: "Phụ kiện đi kèm",
        value: "Cáp Sạc USB‑C (1m), Sách hướng dẫn",
      },
      {
        name: "Model",
        value: "iPhone 16",
      },
      {
        name: "Jack tai nghe",
        value: "Type-C",
      },
      {
        name: "Loại pin",
        value: "lithium-ion",
      },
      {
        name: "Xuất xứ (Made in)",
        value: "Trung Quốc",
      },
      {
        name: "Cổng sạc",
        value: "Type-C",
      },
    ],
    baohanh: {
      thoigian: "12 tháng",
      hinhthuc: "1 đổi 1",
      noibaohanh: "Apple Việt Nam",
    },
    sale: 10,
    sold: 3,
    inventory: 20,
  },
];

function ProductSale() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white mt-5 p-5 pb-10 rounded-md  ">
      <div>
        <h1 className="text-red-500 text-2xl py-2 font-semibold">Top sale </h1>
        <Slider {...settings}>
          {productSale.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductSale;
