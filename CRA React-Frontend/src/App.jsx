import "./App.css";
import LoginTeste from "./pages/LoginTeste";
import RegisterTeste from "./pages/RegisterTeste";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import AutoridadesInfo from "./pages/AutoridadesInfo";
import ProtectedRoute from "./pages/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SuportePage from "./pages/SuportePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth/register   " replace />} />
        <Route path="/auth/register" element={<RegisterTeste />}></Route>
        <Route path="/auth/login" element={<LoginTeste />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/informardesaparecido"
          element={
            <ProtectedRoute>
              <Home2 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/atualizacaocasos"
          element={
            <ProtectedRoute>
              <Home3 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/contato"
          element={
            <ProtectedRoute>
              <Home4 />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/autoridades"
          element={
            <ProtectedRoute>
              <AutoridadesInfo />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/suporte"
          element={
            <ProtectedRoute>
              <SuportePage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
