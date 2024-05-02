import React, { useEffect, useState } from "react";
import "./StyleEsports.css";
import Valorant from "../../../Assets/Images/valorant.webp";
import MoleBaru from "../../../Assets/Images/molelogo.webp";
import FormML from "./FormML";
import FormValorant from "./FormValorant";

function Esports() {
  const [countdownML, setCountdownML] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [countdownValorant, setCountdownValorant] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isFormMLAvailable, setIsFormMLAvailable] = useState(false);
  const [isFormValAvailable, setIsFormValAvailable] = useState(false);

  useEffect(() => {
    const targetDateML = new Date(2024, 4, 3); // Emel sbatesnya sampe 1 mei 2024
    const targetDateValorant = new Date(2024, 3, 24); // Valorant sampe 24 April 2024

    // ML Countdown
    const timerML = setInterval(() => {
      const currentTime = new Date();
      const diffML = targetDateML - currentTime;

      if (diffML <= 0) {
        clearInterval(timerML);
        setCountdownML({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        setIsFormMLAvailable(true);
        return;
      }

      updateCountdownML(diffML);
    }, 1000);

    // Valorant Countdown
    const timerValorant = setInterval(() => {
      const currentTime = new Date();
      const diffValorant = targetDateValorant - currentTime;

      if (diffValorant <= 0) {
        clearInterval(timerValorant);
        setCountdownValorant({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        setIsFormValAvailable(true);
        return;
      }

      updateCountdownValorant(diffValorant);
    }, 1000);
    return () => {
      clearInterval(timerML);
      clearInterval(timerValorant);
    };
  }, []);
  function updateCountdownML(diffML) {
    const days = Math.floor(diffML / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffML / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffML / 1000 / 60) % 60);
    const seconds = Math.floor((diffML / 1000) % 60);

    setCountdownML({
      days: days < 10 ? "0" + days : days.toString(),
      hours: hours < 10 ? "0" + hours : hours.toString(),
      minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
      seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
    });
  }

  function updateCountdownValorant(diffValorant) {
    const days = Math.floor(diffValorant / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffValorant / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffValorant / 1000 / 60) % 60);
    const seconds = Math.floor((diffValorant / 1000) % 60);

    setCountdownValorant({
      days: days < 10 ? "0" + days : days.toString(),
      hours: hours < 10 ? "0" + hours : hours.toString(),
      minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
      seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
    });
  }
  return (
    <div className="container-esport">
      <div className="mobilelegend">
        <div className="esport-img-wrapper-mole">
          <img className="mole-image" src={MoleBaru} alt="Mole Logo" />
          <span>Register Here!</span>
        </div>

        <div className="container-time">
          <div className="time">
            <h2>{countdownML.days}</h2>
            <small>Days</small>
          </div>

          <div className="time">
            <h2>{countdownML.hours}</h2>
            <small>Hours</small>
          </div>

          <div className="time">
            <h2>{countdownML.minutes}</h2>
            <small>Minutes</small>
          </div>

          <div className="time">
            <h2>{countdownML.seconds}</h2>
            <small>Seconds</small>
          </div>
        </div>

        <button
          className="bentukbutton2 type1 w-full sm:w-auto md:w-full"
          disabled
        >
          <span className="btn-txt1">FULL</span>
        </button>
      </div>

      <div className="valorant">
        <div className="esport-img-wrapper-valorant">
          <img src={Valorant} alt="Valorant Logo" />
          <span>Register Here!</span>
        </div>

        <div className="container-time">
          <div className="time">
            <h2>{countdownValorant.days}</h2>
            <small>Days</small>
          </div>

          <div className="time">
            <h2>{countdownValorant.hours}</h2>
            <small>Hours</small>
          </div>

          <div className="time">
            <h2>{countdownValorant.minutes}</h2>
            <small>Minutes</small>
          </div>

          <div className="time">
            <h2>{countdownValorant.seconds}</h2>
            <small>Seconds</small>
          </div>
        </div>

        <button
          className="bentukbutton2 type1 w-full sm:w-auto md:w-full"
          disabled
        >
          <span className="btn-txt1">FULL</span>
        </button>
      </div>
    </div>
  );
}

export default Esports;
