import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Tujuan from "../Component/Unify/Tujuanunify/Tujuan";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
import Logo from "../Component/Ucare/Logo/Logo";
import Panti from "../Component/Ucare/DaftarPanti/DaftarPanti";
import Tombol from "../Component/Ucare/Button/Button";

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
        <section className="snap-y snap-mandatory overflow-hidden isiucare">
          <Fade>
            <Logo />
            <Panti />
            <Tombol />
          </Fade>
        </section>
        <Footer />
      </div>
    </>
  );
}
//npm install react-slick --save & npm install slick-carousel --save
export default Home;
