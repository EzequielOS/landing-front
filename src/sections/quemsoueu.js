import React, { Component } from 'react';
import '../css/style.css';
import quemsoueufoto from '../imgs/quemsoueufoto.png'

class Quemsoueu extends Component {
    render() {
        return (
            <section>
            <div className="container">
                <div className="row justify-content-center p-5">
                    <div className="col-md-auto ">
                        <h2>Quem sou eu?</h2>
                        <h4>Casada, mãe e uma mulher em constante aprendizagem</h4>
                    </div>
                </div>
    
                <div className="d-xl-flex justify-content-center">
                    <div className="centro">
                        <img src={quemsoueufoto} alt="" className="quemsoueufoto quemsoueufotopq"/>
                    </div>
                    <div className="align-self-md-center p-5">
                        <p>Corretora de imóveis,
                            aceitei esse desafio há quase dois anos e me sinto muito feliz e realizada. Como corretora alcancei números de destaque, vendendo mais de 25
                            imóveis e sendo destaque da minha imobiliária em todos esses anos, em primeiro lugar em vendas.</p>
                        <p>Eu busco incansavelmente entender as necessidades dos meus clientes, para realizar um atendimento com excelência.</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Quemsoueu;