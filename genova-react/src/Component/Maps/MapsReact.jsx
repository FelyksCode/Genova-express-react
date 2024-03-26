import React from "react";

//Asset
import img1 from "../../Assets/Rangkaian/Unify.png";
import img2 from "../../Assets/Rangkaian/Ucare.png";
import img3 from "../../Assets/Rangkaian/Unveiling.png";
import img4 from "../../Assets/Rangkaian/Ulympic.png";
import img5 from "../../Assets/Rangkaian/E-Ulympic.png";
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
          <div className="md:bg-maps bg-cover bg-mobile w-screen md:bg-center z-5 md:h-screen">
            <Fade clear duration={2000}>
              <div className="flex justify-between items-center h-full flex-col">
                <div className="md:flex ml-[100px] mt-4 md:mr-10">
                  <div className="tooltip tooltip-bottom transition-all duration-200 ease-in-out md:hover:w-[220px] md:mr-[60px] md:w-[200px] w-[140px] hover:w-[160px] md:mt-5 mt-[160px] mr-[-60px]" data-tip="UNIFY">
                    <img src={img1} alt="Image 1" />   
                  </div>
                  <div className='tooltip tooltip-bottom transition-all duration-200 ease-in-out md:mt-[70px] md:mr-[170px] md:ml-[70px] ml-[100px] md:hover:w-[220px] md:w-[200px] w-[140px] hover:w-[160px] mb-[-120px]' data-tip="U-CARE">
                    <img src={img2} alt="Image 2" />
                  </div>
                </div>
                <div className="md:flex  md:mt-[10px]">
                  <div className='tooltip tooltip-bottom transition-all duration-200 ease-in-out md:hover:w-[220px] md:w-[200px] ml-[100px] mr-[200px] md:mr-[410px] w-[140px] hover:w-[160px]' data-tip="UNVEILING">
                    <img src={img3} alt="Image 3" />
                  </div>
                  <div className='tooltip tooltip-bottom transition-all duration-200 ease-in-out md:hover:w-[220px] md:w-[200px] w-[140px] hover:w-[160px] md:mr-[230px] ml-[100px] md:-mt-10 md:ml-0 mt-10' data-tip="ULYMPIC">
                    <img src={img4} alt="Image 4" />
                  </div>
                </div>
                <div className="md:flex md:mr-[480px] md:mb-20 mr-[-240px] mt-[-100px] mb-20">
                  <div className='tooltip tooltip-bottom transition-all duration-200 ease-in-out md:hover:w-[320px] md:w-[300px] w-[240px] hover:w-[260px]' data-tip="E-ULYMPIC">
                    <img src={img5} alt="Image 5" />
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
