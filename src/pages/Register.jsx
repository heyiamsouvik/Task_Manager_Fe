import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/register`,
        { username, email, password }
      );
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      

      {/* Header */}
      <div className="w-full max-w-md text-center mb-6">

        <h1 className="text-3xl font-bold text-blue-800">Task Buddy</h1>
        <h3 className="text-lg font-semibold text-zinc-900 mt-2">
          Register with Taskify
        </h3>
      </div>

      {/* Form */}
      <div className="w-full max-w-md">
        <form
          onSubmit={register}
          className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
        >
        
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-2xl px-4 py-2 border-zinc-400 outline-none w-full"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-2xl px-4 py-2 border-zinc-400 outline-none w-full"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-2xl px-4 py-2 border-zinc-400 outline-none w-full"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold py-2 rounded-2xl w-full 
            hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
          
            Register
          </button>
          <p className="text-center font-semibold text-gray-900">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
