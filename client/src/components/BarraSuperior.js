import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import {
    Nav, NavItem, NavLink, Navbar, Collapse, NavbarText, UncontrolledAlert
} from 'reactstrap';
import changuillo from '../elements/imagenes/changuito.svg';
import { TotalAmountContext } from './CartContent.js';

// const MensajeDeAyuda = () => {
//     return (
//         <NavItem key='MensajeDeAyuda'>
//             <UncontrolledAlert color="info">
//                 Hacé clic en el changuito para ir al pedido
//             </UncontrolledAlert>
//         </NavItem>
//     )
// }

export const BarraSuperior = () => {
    const { carterTotalAmount } = useContext(TotalAmountContext);

    const showIt = localStorage.getItem('showCartHint');
    showIt || localStorage.setItem('showCartHint', 'true');
    const [showCartHint, setCartHint] = useState(showIt === 'true' ? true : false);
    const onDismiss = () => {
        setCartHint(false);
        localStorage.setItem('showCartHint', 'false');
    }

    return (
        <div>
            <Navbar color="warning" expand="md" fixed="top" light className="fw-bold">
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
                        <NavItem key='MensajeDeAyuda'>
                            <UncontrolledAlert color="info" isOpen={showCartHint} toggle={onDismiss}>
                                Hacé clic en el changuito para ir al pedido
                            </UncontrolledAlert>
                        </NavItem>
                    </Nav>
                    <NavbarText className='h4'>
                        <NavLink href='/carrito'>
                            <img src={changuillo} alt='changuito' className='logo-mediano'></img>
                            {carterTotalAmount}
                        </NavLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
