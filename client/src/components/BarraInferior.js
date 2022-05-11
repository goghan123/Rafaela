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
