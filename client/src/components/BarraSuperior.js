import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarText, UncontrolledAlert
} from 'reactstrap';
import changuillo from '../elements/imagenes/changuito.svg';
import { TotalAmountContext } from './AmountContext.js';

export const BarraSuperior = () => {
    const { carterTotalAmount } = useContext(TotalAmountContext);
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
                    <Nav>
                        <NavItem>
                            <UncontrolledAlert color="info" className='mostrar'>
                                Hacé clic en el changuito para ir al pedido
                            </UncontrolledAlert>
                        </NavItem>
                        {/* 
                        <UncontrolledAlert color="info" className='no-mostrar'>
                            .
                        </UncontrolledAlert> */}
                    </Nav>
                    <NavbarText className='h4'>
                        <NavLink href='/cart'>
                            <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
