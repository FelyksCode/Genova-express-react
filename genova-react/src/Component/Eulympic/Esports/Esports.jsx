import React, { useEffect, useState } from "react";
import "./StyleEsports.css";
import Valorant from "../../../Assets/Images/valorant.webp";
import Mole from "../../../Assets/Images/mole.webp";
import FormML from "./FormML";
import FormValorant from "./FormValorant";

function Esports() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isFormAvailable, setIsFormAvailable] = useState(false);

  useEffect(() => {
    const targetDate = new Date(2024, 3, 15); // Tanggal 15 April 2024

    const updateCountdown = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      if (diff <= 0) {
        clearInterval(timer);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        setIsFormAvailable(true); // Aktifkan form setelah tanggal 10/04/2024
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
    <div className="container-esport">
      <div className="mobilelegend">
        <div className="esport-img-wrapper">
          <img src={Mole} alt="Mole Logo" />
        </div>

        <div className="container-time">
          <div className="time">
            <h2>{countdown.days}</h2>
            <small>Days</small>
          </div>

          <div className="time">
            <h2>{countdown.hours}</h2>
            <small>Hours</small>
          </div>

          <div className="time">
            <h2>{countdown.minutes}</h2>
            <small>Minutes</small>
          </div>

          <div className="time">
            <h2>{countdown.seconds}</h2>
            <small>Seconds</small>
          </div>
        </div>

        {isFormAvailable && <FormML />}
      </div>

      <div className="valorant">
        <div className="esport-img-wrapper">
          <img src={Valorant} alt="Valorant Logo" />
        </div>

        <div className="container-time">
          <div className="time">
            <h2>{countdown.days}</h2>
            <small>Days</small>
          </div>

          <div className="time">
            <h2>{countdown.hours}</h2>
            <small>Hours</small>
          </div>

          <div className="time">
            <h2>{countdown.minutes}</h2>
            <small>Minutes</small>
          </div>

          <div className="time">
            <h2>{countdown.seconds}</h2>
            <small>Seconds</small>
          </div>
        </div>

        {isFormAvailable && <FormValorant />}
      </div>
    </div>
  );
}

export default Esports;
