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
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[60vw] md:w-[50vw] lg:[30vw]">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Task Buddy
        </h1>
        <h3 className="text-center font-semibold text-zinc-900">
          Login with Taskify
        </h3>
      </div>
      <div className="w-[50vw] md:w-[40vw] lg:[30vw] mt-4">
        <form
          action=""
          onSubmit={login}
          className="flex items-center flex-col gap-4"
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
            className="bg-blue-800 text-white font-semibold py-2 rounded w-[50%] hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
          <p className="text-center font-semibold text-gray-900">
            Don't have an account?{"  "}
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
