import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarBrand, NavbarToggler
} from 'reactstrap';
import carty from '../elements/images/carty.svg';
import { TotalAmountContext } from '../elements/cartContent.js';
import { useResponsiveTools } from '../elements/someFunctions.js';
// import { Link } from 'react-router-dom';

export const UpperBar = () => {
    const { hideItems, itemsAreVisible, windowWidth } = useResponsiveTools();
    const { carterTotalAmount } = useContext(TotalAmountContext);

    return (
        <div>
            {
                windowWidth < 768 &&
                <div className='brand-container'>
                    <NavLink href='/' className='h4 brand-class text-dark'>Rafaela</NavLink>
                </div>
            }
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold py-0 navbar-class">
                <NavbarToggler className='bar-toggler' onClick={hideItems} />
                {
                    windowWidth < 768 &&
                    < NavbarBrand className='h4 full-right'>
                        <NavLink href='/cart' className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
                <Collapse navbar isOpen={itemsAreVisible}>
                    {//Hasta acá
                    }
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
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/Rafaela/products'>
                                Our products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='/rafaela/delivery'>
                                Deliiivery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='rafaela/about'>
                                About us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href='Rafaela/contact'>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {itemsAreVisible && <hr></hr>}
                </Collapse>
                {
                    windowWidth >= 768 &&
                    < NavbarBrand className='h4 full-right'>
                        <NavLink href='/cart' className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
            </Navbar>
        </div >
    )
}
