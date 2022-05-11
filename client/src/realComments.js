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




Pendientes:
Cart







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