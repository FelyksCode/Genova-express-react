import logo from "../../Assets/Rangkaian/Unveiling.webp";
import React from "react";
import "./unveilingLogo.css";

function Logo() {
  return (
    <div className="outer">
      <div className="content flex flex-col items-center py-8 lg:flex-row lg:justify-evenly xl:items-start lg:py-16">
        <div className="unveiling-logo mt-12 mb-8 px-4 bg-white py-5 rounded-full lg:mb-0">
          <img
            className="w-48 sm:w-64 lg:w-72 xl:w-80"
            src={logo}
            alt="Unveiling"
          />
        </div>
        <div className="unveiling-details lg:mt-4">
          <h1 className="text-center font-bold text-4xl sm:text-5xl sm:py-5 lg:text-5xl">
            Unveiling
          </h1>
          <p className="rounded-2xl w-[250px] text-sm sm:w-[500px] xl:w-[700px] xl:text-lg mt-2 px-8 pt-5 pb-3">
            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN Festival 2024!
            Didesain untuk memperkenalkan seluruh agenda festival kepada
            masyarakat Universitas Multimedia Nusantara!
          </p>
          <p className="rounded-2xl w-[250px] text-sm sm:w-[500px] xl:w-[700px] xl:text-lg mt-2 px-8 pt-5 pb-3">
            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk mengenal lebih
            dalam tentang UMN Festival 2024 (Curiosity) dan juga meningkatkan
            semangat para #Legions untuk menyambut UMN Festival 2024
            (Enthusiastic)!
          </p>
          <p className="rounded-2xl w-[250px] text-sm sm:w-[500px] xl:w-[700px] xl:text-lg mt-2 px-8 pt-5 pb-3">
            Join us, to kickstart the excitement, and witness what UMN Festival
            2024 has prepared for you!
          </p>
        </div>
      </div>
      <hr className="w-4/5 mx-auto mb-10 border-gray-800" />
      <div className="flex justify-center flex-col w-full">
        <button className="tombol mb-10 self-center">
          <a href="https://forms.gle/6R9D1JdEUbACJVj69" target="_blank">
            Regular
          </a>
        </button>
      </div>
    </div>
  );
}

export default Logo;
