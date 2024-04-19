import React from "react";
import "./Ulympic.css";
import img1 from "../../Assets/Rangkaian/Ulympic.webp";

function UlympicLogo() {
  return (
    <div className="bungkus flex justify-center items-center">
      <div className="bungkus2 flex justify-between pb-6">
        <div className="content-center kotaklogo">
          <div className="logoucare">
            <img src={img1} alt="Logo Ulympic" />
          </div>
        </div>
        <div className="content-center w-3/5 desculympic">
        <h1 style={{ fontFamily: "Akbaal, sans-serif" }} className="judullogoulympic text-5xl font-bold mb-10">
          <span style={{ borderBottom: "1px solid black" }}>Ulympic</span>
        </h1>
        <p style={{ fontFamily: "SanFran-Regular, sans-serif" }} className="deskripsiulympic text-xl text-justify mt-6">
          Ulympic adalah rangkaian perlombaan kedua sekaligus penutup perlombaan pada rangkaian kegiatan UMN Festival 2024.
          Akan mempertandingkan turnamen Futsal, Basket, Voli, dan Badminton yang diselenggarakan untuk internal maupun eksternal
          UMN.
        </p>
        <p style={{ fontFamily: "SanFran-Regular, sans-serif" }} className=" deskripsiulympic text-xl text-justify mt-6">
          Ulympic juga akan dilalui bagi #Legions untuk meraih kemenangan, dalam tahap ini akan dipenuhi dengan tantangan yang memerlukan
          keberanian (Valiant) untuk bertarung serta kegigihan (Persistence) dari para #Legions dalam menghadapi pertarungan yang ajaib
          dan penuh dengan kegembiraan!
        </p>
        <p style={{ fontFamily: "SanFran-Regular, sans-serif" }} className=" deskripsiulympic text-xl text-justify mt-6">
          "Join us as we forged ahead, conquering with a valiant spirit and embracing the magical revelry!"
        </p>
        </div>
      </div>
    </div>

  );
}

export default UlympicLogo;
