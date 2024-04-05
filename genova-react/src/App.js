import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Page/Home";
import Pagedivisi from "./Page/Pagedivisi";
import Faqpage from "./Page/Faqpage";
import MapPage from "./Page/MapPage";
import Admin from "./Page/Admin";
import LoginPage from "./Page/LoginAdmin";
import PageRegis from "./Page/PageRegis";
import Ulympic from "./Page/Ulympic";
import Ucare from "./Page/Ucare";
import PageUnify from "./Page/PageUnify";

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
        <Route path="/faq" element={<Faqpage />} />
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
        <Route path="/regis" element={<PageRegis />} />
        <Route path="/ulympic" element={<Ulympic />} />
        <Route path="/ucare" element={<Ucare />} />
        <Route path="/unify" element={<PageUnify />} />
      </Routes>
    </Router>
  );
}

export default App;
