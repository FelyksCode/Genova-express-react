import React from "react";
import Sidebar from "../Component/Admin/Sidebar";
import MainDash from "../Component/Admin/MainDash/MainDash";
import RightSide from "../Component/Admin/RigtSide/RightSide";

function Admin() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Admin;