import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import contatofoto from '../imgs/cttofoto.png'


import * as api from "../../services/Endpoints";


class Contato extends Component {
    
    
  const NovoVisitor = () => {
            const estadoInicial = {
                    id: null,
                    nome: "",
                    email: "",
                    telefone:"",
            };
            const [visitor, setvisitor] = useState(estadoInicial);
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
                        <img src={contatofoto} alt="" className="quemsoueufoto quemsoueufotopq"/>
                    </div>
                    <div className="align-self-md-center p-5">
                        <form>
                            <label>Nome:</label><br/>
                            <input id="nome" required value={visitor.nome} onChange={trataCampo} name="nome" type="text" className="" placeholder="O seu nome?" size="30"/>
                            <label>Telefone:</label><br/>
                            <input type="text" className="" size="30"/><br/><br/>
                            <label>E-mail:</label><br/>
                            <input type="text" className="" size="30"/><br/>
                            <input type="button" onClick={enviarLead} className="botao" value="ENVIAR"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contato;
