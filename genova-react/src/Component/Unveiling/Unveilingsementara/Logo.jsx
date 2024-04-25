import img from "../../../Assets/Rangkaian/Unveiling.webp";
import "./Logo.css";

function unveilingsementara() {
  return (
    <div className="bungkus flex flex-col justify-center items-center md:my-10 my-20">
      <div className="bungkus2 flex justify-between pb-6 my-8">
        <div className="content-center kotaklogo py-8">
          <div className="logoucare">
            <img src={img} alt="Logo Unveiling" />
          </div>
        </div>
        <div className="content-center w-3/5 textucare">
          <h1
            style={{ fontFamily: "Akbaal, sans-serif" }}
            className="judullogoucare text-5xl font-bold mb-10"
          >
            <span style={{ borderBottom: "1px solid black" }}>Unveiling</span>
          </h1>
          <p
            style={{ fontFamily: "SanFran-Regular, sans-serif" }}
            className="isilogoucare text-xl text-justify mt-6"
          >
            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN Festival 2024!
            Didesain untuk memperkenalkan seluruh agenda festival kepada
            masyarakat Universita Multimedia Nusantara!
          </p>
          <p
            style={{ fontFamily: "SanFran-Regular, sans-serif" }}
            className="isilogoucare text-xl text-justify mt-6"
          >
            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk mengenal lebih
            dalam tentang UMN Festival 2024 (Curiosity) dan juga meningkatkan
            semangat para #Legions untuk menyambut UMN Festival 2024
            (Enthusiastic)!
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col w-full ">
        {/* <button className="tombol mb-10 w-2/4 self-center">
          <a href="https://forms.gle/6R9D1JdEUbACJVj69" target="_blank">
            Regular Form
          </a>
        </button> */}
      </div>
    </div>
  );
}

export default unveilingsementara;
//npm install react-slick --save & npm install slick-carousel --save
