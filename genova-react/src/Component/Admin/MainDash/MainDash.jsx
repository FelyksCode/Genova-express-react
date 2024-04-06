import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import "./MainDash.css";
import { SidebarData, rows } from "../Data/Data";
import axios from "axios";

const MainDash = ({ selectedSection, response }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const updateTableData = async () => {
      let basicData = [];
      if (response) {
        basicData = response;
      }
      setTableData(basicData);
    };

    // Call the update function
    updateTableData();
  }, [selectedSection, response]);

  return (
    <div className="MainDash">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-5 sm:text-center md:text-left lg:text-center">
          {SidebarData[selectedSection].heading}
        </h1>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default MainDash;
