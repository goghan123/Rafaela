import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarBrand, NavbarToggler
} from 'reactstrap';
import carty from '../elements/images/carty.svg';
import { TotalAmountContext } from '../elements/cartContent.js';
import { useResponsiveTools } from '../elements/someFunctions.js';

export const UpperBar = () => {
    const { hideItems, itemsAreVisible, windowWidth } = useResponsiveTools();
    const { carterTotalAmount } = useContext(TotalAmountContext);

    return (
        <div>
            {
                windowWidth < 768 &&
                <div className='brand-container'>
                    <a href={process.env.REACT_APP_FOR_PATH + '/'} className='h4 brand-class text-dark'>Rafaela</a>
                </div>
            }
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold py-0 navbar-class">
                <NavbarToggler className='bar-toggler' onClick={hideItems} />
                {
                    windowWidth < 768 &&
                    < NavbarBrand className='h4 full-right'>
                        <NavLink href={process.env.REACT_APP_FOR_PATH + '/cart'} className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
                <Collapse navbar isOpen={itemsAreVisible}>
                    <Nav className="me-auto" navbar>
                        {
                            windowWidth >= 768 &&
                            <NavItem>
                                <NavLink className='text-dark navbar-custom' href={process.env.REACT_APP_FOR_PATH + "/"}>
                                    Chocolates Rafaela
                                </NavLink>
                            </NavItem>
                        }
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/products'}>
                                Our products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/delivery'}>
                                Deliivery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/about'}>
                                About us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/contact'}>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {itemsAreVisible && <hr></hr>}
                </Collapse>
                {
                    windowWidth >= 768 &&
                    < NavbarBrand className='h4 full-right'>
                        <NavLink href={process.env.REACT_APP_FOR_PATH + '/cart'} className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarBrand>
                }
            </Navbar>
        </div >
    )
}
