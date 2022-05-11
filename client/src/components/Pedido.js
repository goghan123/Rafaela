import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row
} from 'reactstrap';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import {
    TotalAmountContext,
    CartContentContext
} from '../elements/cartContent.js';
import { passToCommaFormat } from '../elements/someFunctions.js';
import { useResponsiveTools } from '../elements/someFunctions.js';


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

const SetOfButtons = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='container-fluid' key='botones-de-pedido'>
            <Row>
                {
                    windowWidth >= 768 &&
                    < Col sm='4'>
                        <div>
                            {/* <Button href="/pedido" onClick={props.vaciarCarrito}>
                            Vaciar
                        </Button> */}
                        </div>
                    </Col>
                }
                <Col sm={windowWidth >= 768 ? '4' : '12'} className="alineado-horizontal">
                    <div className="input-group mb-3 alineado-horizontal">
                        <Button className='disabled' onClick={() => { }}>{windowWidth >= 1180 ? "Anterior" : "<"}</Button>
                        <span className="input-group-text">{windowWidth >= 1180 ? "Página 1 de 1" : "Pág. 1 de 1"}</span>
                        <Button className='disabled' onClick={() => { }}>{windowWidth >= 1180 ? "Siguiente" : ">"}</Button>
                    </div>
                </Col>

                {
                    windowWidth < 768 &&
                    <Col sm='12'>
                        <div className="alineado-horizontal">
                            <Button href="/carrito">
                                Continuar al carrito
                            </Button>
                        </div>
                    </Col>
                }
                {
                    windowWidth >= 768 &&
                    <Col sm="4">
                        <div className="alineado-horizontal">

                            <Button href="/carrito">
                                Continuar al carrito
                            </Button>
                        </div>
                    </Col>
                }
            </Row>
        </div >
    )
}
// {windowWidth < 768 && <br></br>}

// const SetOfButtons = (props) => {
//     return (
//         <div className='set-of-buttons' key='botones-de-pedido'>
//             <Col sm='2'>
//                 <div>
//                     <Button href="/pedido" onClick={props.vaciarCarrito}>
//                         Vaciar
//                     </Button>
//                 </div>
//             </Col>
//             <Col sm='5'>
//                 <div className="input-group mb-3">
//                     <Button className='disabled' onClick={() => { }}>Anterior</Button>
//                     <span className="input-group-text">Página 1 de 1</span>
//                     <Button className='disabled' onClick={() => { }}>Siguiente</Button>
//                 </div>
//             </Col>
//             <Col sm='2'>
//                 <div>
//                     <Button href="/carrito">
//                         Continuar al carrito
//                     </Button>
//                 </div>
//             </Col>
//         </div>
//     )
// }

export const Pedido = () => {
    const { setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent } = useContext(CartContentContext);
    const references = Object.keys(cartContent);

    setTotalAmount(Object.values(cartContent).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ));

    let refCounter = 0;
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='fondo'>
            <div className='margenes' key='divPedido'>
                <br></br>
                <br></br>
                {
                    windowWidth >= 768 &&
                    <div>
                        <br></br>
                        <br></br>
                    </div>
                }
                <SetOfButtons />
                {
                    windowWidth < 768 && <br></br>
                }
                {listaParaHileras.map((hilera) =>
                    <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                        <Row>
                            {hilera.map((artesania) => (
                                <React.Fragment key={artesania[4]}>
                                    <Col sm={windowWidth >= 768 ? '4' : windowWidth < 768 && windowWidth > 650 ? '6' : '12'} className='margen-horizontal'>
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
                    </div>
                )}
                <SetOfButtons />
            </div>
            {
                windowWidth < 768 &&
                <br></br>
            }
        </div>
    )
}
