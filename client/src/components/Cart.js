import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
// import { CartContentContext } from './CartContent.js';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
// import { listaDeHileras } from './Pedido.js';
// import changuillo from '../elements/imagenes/changuito.svg';

const Articulo = (props) => {
    const [currentKey, getKey] = useState(9999);
    const newKey = () => getKey(currentKey + 1);
    // const getLocalPriceWithComma = () => {
    //     const localPriceWithDot = Math.round(props.amount * Number(
    //         props.priceInt + '.' + props.priceDecimal
    //     ) * 100) / 100;
    //     const numberToArray = [...JSON.stringify(localPriceWithDot)];
    //     const dotPosition = numberToArray.indexOf('.') === -1 ?
    //         numberToArray.length + 1 : numberToArray.indexOf('.');
    //     const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
    //         '00' : numberToArray[dotPosition + 1] + '0';
    //     const ints = Math.floor(localPriceWithDot);
    //     return JSON.stringify(ints) + ',' + decimals;
    // }
    // const [localPrice, setLocalPrice] = useState(getLocalPriceWithComma());

    // const algo = listaDeArtesanias[3][5];
    return (
        <div>
            <Card height='50px' width='50px'>
                <CardImg
                    width='80%'
                    alt="Img ilustrativa"
                    src={props.imageSource}
                />
                <CardBody>
                    <CardTitle className="text-dark" tag="h5">
                        {props.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        ${props.priceInt},{props.priceDecimal} por unidad
                    </CardSubtitle>
                    {/* <CardText className="text-dark">
                        {props.description}
                    </CardText> */}
                    {/* <GestorDeCantidades
                    addNumber={increaseAmount}
                    lessenNumber={decreaseAmount}
                    currentAmount={currentAmount}
                /> */}
                    <div key={newKey} className="input-group mb-3">
                        <span className="input-group-text">{props.amount}</span>
                        <span className="input-group-text total-local">
                            ${props.localPrice}
                        </span>
                    </div>
                </CardBody>
            </Card>
            {/* <h4>{algo}</h4> */}
        </div>
    )
}

// const listaDeHileras = [['soloUno']];
const SetOfButtons = (props) => {
    return (
        <div className='container-fluid' key={'botonesDePedido' + props.key}>
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
                            {/* <img src={changuillo} alt='changuito' className='logo-mediano'></img> */}
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
        const numberToArray = [...JSON.stringify(priceWithDot)];
        const dotPosition = numberToArray.indexOf('.') === -1 ?
            numberToArray.length + 1 : numberToArray.indexOf('.');
        const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
            '00' : numberToArray[dotPosition + 1] + '0';
        const ints = Math.floor(priceWithDot);
        return JSON.stringify(ints) + ',' + decimals;
    }
    // const getTotalPriceWithComma = () => {
    //     const numberToArray = [...JSON.stringify(props.totalPrice)];
    //     const dotPosition = numberToArray.indexOf('.') === -1 ?
    //         numberToArray.length + 1 : numberToArray.indexOf('.');
    //     const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
    //         '00' : numberToArray[dotPosition + 1] + '0';
    //     const ints = Math.floor(props.totalPrice);
    //     return JSON.stringify(ints) + ',' + decimals;
    // }
    // const [totalPrice, setTotalPrice] = useState(0);
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
                                    {/* {setTotalPrice(totalPrice + Number(artesania[7] + '.' + artesania[8]))}
                                    {console.log(totalPrice)} */}
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
                                            artesania[6], artesania[7], artesania[8])}
                                    />
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
    // const hileraUnoArtesanias = [listaDeArtesanias[0], listaDeArtesanias[1], listaDeArtesanias[2], listaDeArtesanias[3], listaDeArtesanias[4], listaDeArtesanias[5]];
    // const hileraDosArtesanias = [listaDeArtesanias[6], listaDeArtesanias[7], listaDeArtesanias[8]];
    const soloArtesaniasEnCarrito = listaDeArtesanias.filter((el) => el[6] > 0);
    const localPrices = soloArtesaniasEnCarrito.map((el) => el[6] * Number(el[7] + '.' + el[8]));
    const totalPrice = localPrices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    console.log(totalPrice);
    //  console.log(listaDeArtesanias[0][6]);
    // const articulosDelCarrito = [soloArtesaniasEnCarrito];
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

