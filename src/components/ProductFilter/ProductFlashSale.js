import { useState, useEffect } from "react";
import FireImg from "../../assets/camket/fireSale.svg";
import formatCurrency from "../../caculator/FormatCurrency";
import { useNavigate } from "react-router-dom";

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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
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
    sold: 2,
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
    sold: 6,
    inventory: 10,
  },
];

function ProductFlashSale() {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [maxProducts, setMaxProducts] = useState(6);
  const [timeLeft, setTimeLeft] = useState(2483); // 41 phút 23 giây (41 * 60 + 23)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsHidden(false);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      {isHidden && (
        <div className="bg-white mt-5 p-5 pb-10 rounded-md transform transition duration-300">
          <div className="flex justify-between">
            <div className="flex mb-2 items-center space-x-2 text-xl font-semibold">
              <span>Flash Sale</span>
              <div className="flex space-x-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {hours}
                </span>
                <span>:</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {minutes}
                </span>
                <span>:</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {seconds}
                </span>
              </div>
            </div>
            {maxProducts === productSale.length ? (
              <div
                className="p-3 text-primary text-[18px] font-bold cursor-pointer"
                onClick={() => setMaxProducts(6)}
              >
                Thu gọn
              </div>
            ) : (
              <div
                className="p-3 text-primary text-[18px] font-bold cursor-pointer"
                onClick={() => setMaxProducts(productSale.length)}
              >
                Xem tất cả
              </div>
            )}
          </div>
          <div className="grid grid-cols-6 gap-2">
            {productSale.slice(0, maxProducts).map((product, index) => (
              <div
                key={index}
                className="mx-auto w-[95%] h-[280px] border border-gray-200 rounded-lg
    cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
                onClick={() => {
                  localStorage.setItem(
                    "detailProduct",
                    JSON.stringify(product)
                  );
                  localStorage.setItem(
                    "detailProduct",
                    JSON.stringify(product)
                  );
                  navigate("/productDetail");
                }}
              >
                <div className="p-2">
                  {/* IMG */}
                  <div className="relative h-[148px]">
                    <img
                      src={product.img[0].img}
                      alt=""
                      className="w-full h-[148px]"
                    />
                    <span className="absolute top-0 left-0 p-1 bg-[#ffdbde] rounded text-[#ff424e] font-bold text-[15px] leading-[150%]">
                      {"- " + product.sale + "%"}
                    </span>
                  </div>
                  <div className="p-2">
                    {/* Description */}
                    <div className="mt-3">
                      <h1 className="text-red-500 text-center text-[20px] font-semibold">
                        {formatCurrency(
                          product.price - product.price * (product.sale / 100)
                        )}
                      </h1>
                    </div>
                    {/* Process */}
                    <div className="relative">
                      <img
                        src={FireImg}
                        alt=""
                        className="z-10 absolute w-[24px] bt-[4px] left-[5px] -top-[10px]"
                      />
                      <div className="relative overflow-hidden mt-[20px] flex rounded-[16px] bg-[#ffaaaf] w-[100%] h-[20px] ">
                        <div
                          className="absolute left-0 top-0 bg-[#ff424e] h-[20px] rounded-[16px]"
                          style={{
                            width: `${(product.sold * 100) / product.inventory}%`,
                          }}
                        ></div>
                        {product.sold > 0 ? (
                          <span className="absolute text-white text-center text-[13px] leading-[15px] flex items-center justify-center h-full w-full ">
                            Đã bán {" " + product.sold}
                          </span>
                        ) : (
                          <span className="absolute text-white text-center text-[13px] leading-[15px] flex items-center justify-center h-full w-full ">
                            Vừa mở bán
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductFlashSale;
