// Unify.jsx
import React from "react";
import "./Unifyy.css";
import Unifyy from "../../Assets/Rangkaian/Unify.png";

function Unify() {
  return (
    <div className="bg">
      <div className="unify-section">
        {/* Logo Section */}
        <div className="logo-section">
          {/* UNIFY logo with blue winged emblem */}
          <img src={Unifyy} alt="UNIFY Logo" />
        </div>

        {/* Explanation Section */}
        <div className="explanation-section">
          {/* Add your explanatory content here */}
          <h1>UNIFY</h1>
          <p>
            Unify adalah tahap terakhir sekaligus menjadi puncak perayaan yang
            akan menutup perjuangan panjang para Sparta dalam melewati seluruh
            rangkaian kegiatan UMN Festival 2024. Unify juga akan menjadi puncak
            acara UMN Festival untuk merayakan ulang tahun UMN yang ke-18 pada
            tahun ini. Nilai "Willingness" diangkat sebagai bentuk apresiasi
            atas kerja keras seluruh Sparta yang berhasil menyempurnakan seluruh
            nilai-nilai pada setiap rangkian UMN Festival sehingga kepribadian
            seorang Spartan sejati dapat diperoleh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unify;
