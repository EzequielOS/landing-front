import React, { Component } from 'react';
import { useState } from "react";
import * as api from "../../services/Endpoints";
import '../css/ourstrap.css';
import '../css/style.css';
import contatofoto from '../imgs/cttofoto.png'


//insere nas variaveis
const NovoVisitor = () => {
    const estadoInicial = {
        id: null,
        nome: "",
        telefone: "",
        email: "",
    };
    const [visitor, setVisitor] = useState(estadoInicial);
    const [submitted, setSubmitted] = useState(false);

    const trataCampo = (event) => {
        const { name, value } = event.target;
        setVisitor({ ...visitor, [name]: value });
    };

    //captura e envio para o banco
    const enviarVisitor = () => {
        api
            .create(visitor)
            .then((response) => {
                setVisitor({
                    id: response.data.id,
                    nome: response.data.nome,
                    telefone: response.data.telefone,
                    email: response.data.email,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
};


class Contato extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row justify-content-center p-5">
                        <div className="col-md-auto ">
                            <h2>Vamos conversar?</h2>
                            <h4>Será um enorme prazer te conhecer!</h4>
                        </div>
                    </div>

                    <div className="d-xl-flex justify-content-center">
                        <div className="centro">
                            <img src={contatofoto} alt="" className="quemsoueufoto quemsoueufotopq" />
                        </div>
                        <div className="align-self-md-center p-5">
                            <form>
                                <label>Nome:</label><br />
                                <input type="text" className="" size="30"
                                    id="nome"
                                    required
                                    value={visitor.nome}
                                    onChange={trataCampo}
                                    name="nome" /><br /><br />
                                <label>Telefone:</label><br />
                                <input type="text" className="" size="30"
                                    id="telefone"
                                    required
                                    value={visitor.telefone}
                                    onChange={trataCampo}
                                    name="telefone" /><br /><br />
                                <label>E-mail:</label><br />
                                <input className="" size="30"
                                    id="email"
                                    required
                                    value={visitor.email}
                                    onChange={trataCampo}
                                    name="email"
                                    type="email" /><br />
                                <input type="submit" className="botao" value="ENVIAR" onClick={enviarVisitor} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contato;


