import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Nav, NavItem, Navbar, NavbarToggler, Collapse, NavbarText
} from 'reactstrap';
import logoWpp from '../elements/imagenes/logo-wpp.svg';
import logoIg from '../elements/imagenes/logo-ig.svg';
import '../estilos-todos.css';

export const BarraInferior = () => {
    return (
        <div>
            <Navbar color="warning" expand="md" light>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
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
                </Collapse>
            </Navbar>
        </div>
    )
}