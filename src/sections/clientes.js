import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import familia1 from '../imgs/familia1.jpg'
import familia2 from '../imgs/familia2.jpg'
import familia3 from '../imgs/familia3.jpg'

class Clientes extends Component {
    render() {
        return (
            <section className="mt-4 mb-4 pb-5 pt-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-auto ">
                            <h1>Clientes felizes. Novos amigos ;)</h1>
                            <h4>(Um serviço
                                personalizado na escolha do seu imovel)</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center p-2 col-md-3">
                            <img src={familia1} alt="" className="rounded-circle w-50 imgsdepo" />
                            <div className="border border-3 mt-n5 p-4 pt-5">
                                <h3 className="p-2">Ana Julia</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold">“Eu recomendo a Mary, pois o atendimento dela foi o diferencial”</p>
                                <p className="p-2 lh-1 fs-6">
                                    “A Mariany soube entender as nossas necessidades e transformou elas na realização de um sonho ao
                                    encontrar a nossa casa própria”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-2 col-md-3">
                            <img src={familia2} alt="" className="rounded-circle imgsdepo" />
                            <div className="border border-3 mt-n5 p-4 pt-5">
                                <h3 className="p-2">Ana Julia</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold">“Eu recomendo a Mary, pois o atendimento dela foi o diferencial”</p>
                                <p className="p-2 lh-1 fs-6">
                                    “A Mariany soube entender as nossas necessidades e transformou elas na realização de um sonho ao
                                    encontrar a nossa casa própria”
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-2 col-md-3">
                            <img src={familia3} alt="" className="rounded-circle imgsdepo" />
                            <div className="border border-3 mt-n5 p-4 pt-5">
                                <h3 className="p-2">Ana Julia</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold">“Eu recomendo a Mary, pois o atendimento dela foi o diferencial”</p>
                                <p className="p-2 lh-1 fs-6">
                                    “A Mariany soube entender as nossas necessidades e transformou elas na realização de um sonho ao
                                    encontrar a nossa casa própria”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Clientes;