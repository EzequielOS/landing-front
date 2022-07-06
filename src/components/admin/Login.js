import { useEffect, useState } from "react";
import * as api from "../../services/Endpoints";

const Login = ({ setSubmitted }) => {
  const estadoInicial = {
    nome: "",
    senha: "",
  };
  const [user, setUser] = useState(estadoInicial);
  const [erro, setErro] = useState("");

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect (" + localStorage.getItem("jwtToken") + ")");
    if (localStorage.getItem("jwtToken") !== null) setSubmitted(true);
    else setSubmitted(false);
  }, []);

  const logar = () => {
    console.log(user);
    api
      .login(user)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
        localStorage.setItem("jwtToken", response.data);
        setErro("");
      })
      .catch((e) => {
        console.log("Erro: -------------------------- " + e);
        setErro("Usuário e/ou senha errado(s)");
      });
  };

  return (
    <div className="">
      <input
        type="text"
        className="border-0 border-bottom mx-1"
        id="nome"
        required
        value={user.nome}
        onChange={trataCampo}
        name="nome"
        placeholder="Nome do usuário"
      />
      <input
        type="password"
        className="border-0 border-bottom mx-1"
        id="senha"
        required
        value={user.senha}
        onChange={trataCampo}
        name="senha"
        placeholder="Senha"
      />
      <button onClick={logar} className="border-0 mx-1">
        Enviar
      </button>
      {erro !== "" ? (
        <span className="alert alert-danger ml-3">
          <span>{erro}</span>
        </span>
      ) : (
        <span className="ml-3 text-light">Realize a autenticação</span>
      )}
    </div>
  );
};

export default Login;
