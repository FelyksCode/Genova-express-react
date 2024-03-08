import { React, useState, useEffect } from "react";

import Unify from "../../../Assets/Rangkaian/Unify.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// css
import "./Stylerangkaian.css";
import "swiper/css";

function Rangkaian() {
  const isWideScreen = window.innerWidth <= 768;
  const cards = [
    {
      href: "https://www.mythrillfiction.com/the-dark-rider",
      coverImage: Unify,
      titleImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterImage: Unify,
    },
    {
      href: "https://www.mythrillfiction.com/force-mage",
      coverImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
    {
      href: "https://www.mythrillfiction.com/the-dark-rider",
      coverImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
    {
      href: "https://www.mythrillfiction.com/force-mage",
      coverImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterImage:
        "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    },
    {
      href: "https://www.mythrillfiction.com/the-dark-rider",
      coverImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterImage:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
  ];

  const Card = ({ card }) => (
    <a href={card.href} target="_blank" className="card">
      <div className="wrapper flex place-self-center ">
        <img src={card.coverImage} className="cover-image bg-white" />
      </div>
      {/* <img src={card.titleImage} className="title" /> */}
      <img
        src={card.characterImage}
        className="character flex place-self-center"
      />
    </a>
  );

  return (
    <div className="rangkaianwrapper">
      <div className="overlaycolor"></div>
      <div className="content">
        {isWideScreen ? (
          <Swiper
            modules={[Autoplay]}
            className="mySwiper"
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          cards.map((card, index) => <Card key={index} card={card} />)
        )}
      </div>
    </div>
  );
}

export default Rangkaian;
