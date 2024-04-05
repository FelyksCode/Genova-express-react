import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../Assets/LogoDivisi_Baru/Website.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Admin/Data/Data";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ setSelectedSection }) => {
  const [expanded, setExpanded] = useState(true);

  const handleMenuItemClick = (index) => {
    setSelectedSection(index);
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
          <div className="logoGenova">
            <img src={Logo} alt="logo" />
            <span className="textAdmin">Admin Ufest</span>
          </div>

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
            <div className="menuItem">
              <UilSignOutAlt />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
