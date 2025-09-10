import React from "react";
import "../pages/LoginTeste-module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginTeste() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function errorNotify(mensagem) {
    toast.error(mensagem, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const form = {
    email: email,
    password: senha,
  };

  function handleSubmit(e) {
    e.preventDefault();
    async function fetch() {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/login",
          form
        );
        console.log("Usuário registrado com sucesso:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } catch (error) {
        console.error("Erro ao registrar:", error);
        errorNotify(error.response.data.message);
      }
    }
    fetch();
  }
  return (
    <>
      <div className="wrapperlogin">
        <div className="form-header">
          <div className="titles">
            <div className="title-login">Login</div>
            <div className="title-cadastro">Cadastro</div>
          </div>
        </div>

        <form action="#" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              id="log-email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="log-email" className="label">
              Email
            </label>
            <i className="bx bx-envelope icon"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              className="input-field"
              id="log-senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="log-senha" className="label">
              Senha
            </label>
            <i className="bx bx-lock icon"></i>
          </div>

          <div className="form-cols">
            <div className="col-1"></div>
            {/* <div className="col-2">
              <a href="#">Esqueceu a senha?</a>
            </div> */}
          </div>

          <div className="input-box">
            <button className="btn-submit" id="SignInBtn" type="submit">
              Fazer o Login <i className="bx bx-log-in"></i>
            </button>
          </div>

          <div className="switch-form">
            <span>
              Não possui uma conta?
              <a href="/auth/register">Criar conta</a>
            </span>
          </div>
        </form>
        <div id="logob">
          <img id="logoc" src="/logocra.svg" alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default LoginTeste;
