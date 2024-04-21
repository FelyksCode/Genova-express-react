// Unify.jsx
import React from "react";
import "./Unifyy.css";
import Unifyy from "../../Assets/Rangkaian/Unify.webp";

function Unify() {
  return (
    <div className="bg">
      <div className="unify-section">
        {/* Logo Section */}
        <div className="logo-section content-center">
          {/* UNIFY logo with blue winged emblem */}
          <div className="logo-radius">
            <img src={Unifyy} alt="UNIFY Logo" />
          </div>
        </div>

        {/* Explanation Section */}
        <div className="explanation-section">
          {/* Add your explanatory content here */}
          <h1>
            <span style={{ borderBottom: "1px solid black" }}>Unify</span>
          </h1>
          <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
            𝐔𝐍𝐈𝐅𝐘 merupakan puncak serta kegiatan penutup dari segala rangkaian
            acara yang telah dilalui oleh #Legions!.
            <br></br>
            <br></br>
            Tidak hanya itu, Unify juga menjadi perayaan ulang tahun Universitas
            Multimedia Nusantara yang ke-18. Unify mengajak para #Legions yang
            telah melalui kegiatan ini dengan merayakan seluruh rangkaian
            kegiatan ini dengan menyatakan dedikasi #Legions untuk berkembang
            (Thrive) melalui seluruh kegiatan UMN Festival 2024!
          </p>
        </div>
      </div>
      <div className="footer-line"></div>
    </div>
  );
}

export default Unify;
