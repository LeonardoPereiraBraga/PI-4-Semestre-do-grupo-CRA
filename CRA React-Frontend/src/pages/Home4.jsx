import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios, { AxiosHeaders } from "axios";
import InformarDesaparecido from "../components/InformarDesaparecido";
import Index from "../components/Index";
import Carousel from "../components/Carousel";
import TextoHome from "../components/TextoHome";
import AtualizacaoCasos from "../components/AtualizacaoCasos";
import Contato from "../components/Contato";

function Home() {
  const [usuarioLogado, setUsuarioLogado] = useState({});

  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // 👈 precisa ser assim
    }
    return config;
  });

  useEffect(() => {
    async function fetch() {
      try {
        if (!localStorage.getItem("token")) {
          return;
        }
        const response = await instance.post("/teste");
        console.log("Usuário registrado com sucesso:", response);
        setUsuarioLogado(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <>
      <Header ativo={3} />
      <Contato />

      <Footer />
      {}
    </>
  );
}

export default Home;
