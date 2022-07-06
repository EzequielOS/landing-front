import React, { Component } from 'react';
import '../css/style.css';
import image from '../imgs/headerfoto.jpeg'

class Titulo extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid px-0">
                    <img className="img-fluid  w-100" src={image} alt="Mariany Camargo acessoria imobiliaria" />
                    <div className="divtitulos divtitulospq">
                        <h1>Mariany Camargo</h1>
                        <h5>Assessoria imobiliária</h5>
                        <h5>CRECI: 44415</h5>
                        <h5>Entender para atender</h5>
                    </div>
                </div>
            </section>
        );
    }
}

export default Titulo;