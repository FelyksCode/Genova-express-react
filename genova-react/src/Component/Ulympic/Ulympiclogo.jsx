import React from "react";
import "./Ulympic.css";
import img1 from "../../Assets/Rangkaian/Ulympic.webp";
import img2 from "../../Assets/Images/UfestLogo.webp";

function UlympicLogo() {
  return (
    <div className=" kartukecil mx-auto justify-center flex flex-col xl:flex-row md:flex-row items-center overflow-hidden">
      <div className="kartu">
        <div className="kartu-inner flex justify-center">
          <div className="kartu-front flex justify-center items-center">
            <img src={img1} alt="Logo" className="logo-image" />
          </div>
          <div className="kartu-back flex justify-center items-center">
            <img src={img2} alt="Logo" className="logo-image1" />
          </div>
        </div>
      </div>
      <div className="descUlympic h-500 rounded-lg shadow-lg">
        <p className="font p-5">
          𝐔𝐋𝐘𝐌𝐏𝐈𝐂 merupakan kegiatan yang akan dilalui bagi #Legions untuk
          meraih kemenangan 🗡️🔥 Dalam tahap ini akan dipenuhi tantangan yang
          memerlukan keberanian (Valiant) untuk bertarung serta kegigihan
          (Persistence) dari para #Legions dalam menghadapi pertarungan yang
          ajaib dan penuh dengan kegembiraan! 🤴🏻👸🏻✨ Join us as we forge ahead,
          conquering with a valiant spirit and embracing the magical revelry!
          🌟🏆❤️‍🔥
        </p>
      </div>
    </div>
  );
}

export default UlympicLogo;
