import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import "./Stylerangkaian.css";

//foto
import image1 from "../../../Assets/NewsEvent/UNVEILING.webp";
import image2 from "../../../Assets/NewsEvent/E-ULYMPIC.webp";
import image3 from "../../../Assets/NewsEvent/UCARE.webp";
import image4 from "../../../Assets/NewsEvent/ULYMPIC.webp";
import image5 from "../../../Assets/NewsEvent/UNIFY.webp";

import logo1 from "../../../Assets/Rangkaian/Unveiling.webp";
import logo2 from "../../../Assets/Rangkaian/E-Ulympic.webp";
import logo3 from "../../../Assets/Rangkaian/Ucare.webp";
import logo4 from "../../../Assets/Rangkaian/Ulympic.webp";
import logo5 from "../../../Assets/Rangkaian/Unify.webp";

import bg1 from "../../../Assets/NewsEvent/UNVEILING_1.webp";
import bg2 from "../../../Assets/NewsEvent/E-ULYMPIC_1.webp";
import bg3 from "../../../Assets/NewsEvent/UCARE_1.webp";
import bg4 from "../../../Assets/NewsEvent/ULYMPIC_1.webp";
import bg5 from "../../../Assets/NewsEvent/UNIFY_1.webp";

import gambar1 from "../../../Assets/Rangkaian/Unveiling_1.webp";
import gambar2 from "../../../Assets/Rangkaian/E-Ulympic_1.webp";
import gambar3 from "../../../Assets/Rangkaian/Ucare_1.webp";
import gambar4 from "../../../Assets/Rangkaian/Ulympic_1.webp";
import gambar5 from "../../../Assets/Rangkaian/Unify_1.webp";

import judul1 from "../../../Assets/Rangkaian/Judul_Unveiling.webp";
import judul2 from "../../../Assets/Rangkaian/Judul_E-Ulympic.webp";
import judul3 from "../../../Assets/Rangkaian/Judul_Ucare.webp";
import judul4 from "../../../Assets/Rangkaian/Judul_Ulympic.webp";
import judul5 from "../../../Assets/Rangkaian/Judul_Unify.webp";

function Rangkaian() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isWideScreen = windowWidth <= 1024;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // home hp
  const logos = [logo1, logo2, logo3, logo4, logo5];
  const images = [image1, image2, image3, image4, image5];
  const Titles = ["Unveiling", "E-Ulympic", "Ucare", "Ulympic", "Unify"];
  const Tujuan = ["unveiling", "eulympic", "ucare", "ulympic", "unify"];
  const [isHovered, setIsHovered] = useState(false);

  // Inside your component
  const navigate = useNavigate();

  if (isWideScreen) {
    return (
      <div className="w-full h-full bg-gray-700">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[200px]"
            onClick={() => navigate(`/${Tujuan[index]}`)}
          >
            <div className="flex justify-center items-center h-full hover:scale-110">
              <img
                src={image}
                className="object-cover  h-[200px] w-full block duration-300 transition-transform hover:scale-110"
                alt="BACKGROUND"
              />
            </div>
            <div
              className="inset-0 flex absolute justify-center items-center text-white text-xl font-extrabold bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity duration-300"
              onMouseEnter={() => setIsHovered(false)}
              onMouseLeave={() => setIsHovered(true)}
              href={`/${Tujuan[index]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="font-custom px-10 text-4xl sm:text-5xl">
                {Titles[index]}
              </h1>
              {isHovered && (
                <div className="flex items-center justify-end w-full top-full pr-10 mt-2">
                  <img src={logos[index]} className="w-20" alt="LOGO" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="rangkaianwrapper">
        <div className="overlaycolor"></div>

        <div className="content">
          <div className="card" onClick={() => navigate("/unveiling")}>
            <div className="wrapper">
              <img src={bg1} className="cover-image" alt="coverimage" />
            </div>
            <img src={judul1} className="title" alt="title" />
            <img src={gambar1} className="character" alt="character" />
          </div>

          <div className="card" onClick={() => navigate("/eulympic")}>
            <div className="wrapper">
              <img src={bg2} className="cover-image" alt="coverimage" />
            </div>
            <img src={judul2} className="title" alt="title" />
            <img src={gambar2} className="character" alt="charcter" />
          </div>
          <div className="card" onClick={() => navigate("/ucare")}>
            <div className="wrapper">
              <img src={bg3} className="cover-image" alt="coverimage" />
            </div>
            <img src={judul3} className="title" alt="title" />
            <img src={gambar3} className="character" alt="character" />
          </div>

          <div className="card" onClick={() => navigate("/ulympic")}>
            <div className="wrapper">
              <img src={bg4} className="cover-image" alt="coverimage" />
            </div>
            <img src={judul4} className="title" alt="title" />
            <img src={gambar4} className="character4" alt="character" />
          </div>

          <div className="card" onClick={() => navigate("/unify")}>
            <div className="wrapper">
              <img src={bg5} className="cover-image" alt="coverimage" />
            </div>
            <img src={judul5} className="title" alt="title" />
            <img src={gambar5} className="character5" alt="character" />
          </div>
        </div>
      </div>
    );
  }
}

export default Rangkaian;
