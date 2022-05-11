import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarText, UncontrolledAlert, NavbarToggler
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
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold">
                <NavbarToggler className='bar-toggler' onClick={hideItems} />
                <Collapse navbar isOpen={itemsAreVisible}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            {windowWidth < 768 && <br></br>}
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
                        {
                            windowWidth < 768 &&
                            < NavbarText className='h4'>
                                <NavLink href='/carrito'>
                                    <img src={changuillo} alt='changuito' className='logo-mediano full-izq'></img>
                                    {carterTotalAmount}
                                </NavLink>
                            </NavbarText>
                        }
                    </Nav>
                    {windowWidth >= 960 &&
                        <UncontrolledAlert color="info" isOpen={showCartHint} toggle={onDismiss}>
                            <div className='letra-mas-chica centrado'>Podés consultar el changuito</div>
                            <div className='letra-mas-chica centrado'>en cualquier momento</div>
                        </UncontrolledAlert>
                    }
                    {
                        windowWidth >= 768 &&
                        < NavbarText className='h4'>
                            <NavLink href='/carrito'>
                                <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                                {carterTotalAmount}
                            </NavLink>
                        </NavbarText>
                    }
                </Collapse>
            </Navbar>
        </div >
    )
}
