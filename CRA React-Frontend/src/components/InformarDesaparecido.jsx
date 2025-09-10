import React, { use, useState } from "react";
import styles from "./InformarDesaparecido.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../supabase/supabaseClient";
import axios, { AxiosHeaders } from "axios";

function InformarDesaparecido() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [file, setFile] = useState(null);

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
        const response = await instance.post("/postagem", form);
        successNotify("Sucesso ao postar!");
        console.log("Usuário registrado com sucesso:", response.data);
      } catch (error) {
        console.log(error);
        const mensagemErro =
          error.response?.data?.message || "Erro inesperado ao postar";
        console.error("Erro ao postar:", mensagemErro);
        errorNotify(mensagemErro);
      }
    }
    fetch();
  }

  const form = {
    nome: nome,
    idade: idade,
    ultimaLocalidade: local,
    informacoesAdicionais: descricao,
    data: data,
    status: "Desaparecido",
  };

  return (
    <div>
      <main className={styles.contentcentralVIALG}>
        <div className={styles.contentprincipalVIALG}>
          <h1 className={styles.tituloContentVIALG}>Informar Pista</h1>

          <h2 className={styles.subTituloContentVIALG}>
            <strong>Você viu algo?</strong> Pode ser a chave para encontrar
            alguém. <br /> <br />
            Se você acredita ter visto uma criança desaparecida ou tem qualquer
            informação que possa ajudar, preencha o campo abaixo. Sua identidade
            pode ser preservada se desejar. Quanto mais detalhes você fornecer,
            maiores as chances de reencontro. Você também pode anexar fotos ou
            vídeos para ajudar na verificação da informação.
          </h2>
        </div>

        <div className={styles.campoinformarpista}>
          <input
            className={styles.campoInforma}
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            className={styles.campoInforma}
            type="text"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
            required
          />
          <input
            className={styles.campoInforma}
            type="text"
            placeholder="Local"
            onChange={(e) => setLocal(e.target.value)}
            required
          />
          <input
            className={styles.campoInforma}
            type="date"
            placeholder="Data"
            onChange={(e) => setData(e.target.value)}
            required
          />
          <input
            className={styles.campoInforma}
            type="text"
            placeholder="Descreva o que você viu..."
            onChange={(e) => setDescricao(e.target.value)}
            required
          />

          <div className={styles.campoImagem}>
            <label className={styles.caixaFoto} htmlFor="campofoto">
              <span>Enviar Foto</span>
            </label>
            <input
              type="file"
              id="campofoto"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <div id="formularioenvia" className={styles.formularioenvia}>
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.campoAnonimo}>
                <label>
                  <input type="checkbox" id="anonimo" name="anonimo" />
                  Desejo permanecer anônimo
                </label>
              </div>

              <button type="submit" className={styles.btnEnviar}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default InformarDesaparecido;
