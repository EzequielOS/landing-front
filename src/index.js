import App from './App';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDOM.render(<App/>, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);


//executar os dois comandos sempre que baixar ou clonar o projeto
//npm install
//npm install react-bootstrap bootstrap


//justificar textos
//criar os depoimentos coma mary
