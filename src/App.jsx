import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import Home from "./pages/Home";



const App = () => {
  const isLoggedIn = localStorage.getItem("userLoggedIn");
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        
        {/* -----------------------------------  */}

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
