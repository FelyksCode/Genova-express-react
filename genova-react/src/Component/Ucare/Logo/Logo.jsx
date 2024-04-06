import img from "../../../Assets/Rangkaian/Ucare.webp";
import "./Logo.css";

function Logo() {
  return (
    <div className="bungkus flex justify-center">
      <div className="bungkus2 flex justify-between">
        <div className="content-center kotaklogo">
          <img className="logo" src={img} alt="Logo Ucare" />
        </div>
        <div className="content-center w-3/5">
          <h1
            style={{ fontFamily: "Akbaal, sans-serif" }}
            className="judullogoucare text-4xl font-bold mb-5"
          >
            U-care
          </h1>
          <p
            style={{ fontFamily: "Forum-Regular, sans-serif" }}
            className="text-justify"
          >
            Kegiatan yang akan mempersatukan #Legions untuk berkolaborasi serta
            menginspirasi satu sama lain. Dalam tahap ini, U-care mengajak
            #Legions untuk rela berkorban bagi orang lain (Altruistic) dengan
            niat baik (Good-Willed) dalam mencapai kebahagiaan bersama, dengan
            cara aktif terlibat dalam kegiatan sosial. Embark with us on this
            extraordinary journey, where we join to make a positive impact and
            spread goodwill!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
//npm install react-slick --save & npm install slick-carousel --save
