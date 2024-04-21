import img from "../../../Assets/Rangkaian/Ucare.webp";
import "./Logo.css";

function Logo() {
  return (
    <div className="bungkus flex justify-center items-center my-8">
      <div className="bungkus2 flex justify-between pb-6 my-2">
        <div className="content-center kotaklogo py-6">
          <div className="logoucare">
            <img src={img} alt="Logo Ucare" />
          </div>
        </div>
        <div className="content-center w-3/5 textucare">
          <h1
            style={{ fontFamily: "Akbaal, sans-serif" }}
            className="judullogoucare text-5xl font-bold mb-10 pb-2"
          >
            <span style={{ borderBottom: "1px solid black" }}>U-Care</span>
          </h1>
          <p
            style={{ fontFamily: "SanFran-Regular, sans-serif" }}
            className="isilogoucare text-xl text-justify mt-6"
          >
            𝐔-𝐂𝐀𝐑𝐄 merupakan kegiatan yang akan mempersatukan #Legions untuk
            berkolaborasi serta menginspirasi satu sama lain.
          </p>
          <p
            style={{ fontFamily: "SanFran-Regular, sans-serif" }}
            className="isilogoucare text-xl text-justify mt-6"
          >
            Dalam tahap ini, 𝐔-𝐂𝐀𝐑𝐄 mengajak #Legions untuk mau berkorban dan
            memberikan bantuan kepada orang lain (Altruistic) serta dengan niat
            baik (Good-Willed) dalam mencapai kebahagiaan bersama, dengan cara
            aktif terlibat dalam kegiatan sosial.
          </p>
          <p
            style={{ fontFamily: "SanFran-Regular, sans-serif" }}
            className="isilogoucare text-xl text-justify mt-6"
          >
            "Embark with us on this extraordinary journey, where we join forces
            to make a positive impact and spread goodwill!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
//npm install react-slick --save & npm install slick-carousel --save
