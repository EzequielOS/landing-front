import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import whatsapp from '../imgs/whatsapp.png'
import instagram from '../imgs/instagram.png'
import youtube from '../imgs/youtube.png'
import vivareal from '../imgs/vivareal.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-row col-2">
                        <p className="mt-auto mb-auto telagrande">+55 34 99928-4080</p>
                        <a href="https://api.whatsapp.com/send?phone=5534999284080&text=Ol%C3%A1%20Mariany!%20Vi%20seu%20site%20e%20gostei%20bastante%20da%20sua%20proposta%2C%20podemos%20conversar%3F" className="m-2" target="_blank">
                            <img src={whatsapp} className="imgfooter" />
                        </a>
                    </div>
                    <div className="d-flex flex-row col-2 ">
                        <p className="mt-auto mb-auto telagrande">Viva Real: </p>
                        <a href="https://www.vivareal.com.br/674033/mariany-camargo-creci-44415/" className="m-2" target="_blank">
                            <img src={vivareal} alt="" className="imgfooter" />
                        </a>
                    </div>
                    <div className="d-flex flex-row col-2">
                        <p className="mt-auto mb-auto telagrande">Redes Sociais: </p>
                        <a href="https://www.instagram.com/marianycamargo/" className="m-2" target="_blank">
                            <img src={instagram} alt="" className="imgfooter" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCohVWHXd2YZbo6R1m6Gx6NQ" className="m-2 telagrande" target="_blank">
                            <img src={youtube} alt="" className="imgfooter" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;