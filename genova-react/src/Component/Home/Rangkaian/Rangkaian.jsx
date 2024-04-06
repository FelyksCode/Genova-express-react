import React, { useEffect, useState } from "react";
// css
import "./Stylerangkaian.css";

//foto
import image1 from "../../../Assets/NewsEvent/dumbimg1.webp";
import image2 from "../../../Assets/NewsEvent/dumbimg2.webp";
import image3 from "../../../Assets/NewsEvent/dumbimg3.webp";
import image4 from "../../../Assets/NewsEvent/dumbimg4.webp";

import logo1 from "../../../Assets/Rangkaian/Unify.webp";
import logo2 from "../../../Assets/Rangkaian/Ucare.webp";
import logo3 from "../../../Assets/Rangkaian/Unveiling.webp";
import logo4 from "../../../Assets/Rangkaian/Ulympic.webp";
import logo5 from "../../../Assets/Rangkaian/E-Ulympic.webp";

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
  const images = [image1, image2, image3, image4, image4];
  const Titles = ["Unify", "Ucare", "Unveiling", "ulympic", "E-Ulympic"];
  const [isHovered, setIsHovered] = useState(false);

  if (isWideScreen) {
    return (
      <div className="w-full h-full bg-gray-700">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[200px]">
            <div className="flex justify-center items-center h-full hover:scale-110">
              <img
                src={image}
                className="object-cover  h-[200px] w-full block duration-300 transition-transform hover:scale-110"
              />
            </div>
            <div
              className="inset-0 flex absolute justify-center items-center text-white text-xl font-extrabold bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity duration-300"
              onMouseEnter={() => setIsHovered(false)}
              onMouseLeave={() => setIsHovered(true)}
            >
              <h1 className="px-10">{Titles[index]}</h1>
              {isHovered && (
                <div className="flex items-center justify-end w-full top-full pr-10 mt-2">
                  <img src={logos[index]} className="w-20" />
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
          <a
            href="https://www.mythrillfiction.com/the-dark-rider"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.webp"
                class="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                class="character"
              />
            </div>
          </a>

          <a
            href="https://www.mythrillfiction.com/force-mage"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.webp"
                class="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                class="character"
              />
            </div>
          </a>
          <a
            href="https://www.mythrillfiction.com/the-dark-rider"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.webp"
                class="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                class="character"
              />
            </div>
          </a>

          <a
            href="https://www.mythrillfiction.com/force-mage"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.webp"
                class="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                class="character"
              />
            </div>
          </a>

          <a
            href="https://www.mythrillfiction.com/the-dark-rider"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.webp"
                class="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                class="character"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Rangkaian;
