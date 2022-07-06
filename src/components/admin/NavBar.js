import { useState } from "react";
import { Link } from "react-router-dom";
import Visitores from "./Visitores";
import Login from "./Login";
import Excel from "./Excel";
import '../css/style.css';

const NavBar = ({ submitted, setSubmitted }) => {
  const [content, setContent] = useState("");

  const logout = () => {
    console.log("saindo ....");
    localStorage.removeItem("jwtToken");
    setSubmitted(false);
    setContent("");
  };

  return (
    <div className="bgcinza">
      <nav className="container navbar navbar-expand navbar-dark bg-dark">
        <h1 className="navbar-brand">Administração de dados coletados:</h1>
        {submitted ? (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link onClick={() => setContent("visitores")} to={""} className="nav-link">
                Cadastros
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => setContent("excel")} to={""} className="nav-link">
                Exportar para Excel
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={logout} className="nav-link" to={""}>
                Sair
              </Link>
            </li>
          </div>
        ) : (
          <Login setSubmitted={setSubmitted} />
        )}
      </nav>
      {content === "visitores" ? (
        <div className="container">
          <Visitores />
        </div>
      ) : null}
      {content === "excel" ? (
        <div className="container">
          <Excel />
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
