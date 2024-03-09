import React, { useState } from "react";
import { Fade } from "react-reveal";
import image1 from "../../Assets/NewsEvent/dumbimg1.jpeg";
import image2 from "../../Assets/NewsEvent/dumbimg2.jpeg";
import image3 from "../../Assets/NewsEvent/dumbimg3.jpeg";
import image4 from "../../Assets/NewsEvent/dumbimg4.jpeg";

import logo1 from "../../Assets/Images/UfestLogo.png";

function HomePart2() {
  const logos = [logo1, logo1, logo1, logo1];
  const images = [image1, image2, image3, image4];
  const Titles = ["Unveiling", "Unify", "ulympic", "E-Ulympic"];
  const [isHovered, setIsHovered] = useState(false);
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
            <h1 className="pl-10">{Titles[index]}</h1>
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
}

export default HomePart2;
