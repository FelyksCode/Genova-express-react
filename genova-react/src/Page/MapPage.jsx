import MapVid from "../Component/Maps/Maps";
import MapsReact from "../Component/Maps/MapsReact";
import Navbar from "../Component/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

function MapPage() {
  useEffect(() => {
    document.title = "UMN Festival | Rangkaian";
  }, []);

  const [showMapVid, setShowMapVid] = useState(true);

  const handleVideoEnd = () => {
    setShowMapVid(false);
  };

  return (
    <>
      <Navbar />
      <section className="snap-y overflow-y-scroll overflow-x-hidden focus:scroll-auto">
        {showMapVid ? (
          <Fade>
            <MapVid onVideoEnd={handleVideoEnd} />
          </Fade>
        ) : (
          <Fade duration={5000}>
            <MapsReact />
          </Fade>
        )}
      </section>
    </>
  );
}

export default MapPage;
