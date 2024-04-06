// Admin.jsx
import React, { useState } from "react";
import Sidebar from "../Component/Admin/Sidebar";
import MainDash from "../Component/Admin/MainDash/MainDash";
import axios from "axios";

function Admin() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [response, setResponse] = useState([]);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar
          setSelectedSection={setSelectedSection}
          setResponse={setResponse}
        />
        <MainDash selectedSection={selectedSection} response={response} />
      </div>
    </div>
  );
}

export default Admin;
