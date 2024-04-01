// Admin.jsx
import React, { useState } from "react";
import Sidebar from "../Component/Admin/Sidebar";
import MainDash from "../Component/Admin/MainDash/MainDash";

function Admin() {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar setSelectedSection={setSelectedSection} />
        <MainDash selectedSection={selectedSection} />
      </div>
    </div>
  );
}

export default Admin;
