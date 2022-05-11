import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { TotalAmountContext, CartContentContext } from '../elements/cartContent.js';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import { passToCommaFormat, useResponsiveTools } from '../elements/someFunctions.js';

const Articulo = (props) => {
    const [currentKey, getKey] = useState(9999);
    const newKey = () => getKey(currentKey + 1);
    return (
        <div>
            <Card height='50px' width='50px'>
                <CardImg
                    alt="Img ilustrativa"
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
        <div className='cart-set-of-buttons' key='botonesDePedido'>
            <Button href="/pedido" className='centrado' onClick={() => { }}>
                Volver al catálogo
            </Button>
            <span className="input-group-text side-margins multiline">
                Total: ${props.totalPrice}
            </span>
            <Button className='disabled' onClick={() => { }}>
                Continuar
            </Button>
        </div>
    )
}

const HayContenidoEnCarrito = (props) => {
    const priceToCommaFormat = (amount, priceInt, priceDecimal) => {
        const priceWithDot = typeof amount === 'undefined' ?
            props.totalPrice :
            Math.round(amount * Number(
                priceInt + '.' + priceDecimal
            ) * 100) / 100;
        return passToCommaFormat(priceWithDot);
    }
    const { windowWidth, windowHeight } = useResponsiveTools();
    return (
        <div className='de-prueba' key='hayContenidoEnCarrito'>
            {
                windowWidth < 575 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            }
            <br></br>
            {
                windowHeight < 768 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            }
            <SetOfButtons key={0} totalPrice={priceToCommaFormat()} />
            <br></br>
            {[props.contenido].map((hilera) =>
                <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                    <Row>
                        {hilera.map((artesania) => (
                            <React.Fragment key={artesania[4]}>
                                <Col sm={
                                    windowWidth > 1260 ? '3' :
                                        windowWidth <= 1260 && windowWidth > 660 ? '4' :
                                            windowWidth <= 660 && '6'}
                                    className='margen-horizontal'>
                                    <Articulo
                                        refe={artesania[5]}
                                        title={artesania[0]}
                                        subtitle={artesania[2]}
                                        imageSource={artesania[1]}
                                        description={artesania[3]}
                                        amount={artesania[6]}
                                        priceInt={artesania[7]}
                                        priceDecimal={artesania[8]}
                                        localPrice={priceToCommaFormat(
                                            artesania[6], artesania[7], artesania[8])} />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    )
}

const NoHayContenidoEnCarrito = () => {
    return (
        <div key='noHayContenidoEnCarrito' className='App-header'>
            <h1>El carrito aún está vacío</h1>
            <div className="orientacion-derecha">
                <Button href="/pedido" onClick={() => { }}>
                    ¡Al catálogo!
                </Button>
            </div>
        </div>
    )
}

export const Cart = () => {
    const { setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent } = useContext(CartContentContext);
    setTotalAmount(Object.values(cartContent).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ));
    const soloArtesaniasEnCarrito = listaDeArtesanias.filter((el) => el[6] > 0);
    const localPrices = soloArtesaniasEnCarrito.map((el) => el[6] * Number(el[7] + '.' + el[8]));
    const totalPrice = localPrices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

    return (
        <div className='fondo'>
            {
                soloArtesaniasEnCarrito.length > 0 ?
                    <HayContenidoEnCarrito
                        contenido={soloArtesaniasEnCarrito}
                        totalPrice={totalPrice} /> :
                    <NoHayContenidoEnCarrito />
            }
        </div>
    )
}
