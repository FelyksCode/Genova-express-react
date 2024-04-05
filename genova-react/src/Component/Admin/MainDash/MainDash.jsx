import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import "./MainDash.css";
import { SidebarData, rows } from "../Data/Data";
import axios from "axios";

const MainDash = ({ selectedSection, response }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // Define a function to update the table data based on the selected section
    const updateTableData = async () => {
      let newData = [];

      // If there is a response and it has a users property
      if (response && response.teams) {
        if (selectedSection === 0) {
          // For section 0, use all users
          newData = response.teams;
        } else {
          // For other sections, filter teams based on some criteria related to the section
          // Example: Assuming each user object has a 'sport' field
          const sectionSport = SidebarData[selectedSection].heading;
          newData = response.teams.filter(
            (user) => user.sport === sectionSport
          );
        }
      }

      // Update the table data state
      setTableData(newData);

      try {
        // NOTE: BELOM SELESAI ngambil team daftar di sport mana
        // const resDetail = await axios.get(
        //   `http://localhost:8090/team/${response.teams._id}`
        // );
      } catch (e) {
        console.log(e.message);
      }
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
