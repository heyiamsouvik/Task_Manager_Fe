import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ setAddTaskDiv }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/logout`);
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("userLoggedIn");
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Fail to Logout");
      navigate("/login");
    }
  };

  return (
    <div className="flex px-12 py-4 items-center justify-between border-b">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="text-2xl text-blue-800 font-bold"
        >
          TaskBuddy
        </h1>
      </div>
      <div className="flex gap-8">
        <button
          className="font-semibold hover:text-blue-800 
          transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setAddTaskDiv("block")}
        >
          Add Task
        </button>
        <button
          className="text-2xl hover:text-red-600 
          transition-transform duration-300 ease-in-out transform hover:scale-105"
          onClick={logout}
        >
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
