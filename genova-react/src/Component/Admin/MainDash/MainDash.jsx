import React, { useState } from "react";
import Table from "../Table/Table";
import "./MainDash.css";
import { SidebarData, rows } from "../Data/Data";

const MainDash = ({ selectedSection }) => {
  const [tableData, setTableData] = useState([]);

  const updateTableData = (section) => {
    let newData = [];
    if (section === 0) {
      newData = rows;
    } else {
      newData = rows.filter(
        (row) => row.lomba === SidebarData[section].heading
      );
    }
    setTableData(newData);
  };

  React.useEffect(() => {
    updateTableData(selectedSection);
  }, [selectedSection]);

  return (
    <div className="MainDash">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-5">
          {SidebarData[selectedSection].heading}
        </h1>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default MainDash;
