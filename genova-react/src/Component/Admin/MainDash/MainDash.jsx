import {React,useState} from "react";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="MainDash">
      <h1 className="text-2xl font-semibold">Data Masuk</h1>
      <Table />
    </div>
  );
};

export default MainDash;
