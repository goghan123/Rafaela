import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row
} from 'reactstrap';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import { TotalAmountContext, storeInSessiontorage, CartContentContext, createCartContentObject } from './CartContent.js';
// import changuillo from '../elements/imagenes/changuito.svg';


// const hileraUnoArtesanias = [listaDeArtesanias[0], listaDeArtesanias[1], listaDeArtesanias[2]];
// const hileraDosArtesanias = [listaDeArtesanias[3], listaDeArtesanias[4], listaDeArtesanias[5]];
// const hileraTresArtesanias = [listaDeArtesanias[6], listaDeArtesanias[7], listaDeArtesanias[8]];

const listaParaHileras = [listaDeArtesanias];

// const GestorDeCantidades = (props) => {
//     const [currentKey, getKey] = useState(999);
//     const newKey = () => getKey(currentKey + 1);
//     return (
//         <div key={newKey} className="input-group mb-3">
//             <Button onClick={() => props.addNumber}>+</Button>
//             <span className="input-group-text">{props.currentAmount}</span>
//             <Button onClick={() => props.lessenNumber}>-</Button>
//         </div>
//     )
// }

const useNewValues = () => {
    // const { totalAmount, getTotalAmount } = useTotalAmount();
    // const [totalAmount, getTotalAmount] = useState(3);
    const [currentKey, getKey] = useState(999);
    const newKey = () => getKey(currentKey + 1);

    // console.log(currentKey);
    // const newKey = currentKey;


    return newKey;
}

const Artesania = (props) => {
    // const [currentAmount, getAmount] = useState(0);
    // const [currentKey, getKey] = useState(999);
    const referenciaDeArtesania = JSON.parse(sessionStorage.getItem('cart-content'))[props.refe];

    const [localAmount, getAmount] = useState(referenciaDeArtesania);
    const getLocalPrice = (operation) => {
        const previousLocalPrice = Math.round((localAmount + operation) * Number(
            props.priceInt + '.' + props.priceDecimal
        ) * 100) / 100;
        const numberToArray = [...JSON.stringify(previousLocalPrice)];
        const dotPosition = numberToArray.indexOf('.') === -1 ?
            numberToArray.length + 1 : numberToArray.indexOf('.');
        const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
            '00' : numberToArray[dotPosition + 1] + '0';
        const ints = Math.floor(previousLocalPrice);
        return JSON.stringify(ints) + ',' + decimals;
    }
    const [localPrice, setLocalPrice] = useState(getLocalPrice(0));



    // const increaseLocalAmount = () => {
    //     getAmount(localAmount + 1);
    //     // sessionStorage.setItem("el" + JSON.stringify(newKey), localAmount + 1);
    // }
    // // const fullDecrease = () => {
    // //     getAmount(localAmount - 1);
    // // }
    // const decreaseLocalAmount = () => {
    //     getAmount(localAmount - 1);
    //     // sessionStorage.setItem(`el-${newKey}`, localAmount + 1);
    // }
    // console.log(smthg);
    const newKey = useNewValues();
    const { cartContent, setCartContent } = useContext(CartContentContext);
    // const voidFunction = () => { };
    // console.log(cartContent);

    const decreaseFunction = () => {
        const decreaseIt = () => {
            getAmount(localAmount - 1);
            props.decreaseTotalAmount();
            let editableContentObject = JSON.parse(JSON.stringify(cartContent));
            editableContentObject[props.refe] = localAmount - 1;
            setCartContent(editableContentObject);
            sessionStorage.setItem('cart-content', JSON.stringify(cartContent));
            setLocalPrice((localAmount - 1) * Number(props.priceInt + '.' + props.priceDecimal));
            setLocalPrice(getLocalPrice(-1));
        }
        localAmount > 0 && decreaseIt();
    }

    const increaseFunction = () => {
        const currentAmount = localAmount + 1;
        getAmount(localAmount + 1);
        props.increaseTotalAmount();
        let editableContentObject = JSON.parse(JSON.stringify(cartContent));
        editableContentObject[props.refe] = currentAmount;
        setCartContent(editableContentObject);
        sessionStorage.setItem('cart-content', JSON.stringify(editableContentObject));
        setLocalPrice(getLocalPrice(1));
    }

    // const resultado = () => {
    //     return localAmount * Number(props.priceInt + '.' + props.priceDecimal);
    // }

    return (
        <Card height='50px' width='50px'>
            <CardImg
                width='100%'
                alt="Img ilustrativa"
                src={props.imageSource}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    ${props.priceInt},{
                        props.priceDecimal === 0 ? '00' : props.priceDecimal
                    } por unidad
                </CardSubtitle>
                <CardText>
                    {props.description}
                </CardText>
                {/* <GestorDeCantidades
                    addNumber={increaseAmount}
                    lessenNumber={decreaseAmount}
                    currentAmount={currentAmount}
                /> */}
                {/* <div className='container-fluid'>
                    <Col sm="6"> */}
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
                {/* </Col>
                    <Col sm="6">
                        <p>{localAmount}</p>
                    </Col> */}
                {/* </div> */}
            </CardBody>
        </Card>
    )
}

// const useNewChildrenKey = () => {
//     const [childrenKey, setChildrenKey] = useState(100);
//     return { childrenKey, setChildrenKey };
// }

// export const useTotalAmount = () => {

//     const [totalAmount, getTotalAmount] = useState(4);
//     return { totalAmount, getTotalAmount }
// }
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
    const { carterTotalAmount, setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent, setCartContent } = useContext(CartContentContext);
    const references = Object.keys(cartContent);
    
    setTotalAmount(Object.values(cartContent).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    ));

    const increaseTotal = () => {
        setTotalAmount(carterTotalAmount + 1);
        storeInSessiontorage(carterTotalAmount + 1);
    }
    const decreaseTotal = () => {
        carterTotalAmount > 0 && setTotalAmount(carterTotalAmount - 1);
        carterTotalAmount > 0 && storeInSessiontorage(carterTotalAmount - 1);
    }
    const vaciarCarrito = () => {
        const emptyCart = createCartContentObject(references);
        setCartContent(emptyCart);
        setTotalAmount(0);
        sessionStorage.setItem('cart-content', JSON.stringify(emptyCart));
        sessionStorage.setItem('cart-amount', 0);
    }
    // const { totalAmount, getTotalAmount } = useTotalAmount();
    // const { childrenKey, setChildrenKey } = useNewChildrenKey();
    // const [childrenKey, setChildrenKey] = useState(100);


    //     {/* {setChildrenKey(childrenKey + 1)} */}
    // {/* key={childrenKey} */}
    // const totalAmount = useNewValues().totalAmount;
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
                                        increaseTotalAmount={increaseTotal}
                                        decreaseTotalAmount={decreaseTotal}
                                        priceInt={Number(artesania[7])}
                                        priceDecimal={Number(artesania[8])}
                                    />
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
        // <div key='divPedido'>
        //     <br></br>
        //     {listaParaHileras.map((hilera) =>
        //         <React.Fragment key={hilera[0][4] + hilera[0][4]}>
        //             <CardGroup>
        //                 {hilera.map((artesania) => (
        //                     <React.Fragment key={artesania[4]}>
        //                         <Artesania
        //                             title={artesania[0]}
        //                             subtitle={artesania[2]}
        //                             imageSource={artesania[1]}
        //                             description={artesania[3]}
        //                         />
        //                     </React.Fragment>
        //                 ))}
        //             </CardGroup>
        //         </React.Fragment>
        //     )}
        //     <br></br>
        //     <br></br>
        // </div>
//     )
// }

//<div className='App-header'>
//<h1>Caíste, no me podés pedir nada. Todavía no funciono =)</h1>
//</div>
/*  
barks con almendras y cada cual con los tres choco
con galletitas oreo
con sal marina
con cereales
con menta
tulipas de chocolate
las tabletas
semiesferas de chocolate con ddl
milhojas de ddl

tableta con cereales
tableta con caramelo
tableta con menta
trufa con frutos del bosque
minihuevitos blancos
minihuevitos semiamargo
minihuevitos leche
 */
/* 
<div key='contenedor-componentes'>
{artesanias.map((artesania) => (
    <div key={artesania[0]} className='App-header'>
        <p>{artesania[0]}</p>
        <p>{artesania[1]}</p>
    </div>
))}
</div>
 */
