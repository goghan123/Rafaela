import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarText
} from 'reactstrap';
import changuillo from '../elements/imagenes/changuito.svg';

export const BarraSuperior = (props) => {
    return (
        <div>
            <Navbar color="warning" expand="md" fixed="top" light>
                <Collapse navbar>
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
                    <NavbarText className='h4'>
                        <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                        {props.currentTotalAmmount}
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
