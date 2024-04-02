import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import './DaftarPanti.css';
import logo1 from "../../../Assets/Rangkaian/Unify.png";
import logo2 from "../../../Assets/Rangkaian/Ucare.png";
import logo3 from "../../../Assets/Rangkaian/Unveiling.png";
import logo4 from "../../../Assets/Rangkaian/Ulympic.png";
import logo5 from "../../../Assets/Rangkaian/E-Ulympic.png";

function DaftarPanti() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false, 
    centerPadding: '60px', 
    fade:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false, 
          fade:true
        },
      },
    ],
    autoplay: true,
    autoplayspeed: 500
  };

  const data = [
    {
      name: `John Morgan`,
      img: logo1,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: logo2,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: logo3,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: logo4,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: logo5,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <div className='w-3/4 m-auto bungkuspanti '>
      <h1 style={{ fontFamily: 'Akbaal, sans-serif' }} className='text-4xl font-bold flex justify-center'>Partner Panti</h1>
    <div className="">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className=" text-black rounded-xl">
            <div className='h-56  flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
  
            <div className="flex flex-col items-center justify-center gap-4 p-4" style={{ padding: '20px' }}>
              <p style={{ fontFamily: 'Akbaal, sans-serif' }} className="text-xl font-semibold">{d.name}</p>
              <p style={{ fontFamily: 'Forum-Regular, sans-serif' }} className="text-center">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  );
}

export default DaftarPanti;
