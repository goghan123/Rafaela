import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarBrand, NavbarToggler
} from 'reactstrap';
import changuillo from '../elements/imagenes/changuito.svg';
import { TotalAmountContext } from '../elements/cartContent.js';
import { useResponsiveTools } from '../elements/someFunctions.js';

export const BarraSuperior = () => {
    const { hideItems, itemsAreVisible, windowWidth } = useResponsiveTools();
    const { carterTotalAmount } = useContext(TotalAmountContext);

    return (
        <div>
            {
                windowWidth < 768 &&
                <div className='brand-container'>
                    <a href='/' className='h4 brand-class text-dark'>Rafaela</a>
                </div>
            }
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold py-0 navbar-class">
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
                        {
                            windowWidth >= 768 &&
                            <NavItem>
                                <NavLink className='text-dark navbar-custom' href="/">
                                    Chocolates Rafaela
                                </NavLink>
                            </NavItem>
                        }
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/productos'>
                                Nuestros productos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/entregas'>
                                Entregas
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/sobre'>
                                Sobre nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/contacto'>
                                Contacto
                            </NavLink>
                        </NavItem>
                    </Nav>
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
