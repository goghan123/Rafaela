import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState, useMemo } from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
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
                        <Routes>
                            <Link path='/' element={<General content={<Outlet />} />}>
                                <Link index element={<Home />}></Link>
                                <Link path={'/Rafaela/products'} element={<Products />}></Link>
                                <Link path={'Rafaela/contact'} element={<Contact />}></Link>
                                <Link path={'/rafaela/delivery'} element={<Delivery />}></Link>
                                <Link path={'rafaela/about'} element={<AboutUs />}></Link>
                                <Link path={'/cart'} element={<Cart />}></Link>
                                <Link path={'*'} element={<PageNotFound />}></Link>
                            </Link>
                        </Routes>
                        {/* {console.log(this.state.data)} */}
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
