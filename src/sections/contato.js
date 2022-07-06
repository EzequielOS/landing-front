import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import contatofoto from '../imgs/cttofoto.png'

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
                        <img src={contatofoto} alt="" className="quemsoueufoto quemsoueufotopq"/>
                    </div>
                    <div className="align-self-md-center p-5">
                        <form>
                            <label>Nome:</label><br/>
                            <input type="text" className="" size="30"/><br/><br/>
                            <label>Telefone:</label><br/>
                            <input type="text" className="" size="30"/><br/>
                            <input type="button" className="botao" value="ENVIAR"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contato;