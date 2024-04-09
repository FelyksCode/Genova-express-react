import React, { useState } from "react";
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
  // State untuk mengontrol apakah FormUlympic harus ditampilkan atau tidak
  const [showForm, setShowForm] = useState(false);

  // Tanggal yang akan digunakan untuk membandingkan apakah FormUlympic harus ditampilkan
  const targetDate = new Date("2024-04-15");

  // Tanggal hari ini
  const currentDate = new Date();

  // Jika tanggal hari ini adalah tanggal target, maka tampilkan FormUlympic
  if (currentDate.toDateString() === targetDate.toDateString()) {
    setShowForm(true);
  }

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

        {/* Menampilkan FormUlympic hanya jika showForm bernilai true */}
        {showForm && (
          <section className="mt-2">
            <FormUlympic />
          </section>
        )}
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
