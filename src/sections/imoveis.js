import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import casas from '../imgs/casaalto.png';
import apartamentos from '../imgs/apartamentoalto.png';
import terrenos from '../imgs/terrenoalto.png';
import Carousel from 'react-bootstrap/Carousel';


class Imoveis extends Component {
    render() {
        return (

            <section className="mt-4 mb-4 pb-5 bgcinza">
                <div className="container">
                    <div className="row justify-content-center p-5">
                        <div className="col-md-auto ">
                            <h2>Meu serviço</h2>
                            <h4>Você pode morar onde sempre sonhou</h4>
                        </div>
                    </div>
                    <Carousel variant="light">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={casas}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div>
                                    <h6 className="titulocarrocel">Casas</h6>
                                    <p className="textocarrocel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={apartamentos}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h6 className="titulocarrocel">Apartamentos</h6>
                                <p className="textocarrocel">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={terrenos}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h6 className="titulocarrocel">Terrenos</h6>
                                <p className="textocarrocel">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default Imoveis;