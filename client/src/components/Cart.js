import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import { TotalAmountContext, CartContentContext } from './CartContent.js';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import { passToCommaFormat } from '../elements/someFunctions.js';

const Articulo = (props) => {
    const [currentKey, getKey] = useState(9999);
    const newKey = () => getKey(currentKey + 1);
    return (
        <div>
            <Card height='50px' width='50px'>
                <CardImg
                    width='80%'
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
        <div className='container-fluid' key='botonesDePedido'>
            <Row>
                <Col sm="5">
                    <div className="orientacion-derecha">
                        <Button href="/pedido" onClick={() => { }}>
                            Volver al catálogo
                        </Button>
                    </div>
                </Col>
                <Col sm="2">
                    <div className="input-group mb-3 alineado-horizontal">
                        <span className="input-group-text"
                        >Total en carrito: ${props.totalPrice}</span>
                    </div>
                </Col>
                <Col sm="5">
                    <div className="input-group mb-3">
                        <Button className='disabled' onClick={() => { }}>
                            Continuar
                        </Button>
                    </div>
                </Col>
            </Row>
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
    return (
        <div key='hayContenidoEnCarrito'>
            <br></br>
            <br></br>
            <br></br>
            <SetOfButtons key={0} totalPrice={priceToCommaFormat()} />
            {[props.contenido].map((hilera) =>
                <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                    <Row>
                        {hilera.map((artesania) => (
                            <React.Fragment key={artesania[4]}>
                                <Col sm="2" className='margen-horizontal'>
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
                    <br></br>
                </div>
            )}
            <SetOfButtons key={1} totalPrice={priceToCommaFormat()} />
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
        <div key='cart'>
            {soloArtesaniasEnCarrito.length > 0 ?
                <HayContenidoEnCarrito
                    contenido={soloArtesaniasEnCarrito}
                    totalPrice={totalPrice} /> :
                <NoHayContenidoEnCarrito />
            }
        </div>
    )
}
