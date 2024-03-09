import React from "react";
import Alert from "../Component/Alert/Alert";
import Divisi from "../Component/Division/Divisi";
import Navbar from "../Component/Navbar/Navbar";
import { Fade } from "react-reveal";

function Pagedivisi() {
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
