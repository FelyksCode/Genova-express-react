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
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <div className="text-center">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={handlePasswordChange}
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
