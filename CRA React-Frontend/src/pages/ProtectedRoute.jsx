import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  async function verifyToken() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/auth/dados", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      navigate("/auth/login");
      return false;
    }
  }
  const isAuthenticated = verifyToken();

  isAuthenticated.then((value) => console.log(value));

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/auth/login");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
