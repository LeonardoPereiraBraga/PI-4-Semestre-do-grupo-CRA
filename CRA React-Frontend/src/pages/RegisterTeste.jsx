import React from "react";
import "../pages/RegisterTeste-module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { supabase } from "../supabase/supabaseClient";

function RegisterTeste() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState(0);
  const [telefone, setTelefone] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [urlIcon, setUrlIcon] = useState("");

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
  function successNotify(mensagem) {
    toast.success(mensagem, {
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
    username: nome,
    password: senha,
    cpf: cpf,
    telefone: telefone,
    email: email,
  };

  function handleSubmit(e) {
    e.preventDefault();
    async function fetch() {
      try {
        const {
          data: { session },
          error2,
        } = await supabase.auth.getSession();

        const filePath = `${Date.now()}-${file.name}`;

        const { error } = await supabase.storage
          .from("avatars")
          .upload(filePath, file);
        const { data } = await supabase.storage
          .from("avatars")
          .getPublicUrl(filePath);
        const urlAtualizada = data?.publicUrl;
        form.fotoPerfil = urlAtualizada;
        console.log("Icon URL: " + urlAtualizada);
        const response = await axios.post(
          "http://localhost:8080/auth/register",
          form
        );
        successNotify("Sucesso ao registrar!");
        console.log("Usuário registrado com sucesso:", response.data);
        navigate("/auth/login");
      } catch (error) {
        console.error("Erro ao registrar:", error.response.data.message);
        errorNotify(error.response.data.message);
      }
    }
    fetch();
  }
  return (
    <>
      <div className="wrapper">
        <div className="form-header">
          <div className="titles">
            <div className="title-login">Cadastro</div>
          </div>
        </div>

        <form action="#" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              id="cad-nome"
              required
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="cad-nome" className="label">
              Usuario
            </label>
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              className="input-field"
              id="log-email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="cad-email" className="label">
              Email
            </label>
            <i className="bx bx-envelope icon"></i>
          </div>

          <div className="input-box">
            <input
              type="number"
              className="input-field"
              id="log-senha"
              required
              onChange={(e) => setCPF(e.target.value)}
            />
            <label htmlFor="cad-senha" className="label">
              CPF
            </label>
            <i className="bx bxs-id-card icon"></i>
          </div>
          <div className="input-box">
            <input
              type="number"
              className="input-field"
              id="log-senha"
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label htmlFor="cad-senha" className="label">
              Telefone
            </label>
            <i className="bx bx-phone-incoming icon"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              className="input-field"
              id="log-senha-repeat"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="cad-senha-repeat" className="label">
              Senha
            </label>
            <i className="bx bx-lock icon"></i>
          </div>

          <div className="form-cols">
            <div className="col-1">
              <input type="checkbox" id="marcada" />
              <label htmlFor="marcada">
                Eu concordo com os termos e condições do site
              </label>
            </div>
            <div className="col-2"></div>
          </div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <div className="input-box">
            <button type="submit" className="btn-submit" id="SignUpBtn">
              Realizar Cadastro <i className="bx bx-log-out"></i>
            </button>
          </div>

          <div className="switch-form">
            <span>
              Já possui uma conta?
              <a href="/auth/login">Login</a>
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

export default RegisterTeste;
