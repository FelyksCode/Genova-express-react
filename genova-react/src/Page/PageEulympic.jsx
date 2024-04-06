import React from "react";
import Unify from "../Component/Unify/Unify";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Tujuan from "../Component/Unify/Tujuanunify/Tujuan";
import Tombolunify from "../Component/Unify/Tombolunify/Tombolunify";

import { Fade } from "react-reveal";

function PageEulympic() {
  return (
    <>
      <div>
        <Navbar />
        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={100}>
            <Tujuan />
          </Fade>
        </section>
        <section className="snap-y snap-mandatory overflow-hidden bg">
          <Fade>
            <Unify />
            <Tombolunify />
          </Fade>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default PageEulympic;
