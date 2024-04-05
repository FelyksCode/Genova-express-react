import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post(
        `http://localhost:8090/admin/login`,
        JSON.stringify({ email, password }), // Sending data as JSON
        {
          headers: {
            "Content-Type": "application/json", // Setting the Content-Type as application/json
          },
        }
      );
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      setIsLoggedIn(true);
      navigate("/admin");
    } catch (error) {
      // Something happened in setting up the request that triggered an Error
      console.error("Error: ", error.message);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/admin"); // Redirect to admin page
    }
  }, [navigate]);

  return (
    <div className="flex">
      <div className="text-center">
        <form onSubmit={handleLogin}>
          <label>Email: </label>
          <input type="email" name="email" onChange={handleEmailChange} />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
