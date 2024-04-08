import React, { useRef, useState } from "react";
import { Fade } from "react-reveal";
import MapsVid from "../../Assets/Map/Bg_Maps_Ufest.mov";
import UfestLogo from "../../Assets/Images/UfestLogo.webp";

function Maps({ onVideoEnd }) {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  const handleVideoEnd = () => {
    const intervalId = setInterval(() => {
      setVideoOpacity((prevOpacity) => {
        const newOpacity = prevOpacity - 0.1;
        if (newOpacity <= 0) {
          clearInterval(intervalId);
          if (onVideoEnd) {
            onVideoEnd();
          }
        }
        return newOpacity;
      });
    }, 100);
  };

  return (
    <Fade duration={2000}>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <video
          className="w-full h-full object-cover z-10"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          ref={videoRef}
          style={{ opacity: videoOpacity }}
        >
          <source src={MapsVid} />
        </video>
        <Fade bottom>
          <h1
            className="font-custom absolute top-2/2 left-2/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-black text-4xl font-extrabold"
            onEnded={handleVideoEnd}
            style={{ opacity: videoOpacity }}
          >
            <img src={UfestLogo} className="w-60" />
          </h1>
        </Fade>
      </div>
    </Fade>
  );
}

export default Maps;
