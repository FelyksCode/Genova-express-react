import React from "react";

//Asset
import img1 from "../../Assets/LogoDivisi_Baru/Acara.png";
import img2 from "../../Assets/LogoDivisi_Baru/BPH.png";
import img3 from "../../Assets/LogoDivisi_Baru/Dekorasi.png";
import img4 from "../../Assets/LogoDivisi_Baru/Dokumentasi.png";
import img5 from "../../Assets/LogoDivisi_Baru/FreshMoney.png";
import CloudVid from "../../Assets/Map/cloud.mp4";
import "../../App.css";
import { Fade } from "react-reveal";

function MapsReact() {
  return (
    <>
      <Fade clear>
        <div className="flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            src={CloudVid}
            className="absolute top-0 left-0 z-5 w-full h-full object-cover blend-overlay"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></video>
          <div className="bg-maps md:bg-cover bg-scroll h-[140vh] w-full md:bg-center z-5">
            <Fade clear duration={2000}>
              <div className="relative justify-center items-center">
                <div className="flex justify-center">
                  <div
                    className="tooltip tooltip-bottom  md:lg:mt-[210px] mr-[130px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                    data-tip="UNIFY"
                  >
                    <img src={img1} />
                  </div>
                  <div
                    className="tooltip tooltip-bottom md:lg:mt-[280px] mr-[120px] ml-[100px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                    data-tip="U-CARE"
                  >
                    <img src={img2} />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    className="tooltip tooltip-bottom mt-[140px] mr-[430px] ml-[-100px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                    data-tip="UNVEILING"
                  >
                    <img src={img3} />
                  </div>
                  <div
                    className="tooltip tooltip-bottom mt-[120px] ml-[160px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                    data-tip="ULYMPIC"
                  >
                    <img src={img4} />
                  </div>
                </div>
                <div className="flex">
                  <div
                    className="tooltip tooltip-bottom mt-[120px] ml-[345px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                    data-tip="E-ULYMPIC"
                  >
                    <img src={img5} />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default MapsReact;
