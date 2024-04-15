// Unify.jsx
import React from "react";
import "./Unifyy.css";
import Unifyy from "../../Assets/Rangkaian/Unify.webp";

function Unify() {
  return (
    <div className="bg">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-container">
          {/* UNIFY logo with blue winged emblem */}
          <img src={Unifyy} alt="UNIFY Logo" />
        </div>

        {/* Explanation Section */}
        <div className="explanation-container">
          {/* Add your explanatory content here */}
          <div className="explanation-box">
            <h1>UNIFY</h1>
            <p>
              𝐔𝐍𝐈𝐅𝐘 merupakan puncak dan juga kegiatan penutup dari segala
              rangkaian acara yang telah dilalui oleh #Legions! Tidak hanya itu,
              𝐔𝐍𝐈𝐅𝐘 juga menjadi perayaan ulang tahun Universitas Multimedia
              Nusantara 𝐔𝐍𝐈𝐅𝐘 mengajak para #Legions yang telah melalui kegiatan
              ini dengan merayakan seluruh dedikasi yang telah diberikan oleh
              #Legions untuk berkembang (Thrive) melalui seluruh kegiatan UMN
              Festival 2024!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unify;
