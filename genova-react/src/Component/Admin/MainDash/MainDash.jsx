import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = ({ raceId, raceName }) => {
  const [data, setData] = useState([]);

  async function getDataApi() {
    try {
      // Fetch the list of users
      const usersResponse = await fetch("http://localhost:8090/users");
      if (!usersResponse.ok) {
        throw new Error(`HTTP error! status: ${usersResponse.status}`);
      }
      const usersData = await usersResponse.json();
      // console.log("ListUsers: ", usersData);

      // For each user, fetch their details using their _id
      const userDetails = [];
      for (const user of usersData.users) {
        const detailResponse = await fetch(
          `http://localhost:8090/users/${user._id}`
        );
        if (!detailResponse.ok) {
          throw new Error(`HTTP error! status: ${detailResponse.status}`);
        }
        const userDetail = await detailResponse.json();
        userDetails.push({ user, ...userDetail });
      }

      // console.log("UserDetails: ", userDetails);

      // Filter the user details based on raceId, nyambungin nama nim email ktm biar gampang di mapping
      const filteredData = userDetails.flatMap(({ user, data }) =>
        data.races_joined
          .filter((race) => race.race_name === raceName)
          .map((race) => ({
            nim: user.nim,
            name: user.name,
            email: user.email,
            ktm: user.ktm,
            ...race,
          }))
      );

      // console.log("Filtered: ", filteredData);

      setData(filteredData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getDataApi();
  }, []); // Runs once on mount

  return (
    <div className="MainDash">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-5">{raceName}</h1>
        <Table data={data} />
      </div>
    </div>
  );
};

export default MainDash;
