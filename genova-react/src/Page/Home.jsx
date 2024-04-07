import React, { useState, useEffect } from "react";
import Divisihome from "../Component/Home/Divisihome/Divisihome";
import Rangkaian from "../Component/Home/Rangkaian/Rangkaian";
import Intro from "../Component/Home/Intro";
import Navbar from "../Component/Navbar/Navbar";
import Tujuan from "../Component/Tujuan/Tujuan";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
// import Bracket from "../Component/Home/Callonge/Bracket";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has been shown before
    document.title = "UMN Festival | Home";
    const introShownBefore = localStorage.getItem("introShown");
    if (introShownBefore) {
      // If intro has been shown before, hide it
      setShowIntro(false);
    }
  }, []);

  const handleIntroEnd = () => {
    // Set a flag in localStorage indicating that intro has been shown
    localStorage.setItem("introShown", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onIntroEnd={handleIntroEnd} />
      ) : (
        // <div className="text-blue-500">no intro</div>
        <div className=""></div>
      )}
      <div>
        <Navbar />
        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={10}>
            <Tujuan />
          </Fade>
        </section>
        <section className="snap-y snap-mandatory overflow-hidden">
          <Fade duration={10}>
            <Divisihome />
            <Rangkaian />
            {/* <Bracket /> */}
            <Footer />
          </Fade>
        </section>
      </div>
    </>
  );
}

export default Home;
