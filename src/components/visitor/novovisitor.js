import React, { useState } from "react";
import * as api from "../../services/Endpoints";
import '../css/style.css';

const NovoVisitor = () => {
  const estadoInicial = {
    id: null,
    nome: "",
    email: "",
    telefone:"",
  };
  const [visitor, setVisitor] = useState(estadoInicial);
  const [submitted, setSubmitted] = useState(false);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setVisitor({ ...visitor, [name]: value });
  };

  const enviarVisitor = () => {
    api
      .create(visitor)
      .then((response) => {
        setVisitor({
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email,
          telefone: response.data.telefone,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4 className="text-white">Obrigado por ter se cadastrado!</h4>
        </div>
      ) : (
        <div>
          <div className="position-relative d-block" data-aos="fade-up">
            <div className="form-group">
              <label className="" htmlFor="nome">
                Nome:
              </label>
              <input
                id="nome"
                required
                value={visitor.nome}
                onChange={trataCampo}
                name="nome"
                type="text"
                className="form-control form-control-lg input"
                size="30"
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="email">
                E-mail:
              </label>
              <input
                id="email"
                required
                value={visitor.email}
                onChange={trataCampo}
                name="email"
                type="email"
                className="form-control form-control-lg input"
                size="30"
              />
            </div>
              <div className="form-group">
                    <label className="" htmlFor="email">
                      Telefone
                    </label>
                    <input
                      id="email"
                      required
                      value={visitor.telefone}
                      onChange={trataCampo}
                      name="telefone"
                      type="telefone"
                      className="form-control form-control-lg input"
                      size="30"
                    />
                  </div>

            <div className="form-group text-center">
              <button onClick={enviarVisitor} className="botao" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NovoVisitor;
