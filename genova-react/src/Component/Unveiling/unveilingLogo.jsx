import logo from "../../Assets/Rangkaian/Unveiling.png";
import React from "react";
import "./unveilingLogo.css";

function Logo() {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-orange-400">
      <div className="content flex flex-col items-center py-8 lg:flex-row lg:justify-evenly xl:items-start lg:py-16">
        <div className="unveiling-logo mb-8 px-4 bg-white rounded-2xl lg:mb-0 lg:py-5">
          <img
            className="w-56 sm:w-72 lg:w-80 xl:w-96"
            src={logo}
            alt="Unveiling"
          />
        </div>
        <div className="unveiling-details lg:mt-4">
          <h1 className="text-center font-bold text-4xl sm:text-5xl sm:py-5 lg:text-5xl">
            Unveiling
          </h1>
          <p className="bg-white rounded-2xl w-[250px] text-sm sm:w-[500px] xl:w-[800px] xl:text-lg mt-5 px-8 pt-5 pb-5 lg:mb-10">
            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN Festival 2024!
            🗡️💫👸🏻 Didesain untuk memperkenalkan seluruh agenda festival kepada
            masyarakat Universitas Multimedia Nusantara! 🔥✨ UNVEILING
            menciptakan keinginan para #Legions untuk mengenal lebih dalam
            tentang UMN Festival 2024 (Curiosity) dan juga meningkatkan semangat
            para #Legions untuk menyambut UMN Festival 2024
            (Enthusiastic)!👸🏻🗡️💫 Join us, to kickstart the excitement, and
            witness what UMN Festival 2024 has prepared for you!🗡️❤️‍🔥🤴🏻💫
          </p>
        </div>
      </div>
      <div className="joinUs">
        <center>
          <button className="rounded-xl bg-white border-4 border-black my-10 px-12 py-6 text-3xl font-bold text-yellow-400 hover:bg-zinc-900 sm:px-16 sm:py-8 sm:text-5xl lg:px-24 lg:py-12">
            Join Us!
          </button>
        </center>
      </div>
    </div>
  );
}

export default Logo;