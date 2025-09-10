function CardItem({ postagem }) {
  function formatarData(dataIso) {
    const data = new Date(dataIso);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
      <div className="card">
        <img
          src={postagem.fotoPerfil ? postagem.fotoPerfil : "user.png"}
          alt="Registrar Desaparecimento"
        />
        <h3>{postagem.nome}</h3> <br />
        <p id="alinhatxt">
          <strong>Idade:</strong> {postagem.idade} anos
        </p>
        <p id="alinhatxt">
          <strong>Desapareceu em:</strong> {postagem.ultimaLocalidade}
        </p>
        <p id="alinhatxt">
          <strong>Data:</strong> {formatarData(postagem.data)}
        </p>
        <p id="alinhatxt">
          <strong>Status:</strong> {postagem.status}
        </p>
        <a href="registrarpessoa.html">Acompanhar Caso</a>
      </div>
    </>
  );
}

export default CardItem;
