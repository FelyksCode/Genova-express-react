import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";
import Faqpage from "./Page/Faqpage";
import MapPage from "./Page/MapPage";
import Admin from "./Page/Admin";
import PageRegis from "./Page/PageRegis";
import Ulympic from "./Page/Ulympic";
import Ucare from "./Page/Ucare";
import PageUnify from "./Page/PageUnify";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division" element={<Pagedivisi />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/regis" element={<PageRegis />} />
        <Route path="/ulympic" element={<Ulympic />} />
        <Route path="/ucare" element={<Ucare />} />
        <Route path="/unify" element={<PageUnify />} />
      </Routes>
    </Router>
  );
}

export default App;
