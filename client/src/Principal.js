import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import './estilos-todos.css';
import { BarraSuperior } from './components/BarraSuperior.js';
import { BarraInferior } from './components/BarraInferior.js';
import './App.css';
import { Cuerpo } from './components/Cuerpo.js';
import { SobreNosotros } from './components/SobreNosotros.js';
import { Entregas } from './components/Entregas.js';
import { Inicio } from './components/Inicio.js';
import { NuestrosProductos } from './components/NuestrosProductos.js';
import { Pedido } from './components/Pedido.js';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada.js';

const General = (props) => {
    return (
        <div>
            {document.title = 'Rafaela'}
            <BarraSuperior />
            <Cuerpo
                content={props.contenido}
            ></Cuerpo>
            <BarraInferior />
        </div>
    );
}

class Principal extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<General contenido={<Outlet />} />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path={'/pedido'} element={<Pedido />}></Route>
                            <Route path={'/nuestros-productos'} element={<NuestrosProductos />}></Route>
                            <Route path={'/entregas'} element={<Entregas />}></Route>
                            <Route path={'/sobre'} element={<SobreNosotros />}></Route>
                            <Route path={'*'} element={<PaginaNoEncontrada />}></Route>
                        </Route>
                    </Routes>
                    <p>{this.state.data}</p>
                </div>
            </Router >
        )
    }
}

export default Principal;