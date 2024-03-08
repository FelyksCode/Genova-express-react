import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divisi" element={<Pagedivisi />} />
      </Routes>
    </Router>
  );
}

export default App;
