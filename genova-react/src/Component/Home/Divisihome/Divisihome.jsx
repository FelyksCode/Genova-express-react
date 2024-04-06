import React, { useState, useEffect } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./stylehero.css";

import Slideimg1 from "../../../Assets/LogoDivisi_Baru/Acara.webp";
import Slideimg2 from "../../../Assets/LogoDivisi_Baru/BPH.webp";
import Slideimg3 from "../../../Assets/LogoDivisi_Baru/Dekorasi.webp";
import Slideimg4 from "../../../Assets/LogoDivisi_Baru/Dokumentasi.webp";
import Slideimg5 from "../../../Assets/LogoDivisi_Baru/FreshMoney.webp";
import Slideimg6 from "../../../Assets/LogoDivisi_Baru/Konsumsi.webp";
import Slideimg7 from "../../../Assets/LogoDivisi_Baru/Lomba.webp";
import Slideimg8 from "../../../Assets/LogoDivisi_Baru/Perlengkapan.webp";
import Slideimg9 from "../../../Assets/LogoDivisi_Baru/Publikasi.webp";
import Slideimg10 from "../../../Assets/LogoDivisi_Baru/Sponsor.webp";
import Slideimg11 from "../../../Assets/LogoDivisi_Baru/Ticketing.webp";
import Slideimg12 from "../../../Assets/LogoDivisi_Baru/Visual.webp";
import Slideimg13 from "../../../Assets/LogoDivisi_Baru/Website.webp";

function Divisihome() {
  const [focusElement, setFocusElement] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const images = [
    Slideimg1,
    Slideimg2,
    Slideimg3,
    Slideimg4,
    Slideimg5,
    Slideimg6,
    Slideimg7,
    Slideimg8,
    Slideimg9,
    Slideimg10,
    Slideimg11,
    Slideimg12,
    Slideimg13,
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselProps =
    windowWidth <= 550
      ? {
          carouselRadius: 130,
          peripheralImageRadius: 28,
          centralImageRadius: 60,
        }
      : windowWidth <= 1000
      ? {
          carouselRadius: 200,
          peripheralImageRadius: 35,
          centralImageRadius: 90,
        }
      : {
          carouselRadius: 250,
          peripheralImageRadius: 43,
          centralImageRadius: 110,
        };

  return (
    <div className="carousel  ">
      <a href="/division">
        <div className="main py-[100px] w-screen h-screen pembungkus">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            focusElementStyling={{ border: "5px solid #ba4949" }}
            autoRotateTime={3}
            borderWidth={4}
            borderHexColor={"1c364f"}
            {...carouselProps} // Spread the conditional props
          />
        </div>
      </a>
    </div>
  );
}

export default Divisihome;
