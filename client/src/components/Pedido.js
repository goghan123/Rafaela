import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row
} from 'reactstrap';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import {
    TotalAmountContext,
    CartContentContext, createCartContentObject
} from './CartContent.js';
import { passToCommaFormat } from '../elements/someFunctions.js';

const listaParaHileras = [listaDeArtesanias];

const useNewValues = () => {
    const [currentKey, getKey] = useState(999);
    const newKey = () => getKey(currentKey + 1);
    return newKey;
}

const Artesania = (props) => {
    const { carterTotalAmount, setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent, setCartContent } = useContext(CartContentContext);

    const referenciaDeArtesania = JSON.parse(
        sessionStorage.getItem('cart-content'))[props.refe];
    const [localAmount, getAmount] = useState(referenciaDeArtesania);

    const getLocalPrice = (operation) => {
        const localPriceWithDot = Math.round((localAmount + operation) * Number(
            props.priceInt + '.' + props.priceDecimal
        ) * 100) / 100;
        return passToCommaFormat(localPriceWithDot);
    }
    const [localPrice, setLocalPrice] = useState(getLocalPrice(0));

    const newKey = useNewValues();

    const generalOperator = (operation) => {
        getAmount(localAmount + operation);
        setTotalAmount(carterTotalAmount + operation);
        sessionStorage.setItem('cart-amount', carterTotalAmount + operation);
        let editableContentObject = JSON.parse(JSON.stringify(cartContent));
        editableContentObject[props.refe] = localAmount + operation;
        setCartContent(editableContentObject);
        sessionStorage.setItem('cart-content', JSON.stringify(editableContentObject));
        setLocalPrice(getLocalPrice(operation));
    }
    const decreaseFunction = () => {
        localAmount > 0 && generalOperator(-1);
    }
    const increaseFunction = () => {
        generalOperator(1);
    }

    return (
        <Card height='50px' width='50px'>
            <CardImg
                width='100%'
                alt="Img ilustrativa"
                src={props.imageSource} />
            <CardBody>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6" >
                    ${props.priceInt},{
                        props.priceDecimal === 0 ? '00' : props.priceDecimal
                    } por unidad
                </CardSubtitle>
                <CardText>
                    {props.description}
                </CardText>
                <div key={newKey} className="input-group">
                    <Button onClick={decreaseFunction}>-</Button>
                    <span className="input-group-text">{localAmount}</span>
                    <Button onClick={increaseFunction}>+</Button>
                    {
                        localAmount ?
                            <span className="input-group-text total-local">
                                ${localPrice}
                            </span> :
                            <br></br>
                    }
                </div>
            </CardBody>
        </Card>
    )
}

const SetOfButtons = (props) => {
    return (
        <div className='container-fluid' key='botones-de-pedido'>
            <Row>
                <Col sm="4">
                    <div className="alineado-horizontal">
                        <Button href="/pedido" onClick={props.vaciarCarrito}>
                            Vaciar
                        </Button>
                    </div>
                </Col>
                <Col sm="4">
                    <div className="input-group mb-3 alineado-horizontal">
                        <Button className='disabled' onClick={() => { }}>Anterior</Button>
                        <span className="input-group-text">Página 1 de 1</span>
                        <Button className='disabled' onClick={() => { }}>Siguiente</Button>
                    </div>
                </Col>
                <Col sm="4">
                    <div className="alineado-horizontal">
                        <Button href="/carrito">
                            Continuar al carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export const Pedido = () => {
    const { setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent, setCartContent } = useContext(CartContentContext);
    const references = Object.keys(cartContent);

    setTotalAmount(Object.values(cartContent).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ));
    const vaciarCarrito = () => {
        const emptyCart = createCartContentObject(references);
        setCartContent(emptyCart);
        setTotalAmount(0);
        sessionStorage.setItem('cart-content', JSON.stringify(emptyCart));
        sessionStorage.setItem('cart-amount', 0);
    }

    let refCounter = 0;
    return (
        <div key='divPedido'>
            <br></br>
            <br></br>
            <br></br>
            <SetOfButtons vaciarCarrito={vaciarCarrito} />
            {listaParaHileras.map((hilera) =>
                <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                    <Row>
                        {hilera.map((artesania) => (
                            <React.Fragment key={artesania[4]}>
                                <Col sm="4" className='margen-horizontal'>
                                    <Artesania
                                        refe={references[refCounter++]}
                                        title={artesania[0]}
                                        subtitle={artesania[2]}
                                        imageSource={artesania[1]}
                                        description={artesania[3]}
                                        priceInt={Number(artesania[7])}
                                        priceDecimal={Number(artesania[8])} />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                    <br></br>
                </div>
            )}
            <SetOfButtons vaciarCarrito={vaciarCarrito} />
        </div>
    )
}
