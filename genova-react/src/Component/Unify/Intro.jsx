import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

function Intro({ onIntroEnd }) {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const videoUrl = require("../../Assets/Videos/introoprec.webm");

  const handleVideoEnd = () => {
    onIntroEnd();
  };

  const handlePlayButtonClick = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    if (videoPlayed) {
      const fadeOutTimer = setTimeout(() => {
        setShowIntro(false);
      }, 10000);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [videoPlayed]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full overflow-hidden z-50 flex justify-center items-center bg-black transition-opacity ${
        showIntro
          ? "opacity-100 transition-opacity duration-100 ease-in"
          : "opacity-0"
      }`}
    >
      <Fade>
        <video
          className={`w-full h-full object-cover ${
            videoPlayed ? "block" : "hidden"
          } `}
          autoPlay
          playsInline
          muted
          onEnded={handleVideoEnd}
          onPlay={() => setVideoPlayed(true)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Fade>

      {/* Play button */}
      {!videoPlayed && (
        <Fade>
          <button
            className="bg-white text-black font-bold py-4 px-4 rounded animate-bounce"
            onClick={handlePlayButtonClick}
          >
            PLAY
          </button>
        </Fade>
      )}
    </div>
  );
}

export default Intro;
