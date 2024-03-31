import React, { useState, useEffect } from "react";
import Sidebar from "../Component/Admin/Sidebar";
import MainDash from "../Component/Admin/MainDash/MainDash";
import RightSide from "../Component/Admin/RigtSide/RightSide";

function Admin() {
  const [races, setRaces] = useState([]);

  async function getRaceApi() {
    // Get races api
    try {
      const response = await fetch("http://localhost:8090/race");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRaces(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getRaceApi();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="flex flex-col">
          {races.map((race) => (
            <MainDash raceId={race._id} raceName={race.race_name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
