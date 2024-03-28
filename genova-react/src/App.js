import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";
import Faqpage from "./Page/Faqpage";
import MapPage from "./Page/MapPage";
import Admin from "./Page/Admin";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division" element={<Pagedivisi />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
