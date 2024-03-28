import {React,useState} from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Sidebar from "../Sidebar";

const MainDash = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
