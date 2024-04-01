// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import gambar1 from "../../../Assets/imgs/img1.png";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../../../Assets/imgs/img1.png";
import img2 from "../../../Assets/imgs/img2.png";
import img3 from "../../../Assets/imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "All Registered",
  },
  {
    icon: UilClipboardAlt,
    heading: "Mobile Legend",
  },
  {
    icon: UilUsersAlt,
    heading: "Valorant",
  },
];

export const rows = [
  {
    nama: "John Doe",
    nim: "1234567890",
    email: "johndoe@gmail.com",
    ktm: gambar1,
    lomba: "Mobile Legend",
  },
  {
    nama: "Hosea",
    nim: "1234567891",
    email: "hosea@gmail.com",
    ktm: gambar1,
    lomba: "Valorant",
  },
  {
    nama: "Jane Doe",
    nim: "0987654321",
    email: "janedoe@gmail.com",
    ktm: gambar1,
    lomba: "Mobile Legend",
  },
  {
    nama: "Alice",
    nim: "1122334455",
    email: "alice@gmail.com",
    ktm: gambar1,
    lomba: "Valorant",
  },
  {
    nama: "Bob",
    nim: "5432167890",
    email: "bob@gmail.com",
    ktm: gambar1,
    lomba: "Mobile Legend",
  },
  {
    nama: "Charlie",
    nim: "0987654322",
    email: "charlie@gmail.com",
    ktm: gambar1,
    lomba: "Valorant",
  },
  {
    nama: "David",
    nim: "0987654323",
    email: "david@gmail.com",
    ktm: gambar1,
    lomba: "Mobile Legend",
  },
  {
    nama: "Eve",
    nim: "0987654324",
    email: "eve@gmail.com",
    ktm: gambar1,
    lomba: "Valorant",
  },
  // Tambahkan data palsu lainnya di sini
];


// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
