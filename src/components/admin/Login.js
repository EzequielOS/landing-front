import { useEffect, useState } from "react";
import * as api from "../../services/Endpoints";


const Login = ({ setSubmitted }) => {
  const estadoInicial = {
    name: "",
    pass: "",
  };
  const [admin, setAdmin] = useState(estadoInicial);
  const [erro, setErro] = useState("");

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect (" + localStorage.getItem("jwtToken") + ")");
    if (localStorage.getItem("jwtToken") !== null) setSubmitted(true);
    else setSubmitted(false);
  }, []);

  const logar = () => {
    console.log(admin);
    api
      .login(admin)
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
        id="name"
        required
        value={admin.name}
        onChange={trataCampo}
        name="name"
        placeholder="Usuário"
      />
      <input
        type="password"
        className="border-0 border-bottom mx-1"
        id="pass"
        required
        value={admin.pass}
        onChange={trataCampo}
        name="pass"
        placeholder="Senha de acesso"
      />
      <button onClick={logar} className="border-0 mx-1">
        Acessar
      </button>
      {erro !== "" ? (
        <span className="alert alert-danger ml-3">
          <span>{erro}</span>
        </span>
      ) : (
        <span className="ml-3 text-light">Informe o login e a senha para visualizar os dados</span>
      )}
    </div>
  );
};

export default Login;
