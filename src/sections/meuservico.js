import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import tresimoveis from '../imgs/tresimoves.png'

class Meuservico extends Component {
    render() {
        return (
            <section className="mt-4 mb-4 pb-5 bgcinza">
                <div className="container">
                    <div className="row justify-content-center p-5">
                        <div className="col-md-auto ">
                            <h2>Meu serviço</h2>
                            <h4>Cada dia mais competente para atender meus clientes</h4>
                        </div>
                    </div>

                    <div className="d-xl-flex justify-content-center">
                        <div className="align-self-md-center p-5">
                            <p>Eu ajudo as pessoas a encontrarem os imóveis que elas buscam, de forma leve e descomplicada. Com
                                propriedade para assessorar em todo o processo, desde a escolha do imóvel, a comparação de cenários
                                de oportunidade e valorização, aprovação do crédito se necessário e trâmites burocráticos que
                                envolvem o processo.</p>
                            <p>Ajudo que ela não se perca frente às inúmeras opções existentes no mercado.</p>
                        </div>
                        <div className="p-5">
                            <img src={tresimoveis} alt="" className="wid100" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Meuservico;