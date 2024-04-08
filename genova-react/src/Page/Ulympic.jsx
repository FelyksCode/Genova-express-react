import React from "react";
import "../Component/Ulympic/Ulympic.css";
import Navbar from "../Component/Navbar/Navbar";
import Tujuan from "../Component/Unify/Tujuanunify/Tujuan";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
// import Bracket from "../Component/Home/Callonge/Bracket";
import UlympicLogo from "../Component/Ulympic/Ulympiclogo";
import ListLomba from "../Component/Ulympic/ListLomba";
import FormUlympic from "../Component/Ulympic/FormUlympic";
function Ulympic() {
  return (
    <div>
      <Navbar />
      <section className="snap-y overflow-hidden focus:scroll-auto">
        <Fade duration={100}>
          <Tujuan />
        </Fade>
      </section>

      <section className="ulympic snap-y snap-mandatory overflow-hidden">
        <Fade duration={2000}>
          <UlympicLogo />

          <section className="snap-y snap-mandatory overflow-hidden">
            <Fade duration={2000}>
              <ListLomba />
            </Fade>
          </section>
        </Fade>

        <section className="mt-2">
          <FormUlympic />
        </section>
      </section>

      <section className="snap-y snap-mandatory overflow-hidden ">
        <Fade>
          {/* <Bracket /> */}
          <Footer />
        </Fade>
      </section>
    </div>
  );
}

export default Ulympic;
