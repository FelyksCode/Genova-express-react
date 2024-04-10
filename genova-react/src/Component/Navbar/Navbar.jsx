import IonIcon from "@reacticons/ionicons";
import React, { useState } from "react";
import Button from "./Button";
import Logo from "../../Assets/Images/UfestLogo.webp";
import { Link } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "FAQ", link: "/faq" },
    { name: "DIVISION", link: "/division" },
    { name: "MAP", link: "/map" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md lg:md:shadow-none w-[95%] fixed top-2 left-3 md:left-8 z-10 rounded-full">
      <div className="lg:md:flex items-center justify-between bg-slate-100 lg:md:bg-opacity-0 py-4 lg:md:px-10 px-7 rounded-full">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center lg:md:text-white text-gray-600 lg:md:font-[Poppins text-gray-800]"
        >
          <span className="w-[40px] mr-5 pt-auto">
            <img src={Logo} alt="ufest logo" />
          </span>
          UMN FESTIVAL
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-4 cursor-pointer lg:md:hidden p-2"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>
        <ul
          className={`rounded-3xl lg:md:flex lg:md:items-center lg:md:pb-0 pb-12 absolute lg:md:static bg-slate-100 lg:md:bg-opacity-0 md:z-auto z-[-1] left-0 w-full lg:md:w-auto lg:md:px-0 px-[120px] transition-all duration-500 ease-in ${
            open ? "top-[90px] opacity-100" : "top-[-485px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:md:ml-8 text-xl lg:md:my-0 my-7 text-center "
            >
              <Link
                to={link.link}
                className="lg:md:text-white text-gray-800 hover:text-gray-600 lg:md:hover:text-gray-400 duration-500 font-extrabold md:text-[20px] text-[17px]"
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
