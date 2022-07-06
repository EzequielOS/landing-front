import { useState } from "react";
import { Link } from "react-router-dom";
import Leads from "./Leads";
import Login from "./Login";
import Excel from "./Excel";

const NavBar = ({ submitted, setSubmitted }) => {
  const [content, setContent] = useState("");

  const logout = () => {
    console.log("saindo ....");
    localStorage.removeItem("jwtToken");
    setSubmitted(false);
    setContent("");
  };

  return (
    <div>
      <nav className="container navbar navbar-expand navbar-dark bg-dark">
        <h1 className="navbar-brand">Landing page admin</h1>
        {submitted ? (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link onClick={() => setContent("leads")} to={""} className="nav-link">
                Leads
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => setContent("excel")} to={""} className="nav-link">
                Export to excel
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
      {content === "leads" ? (
        <div className="container">
          <Leads />
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
