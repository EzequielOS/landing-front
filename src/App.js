import React, { Component } from 'react';

import Clientes from './sections/clientes';
import Contato from './sections/contato';
import Footer from './sections/footer';
import Imoveis from './sections/imoveis';
import Meuservico from './sections/meuservico';
import Quemsoueu from './sections/quemsoueu';
import Titulo from './sections/titulo';

class App extends Component {
    render() {
        return (
            <div>
                <Titulo/>
                <Quemsoueu/>
                <Meuservico/>
                <Clientes/>
                <Imoveis/>
                <Contato/>
                <Footer/>
            </div>
        );
    }
}

export default App;