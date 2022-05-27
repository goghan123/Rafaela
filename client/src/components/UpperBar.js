import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarBrand, NavbarToggler
} from 'reactstrap';
import carty from '../elements/images/carty.svg';
import { TotalAmountContext } from '../elements/cartContent.js';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { Link as ReactLink } from 'react-router-dom';

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
                        <ReactLink href={process.env.REACT_APP_FOR_PATH + '/cart'} className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </ReactLink>
                    </NavbarBrand>
                }
                <Collapse navbar isOpen={itemsAreVisible}>
                    <Nav className="me-auto" navbar>
                        {
                            windowWidth >= 768 &&
                            <NavItem>
                                <ReactLink className='text-dark navbar-custom' href={process.env.REACT_APP_FOR_PATH + "/"}>
                                    Chocolates Rafaela
                                </ReactLink>
                            </NavItem>
                        }
                        <NavItem>
                            <ReactLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/products'}>
                                Our products
                            </ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/delivery'}>
                                Deliivery
                            </ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/about'}>
                                About us
                            </ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink className={windowWidth >= 768 ? 'text-dark navbar-custom' : 'text-dark'} href={process.env.REACT_APP_FOR_PATH + '/contact'}>
                                Contact
                            </ReactLink>
                        </NavItem>
                    </Nav>
                    {itemsAreVisible && <hr></hr>}
                </Collapse>
                {
                    windowWidth >= 768 &&
                    < NavbarBrand className='h4 full-right'>
                        <ReactLink href={process.env.REACT_APP_FOR_PATH + '/cart'} className='text-dark'>
                            <img src={carty} alt='cart' className='medium-logo'></img>
                            {carterTotalAmount}
                        </ReactLink>
                    </NavbarBrand>
                }
            </Navbar>
        </div >
    )
}
