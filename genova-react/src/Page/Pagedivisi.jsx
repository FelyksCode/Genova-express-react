import React, { useEffect } from "react";
import Alert from "../Component/Alert/Alert";
import Divisi from "../Component/Division/Divisi";
import Navbar from "../Component/Navbar/NavbarDivisi";
import { Fade } from "react-reveal";

function Pagedivisi() {
  useEffect(() => {
    document.title = "UMN Festival | Division";
  }, []);

  return (
    <div>
      <Navbar />
      <section className="snap-y overflow-hidden focus:scroll-auto">
        <Alert />
        <Fade>
          <Divisi />
        </Fade>
      </section>
    </div>
  );
}

export default Pagedivisi;
