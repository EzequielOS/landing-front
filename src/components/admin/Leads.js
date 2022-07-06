import { useEffect, useState } from "react";
import * as api from "../../services/Endpoints";

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    buscaLeads();
  }, []);

  const buscaLeads = () => {
    api
      .getAll()
      .then((response) => {
        setLeads(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container list row">
      <div className="col-md-6 mt-4">
        <h4>Leads</h4>
        {leads.length !== 0 && (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, key) => (
                <tr key={key}>
                  <td>{lead.nome}</td>
                  <td>{lead.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Leads;
