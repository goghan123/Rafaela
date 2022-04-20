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
import { TotalAmountContext } from './components/AmountContext.js';
import { Cart } from './components/Cart.js';
// import { useTotalAmount as TotalAmountContext } from './components/AmountContext.js';
// import { useTotalAmount } from './components/Pedido.js';


// useTotalAmount().totalAmount
// const useSmthg = () => {

//     const AmountElements = document.getElementsByClassName('input-group-text');
//     const currentAmount = useTotalAmount().totalAmount;
//     const [updateOfAmount, getUpdateOfAmount] = useState(useTotalAmount().totalAmount);
//     useEffect(() => {
//         getUpdateOfAmount(currentAmount);
//     }, [AmountElements]);
//     return updateOfAmount;
// }

// const useTotalAmount = () => {
//     const [carterTotalAmount, getTotalAmount] = useState(4);
//     const increaseTotal = () => getTotalAmount(carterTotalAmount + 1);
//     //ESTA FUNCIÓN NO ES QUE NO SE ENTIENDE CON EL HOOK SINO QUE NI SIQUIERA ESTÁ SIENDO LLAMADA
//     const decreaseTotal = () => carterTotalAmount > 0 && getTotalAmount(carterTotalAmount - 1);
//     return { carterTotalAmount, increaseTotal, decreaseTotal }
// }


// const useTotalAmount = () => {
//     const [carterTotalAmount, setTotalAmount] = useState(0);
//     const utilitiesSet = useMemo(
//         () => ({ carterTotalAmount, setTotalAmount }),
//         [carterTotalAmount]
//     );
//     return utilitiesSet;
// }
// const General = () => {
//     return (
//         <BarraSuperior
//         />
//     )
// }

const General = (props) => {
    return (
        <div>
            {document.title = 'Rafaela'}
            {props.contenido}
            <BarraInferior />
        </div>
    );
}
// const increaseTotal = () => getTotalAmount(carterTotalAmount + 1);
// const decreaseTotal = () => carterTotalAmount > 0 && getTotalAmount(carterTotalAmount - 1);

// const { carterTotalAmount, increaseTotal, decreaseTotal } = useTotalAmount();
// const utilitiesSet = useTotalAmount();
// const carterTotalAmount = '5';
// const TotalAmountContext = useTotalAmount;
/*
value = { utilitiesSet } >
*/
// const useCacheProvider = () => {
//     const [content, getContent] = useState('');
//     return { content, getContent }
// }


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
        // const { content, getContent } = useCacheProvider();
        // try {
        //     const response = await fetch('/express_backend');
        //     const body = await response.json();
        //     if (response.status !== 200) {
        //         throw Error(body.message)
        //     }
        //     return body;
        // } catch (e) {
        // console.log('No se detectó caché;');
        // console.log(e);
        const response = await fetch('/express_backend');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        // localStorage.setItem('cache', JSON.stringify(body));
        return body;
        // }
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
                                <Route path={'/cart'} element={<Cart />}></Route>
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
            // previouslyExistentCart === 0 ?
            // previouslyExistentCart :
            // previouslyExistentCart + 1
    }
    const [carterTotalAmount, setTotalAmount] = useState(checkCart);
    const utilitiesSet = useMemo(
        () => ({ carterTotalAmount, setTotalAmount }),
        [carterTotalAmount]
    );
    return (
        <TotalAmountContext.Provider
            value={utilitiesSet}>
            <div>
                <Main />
            </div>
        </TotalAmountContext.Provider>
    )
}

// export default Main;


// const [carterTotalAmount, setTotalAmount] = useState(0);
// useEffect(() => {
//     const previouslyExistentCart = sessionStorage.getItem('cart-amount');
//     typeof previouslyExistentCart != 'undefined' && setTotalAmount(
//         Number(previouslyExistentCart) === 0 ?
//             Number(previouslyExistentCart) :
//             Number(previouslyExistentCart) + 1
//     );
//     console.log('¿No?');
// }, []);