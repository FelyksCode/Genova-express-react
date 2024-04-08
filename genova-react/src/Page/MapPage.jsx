import MapVid from "../Component/Maps/Maps";
import MapsReact from "../Component/Maps/MapsReact";
import Navbar from "../Component/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

function MapPage() {
  useEffect(() => {
    document.title = "UMN Festival | Rangkaian";

    // Periksa sessionStorage apakah pengguna telah melihat video sebelumnya di sesi saat ini
    const hasSeenVideo = sessionStorage.getItem("hasSeenVideo");
    if (hasSeenVideo) {
      // Jika pengguna telah melihat video di sesi saat ini, set showMapVid menjadi false
      setShowMapVid(false);
    }
  }, []);

  const [showMapVid, setShowMapVid] = useState(true);

  const handleVideoEnd = () => {
    // Set showMapVid menjadi false saat video selesai
    setShowMapVid(false);

    // Simpan status bahwa pengguna telah melihat video di sesi saat ini ke sessionStorage
    sessionStorage.setItem("hasSeenVideo", true);
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
