import IonIcon from "@reacticons/ionicons";
import React, { useState } from "react";
import Button from "./Button";
import Logo from "../../Assets/Images/UfestLogo.webp";
import { Link } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    // { name: "FAQ", link: "/faq" },
    { name: "DIVISION", link: "/division" },
    { name: "MAP", link: "/map" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed z-10 shadow-md lg:shadow-none md:shadow-none w-[95%] fixed top-2 left-3 md:left-8 z-10 rounded-full">
      <div className="lg:flex items-center md:flex items-center justify-between bg-slate-100 lg:bg-opacity-0 md:bg-opacity-0 py-4 lg:px-10 md:px-10 px-7 rounded-full">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center lg:text-white text-gray-600 md:text-white text-gray-600 lg:font-[Poppins text-gray-800] md:font-[Poppins text-gray-800]"
        >
          <a className="w-[40px] mr-5 pt-auto" href="/">
            <img src={Logo} alt="ufest logo" />
          </a>
          UMN FESTIVAL
        </Link>
        <button
          role="button"
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-4 cursor-pointer lg:hidden md:hidden p-2"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </button>
        <ul
          className={`rounded-3xl lg:flex md:flex lg:items-center md:items-center lg:pb-0 md:pb-0 pb-12 absolute lg:static md:static bg-slate-100 lg:bg-opacity-0 md:bg-opacity-0 md:z-auto z-[-1] left-0 w-full lg:w-auto md:w-auto lg:px-0 md:px-0 px-[120px] transition-all duration-500 ease-in ${
            open ? "top-[90px] opacity-100" : "top-[-485px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 md:ml-8 text-xl lg:my-0 md:my-0 my-7 text-center "
            >
              <Link
                to={link.link}
                className="lg:text-white md:text-white text-gray-800 hover:text-gray-600 lg:hover:text-gray-400 md:hover:text-gray-400 duration-500 font-extrabold md:text-[20px] text-[17px]"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to="/eulympic">
            <Button>Register</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
