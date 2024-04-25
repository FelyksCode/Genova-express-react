import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import ImageUnveiling from "../Component/Unveiling/ImageUnveiling";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
// import Logo from "../Component/Unveiling/unveilingLogo";
import Unveilingsementara from "../Component/Unveiling/Unveilingsementara/Logo";
function Unveiling() {
  return (
    <>
      <div>
        <Navbar />
        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={100}>
            <ImageUnveiling />
          </Fade>
        </section>
        <section className="snap-y snap-mandatory overflow-hidden isiucare py-20">
          <Fade>
            <Unveilingsementara />
          </Fade>
        </section>
        <Footer />
      </div>
    </>
  );
}
//npm install react-slick --save & npm install slick-carousel --save
export default Unveiling;
