// Unify.jsx
import React from "react";
import "./StyleEulympic.css";
import LogoEulympic from "../../../Assets/Rangkaian/E-Ulympic.webp";

function Eulympic() {
  return (
    <div className="bg-Eulympic">
      <div className="Eulympic-section">
        {/* Logo Section */}
        <div className="logo-section">
          {/* UNIFY logo with blue winged emblem */}
          <img src={LogoEulympic} alt="E-Ulympic Logo" />
        </div>

        {/* Explanation Section */}
        <div className="explanation-section1 p-6 text-center md:text-start">
          {/* Add your explanatory content here */}
          <h1>E-ulympic</h1>
          <p>
            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 merupakan kegiatan yang bertujuan untuk menanamkan dan
            meningkatkan jiwa kompetitif para #Legions melalui e-sports! 🗡️💫👸🏻
            E-Ulympic dapat menjadi wadah bagi seluruh mahasiswa/i untuk
            menunjukan bakat dan skill dalam turnamen e-sports! 🔥✨
            <br />
            <br />
            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 💫 mengajak #Legions untuk berani mengambil resiko
            (Daring) dalam menghadapi tantangan baru (Adventurous) ✨🗡️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Eulympic;
