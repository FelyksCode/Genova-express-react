import { React, useState } from "react";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="MainDash">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-5">Register</h1>
        <Table />
      </div>
    </div>
  );
};

export default MainDash;
