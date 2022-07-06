import { useEffect, useState } from "react";
import * as api from "../../services/Endpoints";
import '../css/style.css';

const Visitores = () => {
  const [visitores, setVisitores] = useState([]);

  useEffect(() => {
    buscaVisitores();
  }, []);

  const buscaVisitores = () => {
    api
      .getAll()
      .then((response) => {
        setVisitores(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container list row bg-secondary">
      <div className="col-md-6 mt-4">
        <h4>Pessoas cadastradas</h4>
        {visitores.length !== 0 && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {visitores.map((visitor, key) => (
                <tr key={key}>
                  <td>{visitor.nome}</td>
                  <td>{visitor.email}</td>
                  <td>{visitor.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Visitores;
