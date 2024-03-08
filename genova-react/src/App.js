import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";
import Faqpage from "./Page/Faqpage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division" element={<Pagedivisi />} />
        <Route path="/faq" element={<Faqpage />} />
      </Routes>
    </Router>
  );
}

export default App;
