import { useEffect, useState } from "react";
import axios, { AxiosHeaders } from "axios";

import "./AtualizacaoCasos.css";
import CardItem from "./CardItem";
function AtualizacaoCasos() {
  const [postagens, setPostagens] = useState([]);
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
        const response = await instance.get("/postagem");
        console.log("Usuário registrado com sucesso:", response);
        setPostagens(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);
  return (
    <>
      <p id="contatoP">Casos Locais</p>

      <div className="container2">
        <div
          className="contentknw"
          // style={{
          //   marginTop:
          //     postagens.length < 1 ? 1650 : 1650 + postagens.length * 300,
          // }}
        >
          <h1>Atualização dos Casos de Desaparecimento</h1>

          <p id="alinhatxt">
            Nesta seção, você acompanha as atualizações mais recentes sobr/e
            casos de crianças e adolescentes desaparecidos. <br /> <br />{" "}
            Reunimos aqui os informativos enviados por familiares, autoridades e
            voluntários, com dados como nome, idade, local do desaparecimento e
            status atual do caso. Você pode usar o campo de busca para filtrar
            casos por nome, cidade ou estado, e visualizar rapidamente os
            registros mais próximos da sua localização.{" "}
          </p>
        </div>

        <div className="CaixaPesquisa2">
          <h2>Procurar Caso</h2>
          <input
            id="campoinforma2"
            type="text"
            placeholder="Digite o nome do desaparecido"
          />
          <input
            id="campoinforma2"
            type="text"
            placeholder="Digite a cidade/estado do desaparecimento"
          />
          <button type="submit" className="btn-enviar">
            Pesquisar
          </button>
        </div>
        {postagens.length < 1 ? <h1>Nenhuma Postagem</h1> : null}
        {postagens.map((postagem) => (
          <CardItem postagem={postagem} key={postagem.id} />
        ))}
      </div>

      <main className="contentcentralatualiza">
        <div className="contentprincipalatualiza">
          <h1 id="TituloContent2">Contatar o CRA - Child Rescue Alert</h1>

          <h2 id="TituloContent3C" className="espacoemcima">
            Precisa de ajuda ou quer falar com a gente?
          </h2>

          <p>
            Se você tem dúvidas mais específicas, precisa de suporte jurídico,
            quer relatar um problema técnico ou entender como colaborar com a
            nossa plataforma, estamos aqui para ajudar.
          </p>
          <br />

          <p>
            A <strong>Child Rescue Alert</strong> entende que cada caso é único
            e que algumas situações exigem atenção especial. Por isso,
            disponibilizamos um canal dedicado para suporte e contato direto com
            nossa equipe.
          </p>

          <section className="contato-suporte">
            <h3>Fale com a equipe do CRA</h3>
            <p>
              Visite nossa página de suporte para encontrar respostas às dúvidas
              mais frequentes ou nos envie uma mensagem personalizada. Nosso
              time está pronto para te ouvir.
            </p>
            <a href="/suporte" className="botao-suporte">
              Ir para a página de suporte
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default AtualizacaoCasos;
