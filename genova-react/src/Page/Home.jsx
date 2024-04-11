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
  // NOTE: Sementara di false (ga bakal intro)
  const [showIntro, setShowIntro] = useState(false);

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
    // Set showIntro false
    setShowIntro(false);

    // Set a flag in localStorage indicating that intro has been shown
    localStorage.setItem("introShown", "true");
  };

  return (
    <>
      {showIntro ? (
        <Intro onIntroEnd={handleIntroEnd} />
      ) : // <div className="text-blue-500">no intro</div>
      null}
      <div>
        <Navbar />
        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={5}>
            <Tujuan />
          </Fade>
        </section>
        <section className="snap-y snap-mandatory overflow-hidden">
          <Fade duration={5}>
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
