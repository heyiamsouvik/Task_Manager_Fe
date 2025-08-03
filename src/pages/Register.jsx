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
        {
          username,
          email,
          password,
        }
      );
      toast.success(response.data.message);
      
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[60vw] md:w-[50vw] lg:[30vw]">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Task Buddy
        </h1>
        <h3 className="text-center font-semibold text-zinc-900">
          Register with Taskify
        </h3>
      </div>
      <div className="w-[50vw] md:w-[40vw] lg:[30vw] mt-4">
        <form
          action=""
          onSubmit={register}
          className="flex items-center flex-col gap-4"
        >
          <input
            type="text"
            required
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-2xl px-4 py-1 border-zinc-400 outline-none w-[100%]"
            name="username"
          />
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
            Register
          </button>
          <p className="text-center font-semibold text-gray-900">
            {" "}
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
