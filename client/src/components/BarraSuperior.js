import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarBrand, UncontrolledAlert, NavbarToggler
} from 'reactstrap';
import changuillo from '../elements/imagenes/changuito.svg';
import { TotalAmountContext } from '../elements/cartContent.js';
import { useResponsiveTools } from '../elements/someFunctions.js';

export const BarraSuperior = () => {
    const { hideItems, itemsAreVisible, windowWidth } = useResponsiveTools();
    const { carterTotalAmount } = useContext(TotalAmountContext);
    const showIt = localStorage.getItem('showCartHint');
    const shouldShowCartHint = () => !showIt && windowWidth >= 768 ? true : false;
    shouldShowCartHint() && localStorage.setItem('showCartHint', 'true');
    const [showCartHint, setCartHint] = useState(showIt === 'true' ? true : false);
    const onDismiss = () => {
        setCartHint(false);
        localStorage.setItem('showCartHint', 'false');
    }
    return (
        <div>
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold py-0">
                <NavbarToggler className='bar-toggler' onClick={hideItems} />
                {
                    windowWidth < 768 &&
                    < NavbarBrand className='h4 full-der'>
                        <NavLink href='/carrito' className='text-dark'>
                            <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
                <Collapse navbar isOpen={itemsAreVisible}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/pedido'>
                                ¡Hacé tu pedido acá!
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/ubicacion'>
                                Dónde estamos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/sobre'>
                                Sobre nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/contacto'>
                                Contacto
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {windowWidth >= 960 &&
                        <UncontrolledAlert color="info" isOpen={showCartHint} toggle={onDismiss}>
                            <div className='letra-mas-chica centrado'>Podés consultar el changuito</div>
                            <div className='letra-mas-chica centrado'>en cualquier momento</div>
                        </UncontrolledAlert>
                    }
                    {itemsAreVisible && <hr></hr>}
                </Collapse>
                {
                    windowWidth >= 768 &&
                    < NavbarBrand className='h4 full-der'>
                        <NavLink href='/carrito' className='text-dark'>
                            <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
            </Navbar>
        </div >
    )
}
