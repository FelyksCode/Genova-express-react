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
          <div className="container-title">
            <div className="underlineTitle">
              <h1 className="title-eulympic">E-ulympic</h1>
            </div>
          </div>
          <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 merupakan rangkaian perlombaan pertama dari UMN Festival 2024. E-Ulympic akan mempertandikan dua permainan E-sports yang banyak di gemari yaitu Valorant dan Mobile Legends.
            <br />
            <br />
            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga memiliki tujuan yaitu menanamkan dan meningkatkan jiwa kompetitif para #Legions melalui turnamen E-Sports! Diharapkan E-Ulympic dapat menjadi wadah bagi seluruh mahasiswa/i untuk menunjukan bakat dan talenta mereka dalam dunia E-Sports! 
          </p>
        </div>
      </div>
      <hr className="custom-hr"/>
    </div>
  );
}

export default Eulympic;
