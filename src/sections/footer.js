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
                        <a href="" className="m-2">
                            <img src={whatsapp} className="imgfooter" />
                        </a>
                    </div>
                    <div className="d-flex flex-row col-2 ">
                        <p className="mt-auto mb-auto telagrande">Viva Real: </p>
                        <a href="" className="m-2">
                            <img src={vivareal} alt="" className="imgfooter" />
                        </a>
                    </div>
                    <div className="d-flex flex-row col-2">
                        <p className="mt-auto mb-auto telagrande">Redes Sociais: </p>
                        <a href="" className="m-2">
                            <img src={instagram} alt="" className="imgfooter" />
                        </a>
                        <a href="" className="m-2 telagrande">
                            <img src={youtube} alt="" className="imgfooter" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;