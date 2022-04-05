import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse
} from 'reactstrap';
import {
    Link
} from "react-router-dom";

export const BarraSuperior = () => {
    return (
        <div>
            <Navbar
                color="warning"
                expand="md"
                fixed="top"
                light
            >
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem outline color="primary">
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
                            <NavLink href='/nuestros-productos'>
                                Nuestros productos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/entregas'>
                                ¿Llegan hasta donde yo vivo?
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/sobre'>
                                Sobre nosotros
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink href="https://charlieandthechocolatefactoryfilm.fandom.com/wiki/Augustus_Gloop">
                        Choco-choco la-la choco-choco te-te
                    </NavLink>
                </Collapse>
            </Navbar>
        </div>
    )
}
