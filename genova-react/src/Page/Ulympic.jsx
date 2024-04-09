import React, { useState, useEffect } from "react";
import "../Component/Ulympic/Ulympic.css";
import Navbar from "../Component/Navbar/Navbar";
import Tujuan from "../Component/Unify/Tujuanunify/Tujuan";
import { Fade } from "react-reveal";
import Footer from "../Component/Footer/Footer";
import UlympicLogo from "../Component/Ulympic/Ulympiclogo";
import ListLomba from "../Component/Ulympic/ListLomba";
import FormUlympic from "../Component/Ulympic/FormUlympic";

function Ulympic() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isFormAvailable, setIsFormAvailable] = useState(false);

  useEffect(() => {
    const targetDate = new Date(2024, 8, 20); // Tanggal 20 Agustus 2024

    const updateCountdown = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      if (diff <= 0) {
        clearInterval(timer);
        setIsFormAvailable(true); // Aktifkan form setelah tanggal 15/04/2024
        return;
      }

      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;

      setCountdown({
        days: d < 10 ? "0" + d : d.toString(),
        hours: h < 10 ? "0" + h : h.toString(),
        minutes: m < 10 ? "0" + m : m.toString(),
        seconds: s < 10 ? "0" + s : s.toString(),
      });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

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

        {/* Menampilkan FormUlympic hanya jika isFormAvailable bernilai true */}
        {isFormAvailable && (
          <section className="mt-2">
            <FormUlympic />
          </section>
        )}
      </section>

      <section className="snap-y snap-mandatory overflow-hidden ">
        <Fade>
          <Footer />
        </Fade>
      </section>
    </div>
  );
}

export default Ulympic;
