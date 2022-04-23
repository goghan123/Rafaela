import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row
} from 'reactstrap';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';
import { TotalAmountContext, storeInSessiontorage, CartContentContext } from './CartContext.js';

const hileraUnoArtesanias = [listaDeArtesanias[0], listaDeArtesanias[1], listaDeArtesanias[2]];
const hileraDosArtesanias = [listaDeArtesanias[3], listaDeArtesanias[4], listaDeArtesanias[5]];
const hileraTresArtesanias = [listaDeArtesanias[6], listaDeArtesanias[7], listaDeArtesanias[8]];

const listaDeHileras = [hileraUnoArtesanias, hileraDosArtesanias, hileraTresArtesanias];

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

export const useNewValues = () => {
    // const { totalAmount, getTotalAmount } = useTotalAmount();
    // const [totalAmount, getTotalAmount] = useState(3);
    const [localAmount, getAmount] = useState(0);
    const [currentKey, getKey] = useState(999);
    const newKey = () => getKey(currentKey + 1);

    // console.log(currentKey);
    // const newKey = currentKey;
    const increaseLocalAmount = () => {
        getAmount(localAmount + 1);
        // sessionStorage.setItem("el" + JSON.stringify(newKey), localAmount + 1);
    }
    // const fullDecrease = () => {
    //     getAmount(localAmount - 1);
    // }
    const decreaseLocalAmount = () => {
        getAmount(localAmount - 1);
        // sessionStorage.setItem(`el-${newKey}`, localAmount + 1);
    }

    return { localAmount, increaseLocalAmount, decreaseLocalAmount, newKey }
}

const Artesania = (props) => {
    // const [currentAmount, getAmount] = useState(0);
    // const [currentKey, getKey] = useState(999);
    const { localAmount, increaseLocalAmount, decreaseLocalAmount, newKey } = useNewValues();
    const decreaseFunction = () => {
        localAmount > 0 && decreaseLocalAmount();
        localAmount > 0 && props.decreaseTotalAmount();
        localAmount > 0 && sessionStorage.setItem('el-' + props.refe + '-dk', localAmount - 1);
    }
    const increaseFunction = () => {
        increaseLocalAmount();
        props.increaseTotalAmount();
        sessionStorage.setItem('el-' + props.refe + '-dk', localAmount + 1);
    }

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
                    $10,00 por unidad
                </CardSubtitle>
                <CardText>
                    {props.description}
                </CardText>
                {/* <GestorDeCantidades
                    addNumber={increaseAmount}
                    lessenNumber={decreaseAmount}
                    currentAmount={currentAmount}
                /> */}
                <div key={newKey} className="input-group mb-3">
                    <Button onClick={decreaseFunction}>-</Button>
                    <span className="input-group-text">{localAmount}</span>
                    <Button onClick={increaseFunction}>+</Button>
                </div>
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

export const Pedido = () => {
    const { carterTotalAmount, setTotalAmount } = useContext(TotalAmountContext);
    const { cartContent, setCartContent } = useContext(CartContentContext);

    const increaseTotal = () => {
        setTotalAmount(carterTotalAmount + 1);
        storeInSessiontorage(carterTotalAmount + 1);
    }
    const decreaseTotal = () => {
        carterTotalAmount > 0 && setTotalAmount(carterTotalAmount - 1);
        storeInSessiontorage(carterTotalAmount - 1);
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
            <div className="input-group mb-3 alineado-horizontal">
                <Button className='disabled' onClick={() => { }}>Anterior</Button>
                <span className="input-group-text">Página 1 de 1</span>
                <Button className='disabled' onClick={() => { }}>Siguiente</Button>
            </div>
            {listaDeHileras.map((hilera) =>
                <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                    <Row>
                        {hilera.map((artesania) => (
                            <React.Fragment key={artesania[4]}>
                                <Col sm="4" className='dePrueba'>
                                    <Artesania
                                        refe={cartContent[refCounter++]}
                                        title={artesania[0]}
                                        subtitle={artesania[2]}
                                        imageSource={artesania[1]}
                                        description={artesania[3]}
                                        increaseTotalAmount={increaseTotal}
                                        decreaseTotalAmount={decreaseTotal}
                                    />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                    <br></br>
                </div>
            )}
        </div>
    )
}
        // <div key='divPedido'>
        //     <br></br>
        //     {listaDeHileras.map((hilera) =>
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
