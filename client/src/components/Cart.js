import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { TotalAmountContext, CartContentContext } from '../elements/cartContent.js';
import { handcraftsList } from '../elements/handcraftsList.js';
import { passToCommaFormat, useResponsiveTools } from '../elements/someFunctions.js';
import { SocialNetworks } from './SocialNetworks.js';
import { Link as ReactLink } from 'react-router-dom';
import { getCartContent } from '../elements/cartContent.js';

const Article = (props) => {
    const [currentKey, getKey] = useState(9999);
    const newKey = () => getKey(currentKey + 1);
    return (
        <div>
            <Card height='50px' width='50px'>
                <CardImg
                    alt="illustrative_image"
                    src={props.imageSource} />
                <CardBody>
                    <CardTitle className="text-dark" tag="h5">
                        {props.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6" >
                        ${props.priceInt},{props.priceDecimal} por unidad
                    </CardSubtitle>
                    <div key={newKey} className="input-group mb-3">
                        <span className="input-group-text">{props.amount}</span>
                        <span className="input-group-text total-local">
                            ${props.localPrice}
                        </span>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

const SetOfButtons = (props) => {
    return (
        <div className='cart-set-of-buttons' key='orderButtons'>
            <ReactLink to={process.env.REACT_APP_FOR_PATH + "/products"} className='btn btn-secondary'>
                Return to catalogue
            </ReactLink>
            <span className="input-group-text side-margins multiline">
                Total: ${props.totalPrice}
            </span>
            <Button className='disabled' onClick={() => { }}>
                Continue
            </Button>
        </div>
    )
}

const HaveContentInCart = (props) => {
    const priceToCommaFormat = (amount, priceInt, priceDecimal) => {
        const priceWithDot = typeof amount === 'undefined' ?
            props.totalPrice :
            Math.round(amount * Number(
                priceInt + '.' + priceDecimal
            ) * 100) / 100;
        return passToCommaFormat(priceWithDot);
    }
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='content-in-cart' key='haveContentInCart'>
            <br></br>
            <br></br>
            <br></br>
            <SetOfButtons key={0} totalPrice={priceToCommaFormat()} />
            <br></br>
            {[props.content].map((row) =>
                <div className='container-fluid' key={row[0][4] + row[0][4]}>
                    <Row>
                        {row.map((handcraft) => (
                            <React.Fragment key={handcraft[4]}>
                                <Col sm={
                                    windowWidth > 1260 ? '3' :
                                        windowWidth <= 1260 && windowWidth > 660 ? '4' :
                                            windowWidth <= 660 && '6'}
                                    className='horizontal-margin'>
                                    <Article
                                        refe={handcraft[5]}
                                        title={handcraft[0]}
                                        subtitle={handcraft[2]}
                                        imageSource={handcraft[1]}
                                        description={handcraft[3]}
                                        amount={handcraft[6]}
                                        priceInt={handcraft[7]}
                                        priceDecimal={handcraft[8]}
                                        localPrice={priceToCommaFormat(
                                            handcraft[6], handcraft[7], handcraft[8])} />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    )
}

const NoContentInCart = () => {
    return (
        <div key='noContentInCart' className='App-header'>
            <h1>Cart is still empty</h1>
            <div className="right-oriented">
                <ReactLink type='button' to={process.env.REACT_APP_FOR_PATH + "/products"} replace className='btn btn-secondary'>
                    To the catalogue!
                </ReactLink>
            </div>
        </div>
    )
}

// const useRefresher = () => {
//     const [anyValue, setAnyValue] = useState(0);
//     return { anyValue, setAnyValue };
// }

export const Cart = () => {
    const { setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent } = useContext(CartContentContext);
    // const [handcrafts, setHandcrafts] = useState(handcraftsList);
    //     console.log(handcrafts);
    // console.log(cartContent);
    // const updatedCartContent = getCartContent();
    setTotalAmount(Object.values(cartContent).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ));
    const updatedCartAmounts = Object.values(cartContent);
    // console.log(updatedCartAmounts);

    // console.log(updatedCartAmounts.slice(0, 3));
    let value = 0;
    // * 0 + updatedCartAmounts[value++]
    // const localHandcraftsList = handcraftsList;
    const updatedHandcraftsList = handcraftsList.map((el) => [
        ...el.slice(0, 6),
        el[6] * 0 + updatedCartAmounts[value++],
        ...el.slice(7)
    ]);
    console.log(updatedHandcraftsList);


    const onlyHandcraftsInCart = updatedHandcraftsList.filter((el) => el[6] > 0);
    const localPrices = onlyHandcraftsInCart.map((el) => el[6] * Number(el[7] + '.' + el[8]));
    const totalPrice = localPrices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    /*
    importar objeto con contenido de carrito
    volverlo array
    importar array de artesanías y crear copia local
    por cada par del array exobjeto (clave, valor), ponerle ese valor al [6] del array
    conectar cables con viejo código
    */

    // sessionStorage.setItem('refresh-cart-page', 'true');
    // const [refreshOnce, setRefresh] = useState(shouldRefreshCartPage === 'true' ? true : false);
    // useEffect(() => {
    // const shouldRefreshCartPage = sessionStorage.getItem('force-cart-page-rendering');


    // const refreshCartPage = () => {
    //     sessionStorage.setItem('force-cart-page-rendering', 'false');
    //     // document.location.reload();
    // }
    // const doNotRefreshCartPage = () => {
    //     // return () => window.addEventListener('load', function () {
    //     sessionStorage.setItem('force-cart-page-rendering', 'true');

    //     // });

    //     // return () => window.removeEventListener('load', function () {
    //     //     sessionStorage.setItem('force-cart-page-rendering', 'true');
    //     // });
    // }
    // sessionStorage.setItem('force-cart-page-rendering', true);
    // useEffect(() => {
    //     // document.location.reload();

    //     sessionStorage.getItem('force-cart-page-rendering') === 'false' ?
    //         doNotRefreshCartPage() :
    //         // typeof(sessionStorage.getItem('force-cart-page-rendering')) === 'undefined' ?
    //         refreshCartPage();
    // }, [])
    // const whetherToReloadPage = sessionStorage.getItem('force-cart-page-rendering');
    // // const [reload, setReload] = useState(whetherToReloadPage === 'true' ? true : false);
    // const reloadPage = useCallback(() => {

    //     document.location.reload();

    // }, [whetherToReloadPage])


    /*
    
        useEffect(() => {
            const refreshCartPage = () => {
                sessionStorage.setItem('force-cart-page-rendering', 'false');
                document.location.reload();
            }
            const doNotRefreshCartPage = () => {
                window.addEventListener('load', function () {
                    sessionStorage.setItem('force-cart-page-rendering', 'true');
                });
                // return () => window.removeEventListener('load', function () {
                //     sessionStorage.setItem('force-cart-page-rendering', 'true');
                // });
            }
            // sessionStorage.setItem('force-cart-page-rendering', true);
            sessionStorage.getItem('force-cart-page-rendering') === 'false' ?
                doNotRefreshCartPage() :
                // typeof(sessionStorage.getItem('force-cart-page-rendering')) === 'undefined' ?
                refreshCartPage();
        }, [])
    */

    // useRefresher();
    // alert('Recarga disparada');
    // }, []);
    // const { anyValue, setAnyValue } = useRefresher();
    // const runRefresher = () => {
    //     setAnyValue(anyValue + 1);
    // }
    // window.addEventListener('load', function () {
    //     runRefresher();
    // })
    // return useCallback(() => {
    console.log('LLamado por fuera del return');
    return (
        <div className='background'>
            {console.log('Componente llamado')}
            {/* {sessionStorage.setItem('force-cart-page-rendering', 'true')} */}
            {/* {runRefresher} */}
            {/* {console.log(onlyHandcraftsInCart)}
                {console.log(cartContent)} */}
            {
                onlyHandcraftsInCart.length > 0 ?
                    <HaveContentInCart
                        content={onlyHandcraftsInCart}
                        totalPrice={totalPrice} /> :
                    <NoContentInCart />
            }
            <SocialNetworks />
        </div>
    )
    // }, [onlyHandcraftsInCart, totalPrice])


    // const RenderIt = () => {
    //     sessionStorage.setItem('force-cart-page-rendering', 'true');
    //     return (
    //         <div className='background'>
    //             {/* {sessionStorage.setItem('force-cart-page-rendering', 'true')} */}
    //             {/* {runRefresher} */}
    //             {/* {console.log(onlyHandcraftsInCart)}
    //             {console.log(cartContent)} */}
    //             {
    //                 onlyHandcraftsInCart.length > 0 ?
    //                     <HaveContentInCart
    //                         content={onlyHandcraftsInCart}
    //                         totalPrice={totalPrice} /> :
    //                     <NoContentInCart />
    //             }
    //             <SocialNetworks />
    //         </div>
    //     )
    // }

    // const refreshIt = () => {
    //     console.log('Refresher activated')
    //     document.location.reload();
    // }

    // const checkerTwo = () => {
    //     sessionStorage.setItem('force-cart-page-rendering', 'false');
    //     console.log('Checker two');
    // }

    // const checkerOne = () => {
    //     sessionStorage.setItem('force-cart-page-rendering', 'true');
    //     console.log('Checker one');
    // }

    // !sessionStorage.getItem('force-cart-page-rendering') ?
    //     checkerOne() :
    //     checkerTwo();
    // return sessionStorage.getItem('force-cart-page-rendering') === 'true' ?
    //     refreshIt() :
    //     RenderIt();
}
