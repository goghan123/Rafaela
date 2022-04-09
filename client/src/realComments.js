/* <div>
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