import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Tujuan from "../Component/Tujuan/Tujuan";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
import Logo from "../Component/Unveiling/unveilingLogo";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={100}>
            <Tujuan />
          </Fade>
        </section>
        <section className="snap-y snap-mandatory overflow-hidden">
          <Fade>
            <Logo />
          </Fade>
        </section>
        <Footer />
      </div>
    </>
  );
}
//npm install react-slick --save & npm install slick-carousel --save
export default Home;
