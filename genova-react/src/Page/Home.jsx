import React, { useState, useEffect } from "react";
import Divisihome from "../Component/Home/Divisihome";
import Intro from "../Component/Home/Intro";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has been shown before
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
        <div className="text-blue-500">no intro</div>
      )}

      {/* <Divisihome /> */}
    </>
  );
}

export default Home;
