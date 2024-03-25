import React, { useEffect, useState } from "react";

// Package
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCards,
} from "swiper/modules";

// Assets
import Slideimg1 from "../../Assets/LogoDivisi_Baru/Acara.png";
import Slideimg2 from "../../Assets/LogoDivisi_Baru/BPH.png";
import Slideimg3 from "../../Assets/LogoDivisi_Baru/Dekorasi.png";
import Slideimg4 from "../../Assets/LogoDivisi_Baru/Dokumentasi.png";
import Slideimg5 from "../../Assets/LogoDivisi_Baru/FreshMoney.png";
import Slideimg6 from "../../Assets/LogoDivisi_Baru/Konsumsi.png";
import Slideimg7 from "../../Assets/LogoDivisi_Baru/Lomba.png";
import Slideimg8 from "../../Assets/LogoDivisi_Baru/Perlengkapan.png";
import Slideimg9 from "../../Assets/LogoDivisi_Baru/Publikasi.png";
import Slideimg10 from "../../Assets/LogoDivisi_Baru/Sponsor.png";
import Slideimg11 from "../../Assets/LogoDivisi_Baru/Ticketing.png";
import Slideimg12 from "../../Assets/LogoDivisi_Baru/Visual.png";
import Slideimg13 from "../../Assets/LogoDivisi_Baru/Website.png";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "./vertical.css";
import "swiper/css/effect-fade";

function Spinner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isWideScreen = windowWidth <= 799;

  const verticalimages = [
    {
      image: Slideimg1,
      Judul: "Rome",
      Text: "Pusat ibu kota di Italia. menjadi destinasi utama para turis saat berkunjung. Divisi BPH menjadi pusat utama informasi acara dan divisi lainnya.",
    },
    {
      image: Slideimg2,
      Judul: "Tuscany",
      Text: "Kota Tuscany dikenal sebagai kota pusat inovasi di masa Renaissance. Divisi acara menjadi pusat inovasi dalam acara ini.",
    },
    {
      image: Slideimg3,
      Judul: "Florence",
      Text: "Kota Florence dikenal sebagai kota terindah di Italia karena warisan budaya, arsitektur, dan seni yang sangat menakjubkan. Seperti Florence yang dipenuhi dengan keindahan, divisi Dekorasi akan membantu memperindah venue-venue yang akan digunakan oleh UMN Festival 2024.",
    },
    {
      image: Slideimg4,
      Judul: "Napoli",
      Text: "Kota Napoli dikenal dengan perpaduan nuansa kuno dan modern. Napoli menjadi kota dengan seni, arsitektur, dan peninggalan arkeologi yang menarik banyak turis untuk berfoto. Divisi dokumentasi memiliki tugas dalam mengabdikan banyak momen acara.",
    },
    {
      image: Slideimg5,
      Judul: "Venezia",
      Text: "Kota Venezia merupakan kota yang terkenal karena aspek perdagangan dan pariwisata. Maka dari itu, Venezia memiliki pemasukan ekonomi yang besar bagi Italia. Seperti Venezia, divisi Fresh Money akan mendukung UMN Festival 2024 dengan berbagai kegiatan wirausaha.",
    },
    {
      image: Slideimg6,
      Judul: "Lazio",
      Text: "Kota Lazio dikenal sebagai kota yang menemukan banyak macam pasta yang kita kenal hingga saat ini. Seperti Lazio yang menyediakan makanan bagi para penduduknya, divisi Konsumsi juga akan menyediakan makanan bagi seluruh panitia.",
    },
    {
      image: Slideimg7,
      Judul: "Milan",
      Text: "Kota Milan yang terkenal dengan pusat sepak bola di Italia yaitu AC Milan. Terdapat banyak kompetisi yang berlangsung di kota tersebut khususnya sepak bola.",
    },
    {
      image: Slideimg8,
      Judul: "Ardea",
      Text: "Kota Ardea terkenal dengan tempat wisata yang beragam seperti pantai, hotel, destinasi, dan makanannya. Divisi perlengkapan siap menyediakan kebutuhan yang diperlukan, sama halnya dengan kota Ardea yang lengkap akan destinasi wisata.",
    },
    {
      image: Slideimg9,
      Judul: "Catania",
      Text: "Catania merupakan kota terbesar kedua di Sisilia, Italia. menjadikannya sebagai kota terpadat kedua di pulau tersebut. Divisi publikasi yang menarik banyak partisipan.",
    },
    {
      image: Slideimg10,
      Judul: "Turin",
      Text: "Kota Turin dikenal sebagai salah satu kota dengan pemasukan ekonomi terbesar di Italia karena merupakan pusat dari industri otomotif. Seperti Turin, divisi Sponsorship juga merupakan divisi yang bertugas untuk mencari pemasukan dana.",
    },
    {
      image: Slideimg11,
      Judul: "Alba",
      Text: "Kota Alba dikenal sebagai kota administrasi di Italia. Divisi ticketing yang bertanggung jawab atas administrasi tiket ufest.",
    },
    {
      image: Slideimg12,
      Judul: "Pisa",
      Text: "Kota Pisa dikenal sebagai kota yang memiliki banyak destinasi wisata yang berhubungan desain seperti desain arsitektur dan museum lukisan. Seperti kota Pisa yang dipenuhi dengan kreativitas, divisi Visual akan memenuhi kebutuhan kreatif dari acara ini.",
    },
    {
      image: Slideimg13,
      Judul: "Genova",
      Text: "Kota Genova dikenal sebagai pusat ekonomi industri, contohnya seperti baja. Genova, Italia menjadi kota perkembangan yang lebih berteknologi maju dan ramah lingkungan.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isWideScreen) {
    return (
      <div className="w-full h-[100vh] bungkusan">
        <div className="bg-white/30 w-full h-full flex justify-center items-center">
          <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            centeredSlides={true}
            effect={"cards"}
            direction={"horizontal"}
            pagination={{ clickable: true, dynamicBullets: true }}
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            loop="true"
            modules={[
              Autoplay,
              Pagination,
              Navigation,
              Keyboard,
              Mousewheel,
              EffectCards,
            ]}
            cardsEffect={{ slideShadows: false }}
            initialSlide={1}
            className="mySwiper"
          >
            {verticalimages.map((item, index) => (
              <SwiperSlide
                key={index}
                className="transition-all duration-3000 hover:blur-none blur-sm cursor-pointer"
              >
                <div className="opacity-0 bg-white/70 infodivisi p-5 text-slate-950">
                  <div className="juduldivisi">
                    <h1 className="text-center ">{item.Judul}</h1>
                  </div>
                  <div className="artidivisi">
                    <p className="text-center">{item.Text}</p>
                  </div>
                </div>
                <div className="bungkusimg">
                  <img src={item.image} alt="Divison" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[100vh] bungkusan">
        <div className=" bg-white/30 w-full h-full flex justify-center items-center">
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            direction={"vertical"}
            navigation={true}
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}

            autoplay={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            // pagination={false}
            centeredSlides={true}
            loop="true"
            modules={[Autoplay, Pagination, Navigation, Keyboard, Mousewheel]}
            className="mySwiper"
          >
            {verticalimages.map((item, index) => (
              <SwiperSlide
                key={index}
                className="transition-all duration-3000 cursor-pointer"
              >
                <div className="bungkusimg">
                  <img src={item.image} alt="Divison" />
                </div>
                <div className="opacity-0 bg-white/70 infodivisi p-5 rounded-2xl">
                  <div className="juduldivisi">
                    <h1 className="text-center">{item.Judul}</h1>
                  </div>
                  <div className="artidivisi">
                    <p className="text-center">{item.Text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Spinner;
