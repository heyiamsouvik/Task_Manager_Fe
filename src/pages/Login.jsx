import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`)
    try {
      const response = await axios.post(
        
        
         `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
  
      toast.success(response.data.message);
      
      localStorage.setItem("userLoggedIn", "yes");
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Task Buddy
        </h1>
        <h3 className="text-lg font-semibold text-zinc-900 mt-2">
          Login with Taskify
        </h3>
      </div>
      
      <div className="w-full max-w-md">
        <form
          action=""
          onSubmit={login}
          className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
        >
          <input
            type="email"
            required
            placeholder="email"
            className="border rounded-2xl px-4 py-1 border-zinc-400 outline-none w-[100%]"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="password"
            className="border rounded-2xl px-4 py-1 border-zinc-400 outline-none w-[100%]"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold py-2 rounded-2xl w-full 
            hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            Login
          </button>
          <p className="text-center font-semibold text-gray-900">
            Don't have an account?{"  "}
            <Link to="/register" className="text-blue-800 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
