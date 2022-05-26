import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState, useMemo } from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Outlet,
    Switch
} from "react-router-dom";
import './styles.css';
import { UpperBar } from './components/UpperBar.js';
import { AboutUs } from './components/AboutUs.js';
import { Delivery } from './components/Delivery.js';
import { Home } from './components/Home.js';
import { Contact } from './components/Contact.js';
import { Products } from './components/Products.js';
import { PageNotFound } from './components/PageNotFound.js';
import { TotalAmountContext } from './elements/cartContent.js';
import { CartContentContext } from './elements/cartContent.js';
import { Cart } from './components/Cart.js';
import { newCartContent } from './elements/handcraftsList.js';

const General = (props) => {
    return (
        <div>
            {props.content}
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
                <UpperBar
                />
                <Router>
                    <div>
                        {                        //Hasta acá
                        }
                        <Switch>
                            <Routes>
                                <Route path='/' element={<General content={<Outlet />} />}>
                                    <Route index element={<Home />}></Route>
                                    <Route path={'/Rafaela/products'} element={<Products />}></Route>
                                    <Route path={'Rafaela/contact'} element={<Contact />}></Route>
                                    <Route path={'/rafaela/delivery'} element={<Delivery />}></Route>
                                    <Route path={'rafaela/about'} element={<AboutUs />}></Route>
                                    <Route path={'/cart'} element={<Cart />}></Route>
                                    <Route path={'*'} element={<PageNotFound />}></Route>
                                </Route>
                            </Routes>
                        </Switch>
                        {/* {console.log(this.state.data)} */}
                    </div>
                </Router >
            </div >
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
