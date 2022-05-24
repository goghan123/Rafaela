/*
Páginas hechas receptivas:

Hechas:
BarraSuperior 03/05/2022 (04/05/2022)
BarraInferior 03/05/2022
Contacto 04/05/2022
Inicio 05/05/2022
SobreNosotros 04/05/2022
PaginaNoEncontrada 05/05/2022
Ubicacion 05/05/2022
Pedido 06/05/2022
Cart 11/05/2022




Pendientes:








<div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Inicio
                    </NavLink>
                </NavItem>
                <Dropdown
                    nav
                    toggle={function noRefCheck() { }}
                >
                    <DropdownToggle
                        caret
                        nav
                    >
                        Nuestros chocolates
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            Choco1
                        </DropdownItem>
                        <DropdownItem>
                            Choco2
                        </DropdownItem>
                        <DropdownItem>
                            Choco3
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Another Action
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink href="#">
                        Dónde estamos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="https://charlieandthechocolatefactoryfilm.fandom.com/wiki/Augustus_Gloop"
                    >
                        Choco-choco la-la choco-choco te-te
                    </NavLink>
                </NavItem>
            </Nav>
        </div> */




// ESTO EN MARCO DE UN <Router></Router> FUNCIONA PERFECTAMENTE PERO ES UN ENLACE FEO
//         <Link to='/sobre'>Sobre nosotros</Link>







export const Pedido = () => {
    // const { childrenKey, setChildrenKey } = useNewChildrenKey();
    // const [childrenKey, setChildrenKey] = useState(100);


    //     {/* {setChildrenKey(childrenKey + 1)} */}
    // {/* key={childrenKey} */}




    //     return (
    //         <Row>
    //             <Col sm="6">
    //                 <Card body>
    //                     <CardTitle tag="h5">
    //                         Special Title Treatment
    //                     </CardTitle>
    //                     <CardText>
    //                         With supporting text below as a natural lead-in to additional content.
    //                     </CardText>
    //                     <Button>
    //                         Go somewhere
    //                     </Button>
    //                 </Card>
    //             </Col>
    //             <Col sm="6">
    //                 <Card body>
    //                     <CardTitle tag="h5">
    //                         Special Title Treatment
    //                     </CardTitle>
    //                     <CardText>
    //                         With supporting text below as a natural lead-in to additional content.
    //                     </CardText>
    //                     <Button>
    //                         Go somewhere
    //                     </Button>
    //                 </Card>
    //             </Col>
    //         </Row>

    //         <div key='divPedido'>
    //             <br></br>
    //             {listaDeHileras.map((hilera) =>
    //                 <React.Fragment key={hilera[0][4] + hilera[0][4]}>
    //                     <CardGroup>
    //                         {hilera.map((artesania) => (
    //                             <React.Fragment key={artesania[4]}>
    //                                 <Artesania
    //                                     title={artesania[0]}
    //                                     subtitle={artesania[2]}
    //                                     imageSource={artesania[1]}
    //                                     description={artesania[3]}
    //                                 />
    //                             </React.Fragment>
    //                         ))}
    //                     </CardGroup>
    //                 </React.Fragment>
    //             )}
    //             <br></br>
    //             <br></br>
    //         </div>
    //     )
    // }

    // <div className='container-fluid'>
    //                     <Row className='alineado-horizontal'>
    //                         <Col>
    //                             <Button>
    //                                 +
    //                             </Button>
    //                         </Col>
    //                         <Col>
    //                             <Input
    //                                 id={"idDeCompra-" + props.title}
    //                                 name="idDeCompra"
    //                                 placeholder="0"
    //                                 type="idDeCompra"
    //                             />
    //                         </Col>
    //                         <Col>
    //                             <Button>
    //                                 -
    //                             </Button>
    //                         </Col>
    //                     </Row>
    //                 </div>



    // const General = (props) => {
    //     return (
    //         <div>
    //             {document.title = 'Rafaela'}
    //             {props.contenido}
    //             <BarraInferior />
    //         </div>
    //     );
    // }

    // import { getCartContent } from './components/CartContent.js';

    // const increaseTotal = () => getTotalAmount(carterTotalAmount + 1);
    // const decreaseTotal = () => carterTotalAmount > 0 && getTotalAmount(carterTotalAmount - 1);

    // const { carterTotalAmount, increaseTotal, decreaseTotal } = useTotalAmount();
    // const utilitiesSet = useTotalAmount();
    // const carterTotalAmount = '5';
    // const TotalAmountContext = useTotalAmount;
    /*
    value = { utilitiesSet } >
    */
    // const useCacheProvider = () => {
    //     const [content, getContent] = useState('');
    //     return { content, getContent }
    // }


    // export default Main;
    // const { content, getContent } = useCacheProvider();
    // try {
    //     const response = await fetch('/express_backend');
    //     const body = await response.json();
    //     if (response.status !== 200) {
    //         throw Error(body.message)
    //     }
    //     return body;
    // } catch (e) {
    // console.log('No se detectó caché;');
    // console.log(e);

    // const [carterTotalAmount, setTotalAmount] = useState(0);
    // useEffect(() => {
    //     const previouslyExistentCart = sessionStorage.getItem('cart-amount');
    //     typeof previouslyExistentCart != 'undefined' && setTotalAmount(
    //         Number(previouslyExistentCart) === 0 ?
    //             Number(previouslyExistentCart) :
    //             Number(previouslyExistentCart) + 1
    //     );
    //     console.log('¿No?');
    // }, []);
    // localStorage.setItem('cache', JSON.stringify(body));


    // // const setForContentChanging = refGenerator();
    // const provideRef = () => {
    //     const previouslyExistentCart = sessionStorage.getItem('cart-content');
    //     return typeof previouslyExistentCart === 'undefined' ?
    //         // refGenerator() :
    //         // previouslyExistentCart;
    //         'Positivo' :
    //         'Negativo';
    //     // return 'caballo loco';
    // }
    // const checkCartContent = () => {
    //     const previouslyExistentCart = sessionStorage.getItem('cart-content');
    //     return typeof previouslyExistentCart != 'undefined' && previouslyExistentCart;
    // }
    // const content = createCartContentObject(getRefs());
    // sessionStorage.setItem('cart-content', JSON.stringify(content));
    // console.log(getCartContent());

    // import { useTotalAmount as TotalAmountContext } from './components/AmountContext.js';
    // import { useTotalAmount } from './components/Pedido.js';

    // export const newCartContent = getCartContent();

    // useTotalAmount().totalAmount
    // const useSmthg = () => {

    //     const AmountElements = document.getElementsByClassName('input-group-text');
    //     const currentAmount = useTotalAmount().totalAmount;
    //     const [updateOfAmount, getUpdateOfAmount] = useState(useTotalAmount().totalAmount);
    //     useEffect(() => {
    //         getUpdateOfAmount(currentAmount);
    //     }, [AmountElements]);
    //     return updateOfAmount;
    // }

    // const useTotalAmount = () => {
    //     const [carterTotalAmount, getTotalAmount] = useState(4);
    //     const increaseTotal = () => getTotalAmount(carterTotalAmount + 1);
    //     //ESTA FUNCIÓN NO ES QUE NO SE ENTIENDE CON EL HOOK SINO QUE NI SIQUIERA ESTÁ SIENDO LLAMADA
    //     const decreaseTotal = () => carterTotalAmount > 0 && getTotalAmount(carterTotalAmount - 1);
    //     return { carterTotalAmount, increaseTotal, decreaseTotal }
    // }


    // const useTotalAmount = () => {
    //     const [carterTotalAmount, setTotalAmount] = useState(0);
    //     const utilitiesSet = useMemo(
    //         () => ({ carterTotalAmount, setTotalAmount }),
    //         [carterTotalAmount]
    //     );
    //     return utilitiesSet;
    // }
    // const General = () => {
    //     return (
    //         <BarraSuperior
    //         />
    //     )
    // }
    // import { getCartContent } from './components/CartContent.js';
    // checkCache();

    {/* <BarraSuperior /> */ }
    // import { checkCache } from './CacheContent.js';
    // import { BarraSuperior } from './components/BarraSuperior.js';

    // const utilitiesSet = useTotalAmountProvider()
    // const utilitiesSet = useTotalAmountProvider()
    // const randomRef = [''];



    // const useRefe = () => {
    //     const [randoms, addToPreviousRandom] = useState(['']);
    //     return { randoms, addToPreviousRandom }
    // }

    /*
    const refGenerator = () => {
        let randoms = [];
        for (let i = 0; i < 10; i++) {
            function findCoincidence() {
                const newRandom = Math.round(1008000 * 132 * Math.random());
                const coincidenceFound = randoms.find(el => el === newRandom);
                try {
                    typeof coincidenceFound != 'undefined' ?
                        findCoincidence() : randoms = [...randoms, newRandom];
                } catch (e) {
                    console.log('Error interno GH1')
                    console.log(e);
                }
            }
            findCoincidence();
        }
        const values = randoms;
        return values;
    }
    
    const randomRef = refGenerator();
    */
    // import { provideRef } from "../components/CartContext.js";
    // const referenceNumbers = () => {
    //     const references = Object.keys(newCartContent);
    //     // return references;
    // }


    // const cartContent = newCartContent;

    // const getReferenceNumbers = () => {
    //     const references = Object.keys(cartContent);
    //     return references;
    // }
    // const referenceNumbers = getReferenceNumbers();

    // import { useContext } from 'react';

    // import { CartContentContext } from '../components/CartContent.js';
    // import changuillo from '../elements/imagenes/changuito.svg';


    // const hileraUnoArtesanias = [listaDeArtesanias[0], listaDeArtesanias[1], listaDeArtesanias[2]];
    // const hileraDosArtesanias = [listaDeArtesanias[3], listaDeArtesanias[4], listaDeArtesanias[5]];
    // const hileraTresArtesanias = [listaDeArtesanias[6], listaDeArtesanias[7], listaDeArtesanias[8]];

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
    // const { totalAmount, getTotalAmount } = useTotalAmount();
    // const [totalAmount, getTotalAmount] = useState(3);

    // console.log(currentKey);
    // const newKey = currentKey;

    // const [currentAmount, getAmount] = useState(0);
    // const [currentKey, getKey] = useState(999);



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
    // const voidFunction = () => { };
    // console.log(cartContent);

    // const resultado = () => {
    //     return localAmount * Number(props.priceInt + '.' + props.priceDecimal);
    // }
    {/* <GestorDeCantidades
                    addNumber={increaseAmount}
                    lessenNumber={decreaseAmount}
                    currentAmount={currentAmount}
                /> */}
    {/* <div className='container-fluid'>
                    <Col sm="6"> */}
    {/* </Col>
                    <Col sm="6">
                        <p>{localAmount}</p>
                    </Col> */}
    {/* </div> */ }

    // const useNewChildrenKey = () => {
    //     const [childrenKey, setChildrenKey] = useState(100);
    //     return { childrenKey, setChildrenKey };
    // }

    // export const useTotalAmount = () => {

    //     const [totalAmount, getTotalAmount] = useState(4);
    //     return { totalAmount, getTotalAmount }
    // }
    // const { totalAmount, getTotalAmount } = useTotalAmount();
    // const { childrenKey, setChildrenKey } = useNewChildrenKey();
    // const [childrenKey, setChildrenKey] = useState(100);


    //     {/* {setChildrenKey(childrenKey + 1)} */}
    // {/* key={childrenKey} */}
    // const totalAmount = useNewValues().totalAmount;

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
    Lista de artesanías que pregunté a mamá:
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



    // export const TotalAmountContext = React.createContext({
    //     useCartAmount
    // });

    // const entries = new Map([
    //     keys.map((key) => [key, ''])
    // ]);
    // let references = [];
    // console.log(cartContent);
    // references = Object.keys(cartContent);
    // console.log(references);
    // refs = refs.replace('{', '');
    // refs = refs.replace("[", '');
    // refs = refs.replace("]", '');
    // refs = refs.split(',');
    // refs = refs.map(Number);


    // refs = refs.replace("[", '')
    //     .replace("]", '')
    //     .split(',')
    //     .map(Number);
    // console.log(references);

    // function funcionDePrueba() {
    //     sessionStorage.setItem('cart-content', 'hola');
    //     return 'Positivo';
    // }

    // export const provideRef = () => {
    //     const previouslyExistentCart = sessionStorage.getItem('cart-content');
    //     return typeof previouslyExistentCart === 'undefined' ?
    //         // refGenerator() :
    //         // previouslyExistentCart;
    //         'Positivo' :
    //         'Negativo';
    //     // return 'caballo loco';
    // }

    // const useTotalAmount = () => {
    //     const [carterTotalAmount, setTotalAmount] = useState(0);
    //     const utilitiesSet = useMemo(
    //         () => ({ carterTotalAmount, setTotalAmount }),
    //         [carterTotalAmount]
    //     );
    //     return utilitiesSet;
    // }

    // export const TotalAmountContext = () => {
    //     const [carterTotalAmount, setTotalAmount] = useState(0);
    //     const utilitiesSet = useMemo(
    //         () => ({ carterTotalAmount, setTotalAmount }),
    //         [carterTotalAmount]
    //     );
    //     return React.createContext(
    //         { utilitiesSet }
    //     );
    // }
    // import { CartContentContext } from './CartContent.js';
    // import { listaDeHileras } from './Pedido.js';
    // import changuillo from '../elements/imagenes/changuito.svg';
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
    {/* <CardText className="text-dark">
                        {props.description}
                    </CardText> */}
    {/* <GestorDeCantidades
                    addNumber={increaseAmount}
                    lessenNumber={decreaseAmount}
                    currentAmount={currentAmount}
                /> */}
    {/* <h4>{algo}</h4> */ }
    // const listaDeHileras = [['soloUno']];
    {/* <img src={changuillo} alt='changuito' className='logo-mediano'></img> */ }
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
    {/* {setTotalPrice(totalPrice + Number(artesania[7] + '.' + artesania[8]))}
                                    {console.log(totalPrice)} */}
    // const hileraUnoArtesanias = [listaDeArtesanias[0], listaDeArtesanias[1], listaDeArtesanias[2], listaDeArtesanias[3], listaDeArtesanias[4], listaDeArtesanias[5]];
    // const hileraDosArtesanias = [listaDeArtesanias[6], listaDeArtesanias[7], listaDeArtesanias[8]];
    //  console.log(listaDeArtesanias[0][6]);
    // const articulosDelCarrito = [soloArtesaniasEnCarrito];

    // const MensajeDeAyuda = () => {
    //     return (
    //         <NavItem key='MensajeDeAyuda'>
    //             <UncontrolledAlert color="info">
    //                 Hacé clic en el changuito para ir al pedido
    //             </UncontrolledAlert>
    //         </NavItem>
    //     )
    // }


    // export function storeInSessiontorage(amount) {
    //     sessionStorage.setItem('cart-amount', amount);
    // }
    // const currentAmount = localAmount + 1;
    // getAmount(localAmount + 1);
    // handleTotal(1);
    // let editableContentObject = JSON.parse(JSON.stringify(cartContent));
    // editableContentObject[props.refe] = currentAmount;
    // setCartContent(editableContentObject);
    // sessionStorage.setItem('cart-content', JSON.stringify(editableContentObject));
    // setLocalPrice(getLocalPrice(1));
    // setLocalPrice((localAmount - 1) * Number(
    //     props.priceInt + '.' + props.priceDecimal));
    // storeInSessiontorage(carterTotalAmount + operation);
    // const decreaseIt = () => {
    //     getAmount(localAmount - 1);
    //     handleTotal(-1);
    //     let editableContentObject = JSON.parse(JSON.stringify(cartContent));
    //     editableContentObject[props.refe] = localAmount - 1;
    //     setCartContent(editableContentObject);
    //     sessionStorage.setItem('cart-content', JSON.stringify(cartContent));
    //     // setLocalPrice((localAmount - 1) * Number(
    //     //     props.priceInt + '.' + props.priceDecimal));
    //     setLocalPrice(getLocalPrice(-1));
    // }
    // const handleTotal = (operation) => {
    //     carterTotalAmount > 0 && setTotalAmount(carterTotalAmount + operation);
    //     carterTotalAmount > 0 && storeInSessiontorage(carterTotalAmount + operation);
    // }

    // const increaseTotal = () => {
    //     setTotalAmount(carterTotalAmount + 1);
    //     storeInSessiontorage(carterTotalAmount + 1);
    // }
    // const decreaseTotal = () => {
    //     carterTotalAmount > 0 && setTotalAmount(carterTotalAmount - 1);
    //     carterTotalAmount > 0 && storeInSessiontorage(carterTotalAmount - 1);
    // }
    // increaseTotalAmount={increaseTotal}
    // decreaseTotalAmount={decreaseTotal}
    //                                 const numberToArray = [...JSON.stringify(previousLocalPrice)];
    // const dotPosition = numberToArray.indexOf('.') === -1 ?
    //     numberToArray.length + 1 : numberToArray.indexOf('.');
    // const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
    //     '00' : numberToArray[dotPosition + 1] + '0';
    // const ints = Math.floor(previousLocalPrice);
    // return JSON.stringify(ints) + ',' + decimals;


    // const WindowTracker = () => {
    //     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //     useEffect(() => {
    //         const changeWindowWidth = () => {
    //             setWindowWidth(window.innerWidth);
    //         }
    //         window.addEventListener('resize', changeWindowWidth);
    //         return () => window.removeEventListener('resize', changeWindowWidth);
    //     });
    //     return (
    //         <h4>{windowWidth}</h4>
    //     )
    // }
    {/* <NavItem>
                            <NavbarText className='h4'>
                                <h4>{windowWidth}</h4>
                            </NavbarText>
                        </NavItem> */}
    /*



.no-mostrar {
visibility: hidden;
}  


.textico {
height: 30vmin;
width: 100vh;
pointer-events: none;
}

.mostrar {
visibility: visible;
}

 
.mas-mini-logo {
height: 25px;
vertical-align: middle;

}


.centrado-vertical {
vertical-align: middle;
}



.main-in-black {
color: black;
}


.black-text {
text-decoration-color: black;
}


.full-der {
margin-right: -10;
}

.full-izq2 {
margin-left: 0;
margin-right: 0;
}
*/


    <Routes>
        <Route path="/sobre">
            <SobreNosotros />
        </Route>
    </Routes>

    import huevillo from '../elements/imagenes/huevillo.svg';
    import textoCentral from '../elements/imagenes/rafaela.svg';
    export const Inicio = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={textoCentral} className="textico" alt="texto" />
                    <img src={huevillo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
    // PARA HACER GIRAR EL LOGO DEL HUEVILLO SIGUE GIRANDO YIRA YIRA
    // .App-logo {
    //   height: 40vmin;
    //   pointer-events: none;
    // }

    // @media (prefers-reduced-motion: no-preference) {
    //   .App-logo {
    //     animation: App-logo-spin infinite 20s linear;
    //   }
    // }

    // @keyframes App-logo-spin {
    //     from {
    //       transform: rotate(0deg);
    //     }

    //     to {
    //       transform: rotate(360deg);
    //     }
    //   }

    {/* className='imagen-mediana' */ }
    {/* <img src={imagenCocinera} alt='cocinera' height='240px' width='637px'></img> */ }
    {/* <div className='anti-overflow'></div> */ }
    {/* <div className='imagen-mediana'> */ }


    // CONTENIDO DE VIEJO ARCHIVO DE INICIO
    //                                                     import React from 'react';
    // import 'bootstrap/dist/css/bootstrap.css';
    // import '../estilos-todos.css';
    // import logoCentral from '../elements/imagenes/logo-central.svg';

    // export const Inicio = () => {
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logoCentral} className="logo-principal" alt="logo" />
    //             </header>
    //         </div>
    //     )
    // }


    // CONTENIDO DE SEGUNDO ARCHIVO DE INICIO (DESECHADO)

    // import React from 'react';
    // import 'bootstrap/dist/css/bootstrap.css';
    // import '../estilos-todos.css';
    // import logoCentral from '../elements/imagenes/logo-central.svg';

    // export const Inicio = () => {
    //     return (
    //         <div className='fondo'>
    //             <img src={logoCentral} className="logo-principal" alt="logo" />
    //         </div>
    //     )
    // }


    {/* <div className={windowWidth >= 780 ? "alineado-horizontal" : "alineado-horizontal to-the-right"}> */ }
    {/* <Col sm={windowWidth >= 1180 ? "4" : "3"}> */ }

    // const vaciarCarrito = () => {
    //     const emptyCart = createCartContentObject(references);
    //     setCartContent(emptyCart);
    //     setTotalAmount(0);
    //     sessionStorage.setItem('cart-content', JSON.stringify(emptyCart));
    //     sessionStorage.setItem('cart-amount', 0);
    // }
    // {windowWidth >= 768 ? "Continuar al carrito" : "Al carrito"}




    // const SetOfButtons = (props) => {
    //     return (
    //         <div className='container-fluid' key='botonesDePedido'>
    //             <Row>
    //                 <Col sm="5">
    //                     <div className="orientacion-derecha">
    //                         <Button href="/pedido" onClick={() => { }}>
    //                             Volver al catálogo
    //                         </Button>
    //                     </div>
    //                 </Col>
    //                 <Col sm="2">
    //                     <div className="input-group mb-3 alineado-horizontal">
    //                         <span className="input-group-text"
    //                         >Total en carrito: ${props.totalPrice}</span>
    //                     </div>
    //                 </Col>
    //                 <Col sm="5">
    //                     <div className="input-group mb-3">
    //                         <Button className='disabled' onClick={() => { }}>
    //                             Continuar
    //                         </Button>
    //                     </div>
    //                 </Col>
    //             </Row>
    //         </div>
    //     )
    // }


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
            <div className='margenes' key='hayContenidoEnCarrito'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <SetOfButtons key={0} totalPrice={priceToCommaFormat()} />
                <br></br>
                {[props.contenido].map((hilera) =>
                    <div className='container-fluid' key={hilera[0][4] + hilera[0][4]}>
                        <Row>
                            {hilera.map((artesania) => (
                                <React.Fragment key={artesania[4]}>
                                    <Col sm='2' className='margen-horizontal'>
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

    {/* <Col sm={
                                    windowWidth > 1260 ? '2' :
                                        windowWidth <= 1260 && windowWidth > 880 ? '3' :
                                            windowWidth <= 880 && windowWidth > 660 ? '4' :
                                                windowWidth <= 660 && '6'}
                                    className='margen-horizontal'> */}

    // width='80%'




    // const HayContenidoEnCarrito = (props) => {
    //     const priceToCommaFormat = (amount, priceInt, priceDecimal) => {
    //         const priceWithDot = typeof amount === 'undefined' ?
    //             props.totalPrice :
    //             Math.round(amount * Number(
    //                 priceInt + '.' + priceDecimal
    //             ) * 100) / 100;
    //         return passToCommaFormat(priceWithDot);
    //     }
    //     const { windowWidth } = useResponsiveTools();
    //     return (
    //         <div className='margenes' key='hayContenidoEnCarrito'>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <Row>
    //                 <Col>Hola</Col>
    //                 <Col>Hola</Col>
    //                 <Col>Hola</Col>
    //             </Row>
    //         </div>
    //     )
    // }


    {/* {windowWidth < 768 && <br></br>} */ }
    {
        // windowWidth < 768 &&
        // < NavbarText className='h4'>
        //     <NavLink href='/carrito'>
        //         <img src={changuillo} alt='changuito' className='logo-mediano full-izq'></img>
        //         {carterTotalAmount}
        //     </NavLink>
        // </NavbarText>
    }
    {
        // windowWidth >= 768 &&
        // < NavbarText className='h4'>
        //     <NavLink href='/carrito'>
        //         <img src={changuillo} alt='changuito' className='logo-mediano'></img>
        //         {carterTotalAmount}
        //     </NavLink>
        // </NavbarText>
    }
    {/* {
                    !itemsAreVisible &&
                    < NavbarText className='h4'>
                        <NavLink href='/carrito'>
                            <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarText>
                } */}

    /* html {
min-width:fit-content;
min-height: fit-content;
} */

    /* body {
      min-width: 360px;
      width: auto !important;
      width: 360px;
      min-height: 560px;
      height: auto !important;
      height: 560px;
    } */


    /* 
    body {
      min-width: 480px;
      width: auto !important;
      width: 480px;
      min-height: 600px;
      height: auto !important;
      height: 600px;
    } */

    /* body {
      min-width: 540px;
      width: auto !important;
      width: 540px;
      min-height: 960px;
      height: auto !important;
      height: 960px;
    } */

    /* min-width: 70vh; */


    /* min-width: 540px;
    width: auto !important;
    width: 540px;
    min-height: 960px;
    height: auto !important;
    height: 960px; */

    {
        // windowWidth >= 768 &&
        // <div>
        //     <br></br>
        //     <br></br>
        // </div>
    }

    {
        // windowWidth >= 768 &&
        // <div>
        //     <br></br>
        //     <br></br>
        // </div>
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

    {/* <Button href="/pedido" onClick={props.vaciarCarrito}>
                            Vaciar
                        </Button> */}

                                    {/* {windowHeight < 768 && windowHeight >= 550 && windowWidth > 1400} */}
      {/* {
                windowHeight < 550 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            } */}
                // const { windowHeight } = useResponsiveTools();
{/* {console.log(windowHeight)} */}
            {/* {
                windowHeight < 500 ?
                    <div><br></br><br></br></div> : windowHeight < 650 ?
                        <br></br> : <div />
            } */}
            {/* {
                windowHeight < 530 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            } */}
            {/* <p className='text-white'>{windowHeight}</p> */}

            const ComponenteAmpliado = () => {
                const { windowWidth } = useResponsiveTools();
                return (
                    <div>
                        <FormGroup row>
                            <Label
                                for="exampleEmail"
                                sm={3}
                            >
                                Mail
                            </Label>
                            <Col sm={9}>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="ejemplo@ejemplo.com"
                                    type="email"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className='centrado'>
                            <Label
                                for="exampleEmail"
                                sm={3}
                            >
                                ¿Cómo supiste de nosotros? (Opcional)
                            </Label>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                {windowWidth > 960 ?
                                    <Label check>
                                        Amigo o familiar
                                    </Label>
                                    :
                                    <Label check>
                                        Alguien
                                    </Label>
                                }
                            </Col>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check>
                                    Instagram
                                </Label>
                            </Col>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check>
                                    Google
                                </Label>
                            </Col>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                {windowWidth > 960 ?
                                    <Label check>
                                        Meta (Facebook)
                                    </Label>
                                    :
                                    <Label check>
                                        Meta
                                    </Label>
                                }
                            </Col>
                        </FormGroup>
                        <FormGroup row className='orientacion-izquierda-2'>
                            <Label
                                for="exampleEmail"
                                sm={3}
                            >
                            </Label>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check>
                                    Diario
                                </Label>
                            </Col>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check>
                                    Revista
                                </Label>
                            </Col>
                            <Col>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check>
                                    Radio
                                </Label>
                            </Col>
                            <Col className='pegado-derecha'>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                                {' '}
                                <Label check className='pegado-derecha'>
                                    Otro:
                                </Label>
                            </Col>
                            <Col sm='3'>
                                <Input></Input>
                            </Col>
                        </FormGroup>
                    </div>
                )
            }

            const ComponenteReducido = () => {
                return (
                    <div>
                        <Label
                            for="exampleEmail"
                        >
                            Mail
                        </Label>
                        <Col>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="ejemplo@ejemplo.com"
                                type="email"
                            />
                        </Col>
                        <br></br>
                        <Label
                            for="exampleEmail"
                        >
                            ¿Cómo supiste de nosotros? (Opcional)
                        </Label>
                        <Col>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Amigo o familiar
                            </Label>
                        </Col>
                        <Col>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Instagram
                            </Label>
                        </Col>
                        <Col>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Google
                            </Label>
                        </Col>
                        <Col>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Meta
                            </Label>
                        </Col>
                        <Col>
                            <Input
                                id="checkbox2"
                                type="checkbox"
                            />
                            {' '}
                            <Label check>
                                Otro:
                            </Label>
                        </Col>
                        <Col>
                            <Input></Input>
                        </Col>
                        <br></br>
                    </div>
                )
            }

            {windowWidth >= 960 &&
                <UncontrolledAlert color="info" isOpen={showCartHint} toggle={onDismiss}>
                    <div className='letra-mas-chica centrado'>Podés consultar el changuito</div>
                    <div className='letra-mas-chica centrado'>en cualquier momento</div>
                </UncontrolledAlert>
            }

            //sobre el mensaje emergente que ayudaba a ubicar el carrito
            const [showCartHint, setCartHint] = useState(showIt === 'true' ? true : false);
            const onDismiss = () => {
                setCartHint(false);
                localStorage.setItem('showCartHint', 'false');
            }
             const showIt = localStorage.getItem('showCartHint');
    const shouldShowCartHint = () => !showIt && windowWidth >= 768 ? true : false;
    shouldShowCartHint() && localStorage.setItem('showCartHint', 'true');

    //Copia de buena parte del HTMl previousLocalPrice
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="rafaela-favicon-simplificado.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Cargando...</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>


// viejo App.js

import logo from './huevillo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página de Rafaela en construcción.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder
        </a>
      </header>
    </div>
  );
}

export default App;



// index.css

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



// setupTests.js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// esto es del reportWebVitals.json

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;



{/* // viejo README.md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) */}



                {/* {
                    windowWidth < 700 ?
                        <h5 className=''>
                            <h5>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h5>
                        </h5>
                        :
                        <h4 className=''>
                            <h4>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h4>
                        </h4>
                } */}
                {/* <iframe
                    title='location'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13155.19399324402!2d-58.983419248718256!3d-34.48263565894924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1651262346909!5m2!1sen!2sar"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" /> */}

                    
// import mapaAlcance from '../elements/imagenes/Alcance3_niveles.png';
                                {/* <Button className='show-close' onClick={showCloseRangeMap}>Ver</Button> */}
                                {/* <Button className='show-medium' onClick={showMediumRangeMap}>Ver</Button> */}
                                {/* <Button className='show-far' onClick={showLongRangeMap}>Ver</Button> */}
                                // return false;
                                {/* <span className='checkmark'></span> */}
/* alto menos de 600 y ancho de entre 500 y 768 */

.App {
  text-align: center;
}


.to-the-left {
  justify-content: flex-start;
}


.to-the-right {
  justify-content: flex-end;
}



.izq {
  margin-left: auto;
  margin-right: 0;
}


.logo-principal {
  color: white;
  height: 30vmin;
  width: 100vh;
  pointer-events: none;
}

.orientacion-izquierda-2 {
  display: flex;
  flex-direction: row;
  justify-content: felx-start;
  align-content: flex-start;
}


.orientacion-abajo {
  vertical-align: bottom;
}


.pegado-derecha {
  margin-right: 7;
}


.letra-mas-chica {
  font-size: smaller;
}


.centrado2 {
  vertical-align: middle;
  align-content: center;
  justify-content: center;
  padding: 20% 0;
}

.centrado3 {
  vertical-align: middle;
  align-content: center;
  justify-content: center;
  padding: 20% 0;
}


.set-of-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


.no-side-margins {
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: fit-content;
}


.no-padding {
  padding: 0;
}


.nueva-min-altura {
  min-height: 600px;
  height: auto !important;
  height: 600px;
}


.yo-quiero-saber {
  background-color: white;
}


.container-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}


.slight-right-margin {
  margin-right: 3px;
}


.more-right-margin {
  margin-right: 30px;
}


.otra-prueba {
  padding: 0px 0;
  line-height: -40px;
  height: 30px;
}


.mapa-alcance {
  width: 80vw;
  height: 80vh;
}

.absolute-position {
  position: absolute;
}

.first-big-row {
  display: grid;
  grid-template-rows: 40px auto auto auto;
  grid-template-columns: 35px auto;
  align-content: center;
}
// import { BarraInferior } from './components/BarraInferior.js';
            {/* <BarraInferior /> */}
{
                    // windowWidth < 768 &&
                    // <NavbarBrand className='alineado-horizontal marca-rafaela full-centro mx-auto'>
                    //     <NavLink className='h4 text-dark alineado-horizontal' href="/">
                    //         Rafaela
                    //     </NavLink>
                    // </NavbarBrand>
                }
                
// export const RedesSociales = () => {
//     const hola = () => console.log('Click event');
//     return (
//         <div className='container-fluid fixed-now'>
//             <Row>
//                 <Col>
//                     <NumTelefono />
//                 </Col>
//                 <Col>
//                     <img src={logoWpp} alt='logo-wpp' onClick={hola} className='mini-logo-social'></img>
//                 </Col>
//             </Row>
//             <br></br>
//             <Row>
//                 <Col>
//                     <Instagram />
//                 </Col>
//                 <Col>
//                     <img src={logoIg} alt='logo-ig' className='mini-logo-social'></img>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

            {/* <div className={itemsAreVisible ?
                'grid-element show' : 'grid-element show-not'}> */}
            {/* <div className={itemsAreVisible ?
                'grid-element show' : 'grid-element show-not'}> */}
                                {/* <NumTelefono /> */}

                {/* <Instagram /> */}
                {
                    // windowWidth < 768 &&
                    // <div className='position-not-absolute'>
                    //     <span>Hola</span>
                    //     {/* <div className='map-place alineado-horizontal'>
                    //     <embed className='background-map' src={baseGris} alt='no-map'></embed>
                    //     <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceLejano} alt='far-map'></embed>
                    //     <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceMediano} alt='medium-map'></embed>
                    //     <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceCercano} alt='close-map'></embed>
                    // </div> */}
                    // </div>
                }
                {/* </div> */}

                    {/* {
                        windowWidth < 768 &&
                        <div className='position-not-absolute'>
                            <div className='map-place alineado-horizontal'>
                                <embed className='background-map' src={baseGris} alt='no-map'></embed>
                                <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceLejano} alt='far-map'></embed>
                                <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceMediano} alt='medium-map'></embed>
                                <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceCercano} alt='close-map'></embed>
                            </div>
                        </div>
                    } */}
                      {/* {windowWidth >= 768 &&
                        <div> */}
                            // const anyRadioIsChecked = closeRangeCheck === true || mediumRangeCheck === true || showCloseRangeMap === true ? true : false;
// const Map = (props) => {
//     return (
//         <div className='map-place alineado-horizontal'>
//             <embed className='background-map' src={baseGris} alt='no-map'></embed>
//             <embed className={props.currentMap === 'show-far' ? 'show-map' : 'hide-map'} src={alcanceLejano} alt='far-map'></embed>
//             <embed className={props.currentMap === 'show-medium' ? 'show-map' : 'hide-map'} src={alcanceMediano} alt='medium-map'></embed>
//             <embed className={props.currentMap === 'show-close' ? 'show-map' : 'hide-map'} src={alcanceCercano} alt='close-map'></embed>
//         </div>
//     )
// }
// import { Button } from 'reactstrap';


// vieja barra inferior
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Nav, NavItem, Navbar, NavbarText
} from 'reactstrap';
import logoWpp from '../elements/imagenes/logo-wpp.svg';
import logoIg from '../elements/imagenes/logo-ig.svg';
import '../estilos-todos.css';
import { useResponsiveTools } from '../elements/someFunctions.js';

export const BarraInferior = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div>
            <Navbar color="warning" light>
                <Nav navbar>
                    <NavItem className={windowWidth <= 576 ? 'letra-chica' : ''}>
                        <NavbarText>
                            <img src={logoWpp} className="mini-logo" alt="logo-wpp" />
                            +99 999 9999 9999
                        </NavbarText>
                        <NavbarText>
                            <img src={logoIg} className="mini-logo" alt="logo-ig" />
                            @Rafaela.chocolates
                        </NavbarText>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


.letra-chica {
    font-size: small;
  }

  // Estos estaban antes como sistema receptivo frente al componente de carrito
  
  {
    // windowWidth < 575 &&
    // <div>
    //     <br></br>
    // </div>
}
{
    // windowHeight < 768 &&
    // <div>

    // </div>
}


// se probó agregar una infraestructura de dualidad de idiomas a la página pero se dio la vuelta
// lo que se hizo fue agregar esto al Main.js

export const languageContext = React.createContext();

//ENG: language const can be 'spanish' or 'english'
//ESP: el const language puede ser español ('spanish') o inglés ('english')
const language = 'español';
<languageContext.Provider
            value={language}></languageContext.Provider>
            </languageContext.Provider>

// y esto a la única subpágina donde se hizo la pruebaç
import { languageContext } from '../Main.js';

const language = useContext(languageContext);
const languageIndex = language === 'español' ? 0 : 1;
const buttonText1 = ['Anterior', 'Previous'];
const buttonText2 = ["Página 1 de 1", 'Page 1 of 1'];
const buttonText3 = ["Pág. 1 de 1", 'Page 1 of 1'];
const buttonText4 = ['Siguiente', 'Next'];
const buttonText5 = ['Continuar al carrito', 'Continue to cart'];


// y cosas así a cada elemento de los componentes:
{button1[languageIndex]}



const text = 'Somos una chocolatería artesanal y familiar con varios años en diversos campos de la cocina. Nuestras artesanías son respaldadas por los aprendizajes adquiridos en instituciones reconocidas y por materia prima de primera. Creemos que todo sale mejor cuando se hace con ganas, y nos encanta lo que hacemos. ¡Te invitamos a compartir ese gusto con nosotros!';
export const handcraftsList = [
    [
        'Bombón con ganache',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Una fina capa de chocolate sólido envuelve un semicremoso suave y blando. Lorem ipsum Lorem ipsum',
        '0.0',
        referenceNumbers[0],
        localAmounts[0],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        '11',
        referenceNumbers[1],
        localAmounts[1],
        "10",
        "00"
    ], [
        'Barks con oreo',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Corteza de chocolate acompañada de la galletita más elegida para combinar con el chocolate',
        '22',
        referenceNumbers[2],
        localAmounts[2],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '33',
        referenceNumbers[3],
        localAmounts[3],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '44',
        referenceNumbers[4],
        localAmounts[4],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '55',
        referenceNumbers[5],
        localAmounts[5],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '66',
        referenceNumbers[6],
        localAmounts[6],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '77',
        referenceNumbers[7],
        localAmounts[7],
        "10",
        "20"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '88',
        referenceNumbers[8],
        localAmounts[8],
        "19",
        "00"
    ]];

    // Para reactivar el gitignore del node_modules
    /node_modules
