import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState, useMemo } from 'react';
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
import { SobreNosotros } from './components/SobreNosotros.js';
import { Entregas } from './components/Entregas.js';
import { Inicio } from './components/Inicio.js';
import { NuestrosProductos } from './components/NuestrosProductos.js';
import { Pedido } from './components/Pedido.js';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada.js';
import { TotalAmountContext } from './components/CartContent.js';
import { CartContentContext } from './components/CartContent.js';
import { Cart } from './components/Cart.js';
import { newCartContent } from './elements/listaDeArtesanias.js';

const General = (props) => {
    return (
        <div>
            {document.title = 'Rafaela'}
            {props.contenido}
            <BarraInferior />
        </div>
    );
}

class Main extends Component {
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
            <div>
                {document.title = 'Rafaela'}
                <BarraSuperior
                />
                <Router>
                    <div>
                        <Routes>
                            <Route path='/' element={<General contenido={<Outlet />} />}>
                                <Route index element={<Inicio />}></Route>
                                <Route path={'/pedido'} element={<Pedido />}></Route>
                                <Route path={'/nuestros-productos'} element={<NuestrosProductos />}></Route>
                                <Route path={'/entregas'} element={<Entregas />}></Route>
                                <Route path={'/sobre'} element={<SobreNosotros />}></Route>
                                <Route path={'/carrito'} element={<Cart />}></Route>
                                <Route path={'*'} element={<PaginaNoEncontrada />}></Route>
                            </Route>
                        </Routes>
                        {console.log(this.state.data)}
                    </div>
                </Router >
            </div>
        )
    }
}

export const MainComponent = () => {
    const checkCart = () => {
        const previouslyExistentCart = Number(sessionStorage.getItem('cart-amount'));
        return typeof previouslyExistentCart != 'undefined' && previouslyExistentCart;
    }
    const [carterTotalAmount, setTotalAmount] = useState(checkCart);
    const utilitiesSet = useMemo(
        () => ({ carterTotalAmount, setTotalAmount }),
        [carterTotalAmount]
    );
    const [cartContent, setCartContent] = useState(newCartContent);
    const setForContentChanging = useMemo(
        () => ({ cartContent, setCartContent }),
        [cartContent]
    );
    return (
        <TotalAmountContext.Provider
            value={utilitiesSet}>
            <CartContentContext.Provider
                value={setForContentChanging}>
                <div>
                    <Main />
                </div>
            </CartContentContext.Provider>
        </TotalAmountContext.Provider>
    )
}
