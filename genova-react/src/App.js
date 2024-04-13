import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";
// import Faqpage from "./Page/Faqpage";
import MapPage from "./Page/MapPage";
import Admin from "./Page/Admin";
import LoginPage from "./Page/LoginAdmin";
import Ulympic from "./Page/Ulympic";
import Ucare from "./Page/Ucare";
import PageUnify from "./Page/PageUnify";
import PageEulympic from "./Page/PageEulympic";
import Unveiling from "./Page/Unveiling";

import "./App.css";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("accessToken"); // Check if the user is logged in
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division" element={<Pagedivisi />} />
        {/* <Route path="/faq" element={<Faqpage />} /> */}
        <Route path="/map" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/ulympic" element={<Ulympic />} />
        <Route path="/ucare" element={<Ucare />} />
        <Route path="/unify" element={<PageUnify />} />
        <Route path="/eulympic" element={<PageEulympic />} />
        <Route path="/unveiling" element={<Unveiling />} />
      </Routes>
    </Router>
  );
}

export default App;
