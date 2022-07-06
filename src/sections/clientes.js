import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import depo1 from '../imgs/depo1.png'
import depo2 from '../imgs/depo2.png'
import depo3 from '../imgs/depo3.png'
import depo4 from '../imgs/depo4.png'

class Clientes extends Component {
    render() {
        return (
            <section className="mt-4 mb-4 pb-5 pt-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-auto ">
                            <h2>Clientes felizes. Novos amigos ;)</h2>
                            <h4>Você também pode se tornar um cliente feliz</h4>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex text-center p-2 col-md-3">
                            <div className="mt-n5 p-4 pt-5 depodiv">
                            <img src={depo1} alt="" className="rounded-circle w-50 imgsdepo" />
                                <h3 className="p-2 deponome">Alessandra Andrade</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold fst-italic">"Me ajudou a realizar o sonho de recomeçar, simplesmente porque ela ama o que faz!"</p>
                                <p className="p-2 lh-1 fs-6 textos">
                                    Procurei a Innovare pois já conhecia a Mary há pelo menos 12 anos, e não me surpreendi qdo ela mostrou total dedicação em me ajudar a realizar o sonho de recomeçar, simplesmente porque ela ama o que faz! Foram várias visitas procurando o imóvel que se encaixasse no meu perfil, e nas minhas possibilidades, e em todos os momentos fui assessorada, orientada e animada a não desistir, pois o meu imóvel está a me esperar, e realmente o achamos. Não tenho palavras para agradecer a toda equipe, em especial a Mary por fazer parte de uma etapa tão importante da minha vida! Continuem amando o trabalho que vcs fazem com tanto carinho, o sucesso é com certeza a consequência desta dedicação!
                                </p>
                            </div>
                        </div>
                        <div className="d-flex text-center p-2 col-md-3">
                            <div className="mt-n5 p-4 pt-5 depodiv">
                            <img src={depo2} alt="" className="rounded-circle w-50 imgsdepo" />
                                <h3 className="p-2 deponome">Andréia e Paulo Fernando</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold fst-italic">"O acaso mais certeiro que aconteceu."</p>
                                <p className="p-2 lh-1 fs-6 textos">
                                    Ter a Mary como nossa consultora foi o acaso mais certeiro que aconteceu. Ela ouviu nossa necessidade, nos fez diferentes propostas dentro do que buscávamos, e nos despertou o interesse em algo que nem imaginávamos. Obrigada por tanto e por tudo!
                                </p>
                            </div>
                        </div>
                        <div className="d-flex text-center p-2 col-md-3">
                            <div className="mt-n5 p-4 pt-5 depodiv">
                            <img src={depo3} alt="" className="rounded-circle w-50 imgsdepo" />
                                <h3 className="p-2 deponome">Guilherme e Tamirys</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold fst-italic">"Ela vestiu a camisa do nosso time e de maneira extremamente profissional lutou e não descansou até que tudo estivesse perfeito!"</p>
                                <p className="p-2 lh-1 fs-6 textos">
                                    Quando decidimos que era a hora de buscar nossa nova residência, nossa famíia tinha vários sonhos muito bem definidos: O tipo de casa, a região do novo endereço, o valor a ser pago, e muitos outros detalhes...
                                    A Mari foi o anjo que possibilitou que todos esses sonhos pudessem vir a se tornar realidade. Ela vestiu a camisa do nosso time e de maneira extremamente profissional lutou e não descansou até que tudo estivesse perfeito! Foram diversas as vezes que tivemos a certeza que se não fosse ela, ali cuidando de tudo, não estariamos aqui: Vivendo nosso sonho!
                                </p>
                            </div>
                        </div>
                        <div className="d-flex text-center p-2 col-md-3">
                            <div className="mt-n5 p-4 pt-5 depodiv">
                            <img src={depo4} alt="" className="rounded-circle w-50 imgsdepo" />
                                <h3 className="p-2 deponome">Danielle e Mateus</h3>
                                <p className="p-2 fs-6 lh-1 fw-bold fst-italic">"Nos prestou um excelente serviço desde o início da ideia de procurar o próximo imóvel, nos ajudando a compreender o que buscávamos"</p>
                                <p className="p-2 lh-1 fs-6 textos">
                                    A Mariany nos prestou um excelente serviço desde o início da ideia de procurar o próximo imóvel, nos ajudando a compreender o que buscávamos, com paciência para que a ideia fosse amadurecendo e tomasse forma, e tivéssemos clareza do que buscávamos no próximo imóvel. Nos apoiou ao encontrar o terreno que viabilizasse o projeto que tínhamos em mente, e ao negociar com a parte vendedora, sustentando o negócio mesmo em momentos de desgaste. Portanto, recomendamos à quem quer que esteja pensando em se mudar que procure pela Mary para colocar em ação o projeto.
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