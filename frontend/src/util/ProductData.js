import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons/faFireFlameCurved";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons/faHandPointer";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
 
 export const listcard = [
    {
      id: 1,
      photo: `/img/Iphone16.jpg`,
      photo1: `/img/Iphone11.jpg`,
      name: "Apple Iphone 16",
      tagimg: faCartShopping,
      tag: "Produk Terbaru",
      price: "IDR 16.999.000",
      hasMultipleColors: true,
      ram: ["8GB"],
      rom: ["128GB", "256GB", "512GB"],
    },
    {
      id: 2,
      photo: "/img/Iphone13ProMax.jpg",
      name: "Apple Iphone 13 Pro Max",
      tagimg: faFireFlameCurved,
      tag: "Produk Terlaris",
      price: "IDR 11.700.000",
      hasMultipleColors: false,
      ram: ["6GB"],
      rom: ["128GB", "256GB", "512GB", "1024GB"],
    },
    {
      id: 3,
      photo: "/img/Iphone11.jpg",
      name: "Iphone 11 Pro Max",
      tagimg: faThumbsUp,
      tag: "Produk Termurah",
      price: "IDR 7.299.000",
      hasMultipleColors: false,
      ram: ["4GB"],
      rom: ["64GB", "256GB", "512GB"],
    },
    {
      id: 4,
      photo: "/img/SamsungS24.jpg",
      name: "Samsung S24 Ultra",
      tagimg: faFireFlameCurved,
      tag: "Produk Terlaris",
      price: "IDR 15.000.000",
      hasMultipleColors: false,
      ram: ["12GB"],
      rom: ["256GB", "512GB", "1024GB"],
    },
    {
      id: 5,
      photo: "/img/PocoX6.jpg",
      name: "Poco X6 Pro",
      tagimg: faHandPointer,
      tag: "Paling Banyak Dicari",
      price: "IDR 4.200.000",
      hasMultipleColors: false,
      ram: ["8GB"],
      rom: ["256GB"],
    },
    {
      id: 6,
      photo: "/img/RedmiNote13Pro.jpg",
      name: "Redmi Note 13 Pro",
      tagimg: faCartShopping,
      tag: "Produk Terbaru",
      price: "IDR 4.199.000",
      hasMultipleColors: false,
      ram: ["8GB"],
      rom: ["256GB"],
    },
  ];

  export default listcard