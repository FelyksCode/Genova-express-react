import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../Assets/LogoDivisi_Baru/Website.webp";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Admin/Data/Data";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Sidebar = ({ setSelectedSection, setResponse }) => {
  const [expanded, setExpanded] = useState(true);

  const handleMenuItemClick = async (index) => {
    setSelectedSection(index);

    const url = process.env.REACT_APP_URL_BE;
    const port = process.env.REACT_APP_PORT;

    try {
      const res = await axios.get(`${url}:${port}/team`);

      // Ensure you're accessing the teams array correctly from the response
      const detailedDataPromises = res.data.teams.map(async (team) => {
        const resDetail = await axios.get(`${url}:${port}/team/${team._id}`);
        return { ...team, ...resDetail.data }; // Correctly merge the team info
      });

      let newData = await Promise.all(detailedDataPromises);

      switch (index) {
        case 0: // All Regis
          break;

        case 1: // Voli
          newData = newData.filter(
            (team) => team.data.races.race_name === "Ulympic - Volly"
          );
          break;

        case 2: // Basket
          newData = newData.filter(
            (team) => team.data.races.race_name === "Ulympic - Basket"
          );
          break;

        case 3: // Badmin Putra Ganda
          newData = newData.filter(
            (team) =>
              team.data.races.race_name === "Ulympic - Badminton (Ganda Putra)"
          );
          break;

        case 4: // Badmin Campur Ganda
          newData = newData.filter(
            (team) =>
              team.data.races.race_name ===
              "Ulympic - Badminton (Ganda Campuran)"
          );
          break;

        case 5: // Futsal
          newData = newData.filter(
            (team) => team.data.races.race_name === "Ulympic - Futsal"
          );
          break;
        case 6: // Valorant
          newData = newData.filter(
            (team) => team.data.races.race_name === "E-Ulympic - Valorant"
          );
          break;

        case 7: // Mobile Legends
          newData = newData.filter(
            (team) => team.data.races.race_name === "E-Ulympic - Mobile Legends"
          );
          break;

        default: // Default All
          break;
      }

      console.log("newData: ", newData);

      if (setResponse) setResponse(newData);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  return (
    <>
      <motion.div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </motion.div>
      <AnimatePresence>
        <motion.div
          className="sidebar"
          initial={{ left: "-60%" }}
          animate={{ left: expanded ? "0%" : "-60%" }}
          exit={{ left: "-60%" }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <a className="logoGenova" href="/">
            <img src={Logo} alt="logo" />
            <span className="textAdmin">Admin Ufest</span>
          </a>

          <div className="menu">
            {SidebarData.map((item, index) => (
              <div
                className="menuItem"
                key={index}
                onClick={() => handleMenuItemClick(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            ))}
            <div className="menuItem" onClick={handleLogout}>
              <UilSignOutAlt />
              <span>Logout</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
