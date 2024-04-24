import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../config/instance";
import Swal from "sweetalert2"; 

export default function Register() {
  const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disbaled: "#090909"
  }

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "", 
    password: "", 
    phoneNumber: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/register", user);

      Swal.fire({ 
        icon: "success",
        title: "Register Success",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: error.response.data.message || "Registration failed",
        title: "Error",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">Create a new account</p>

          <form onSubmit={registerUser} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              value={user.email}
              onChange={inputHandler}
              placeholder="Email"
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="username"
              value={user.username}
              onChange={inputHandler}
              placeholder="Username"
            />
            <input
              className="p-2 rounded-xl border"
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={inputHandler}
              placeholder="Password"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={inputHandler}
                placeholder="Phone Number"
              />
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <Link to="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="login"/>
        </div>
      </div>
    </section>
  );
}
