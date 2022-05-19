import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logoWpp from '../elements/imagenes/logo-wpp.svg';
import logoIg from '../elements/imagenes/logo-ig.svg';
import '../estilos-todos.css';
import { useResponsiveTools } from '../elements/someFunctions.js';

const NumTelefono = () => {
    return (
        <div className='data'>
            <p className='social-networks-text alineado-horizontal'>+99 999 9999 9999</p>
        </div>
    )
}
const Instagram = () => {
    return (
        <div className='data'>
            <p className='social-networks-text alineado-horizontal'>@Rafaela.chocolates</p>
        </div >
    )
}

// export const RedesSociales = () => {
//     const hola = () => console.log('Click event');
//     return (
//         <div className='container-fluid fixed-now'>
//             <Row>
//                 <Col>
//                     <NumTelefono />
//                 </Col>
//                 <Col>
//                     <img src={logoWpp} alt='logo-wpp' onClick={hola} className='mini-logo-social'></img>
//                 </Col>
//             </Row>
//             <br></br>
//             <Row>
//                 <Col>
//                     <Instagram />
//                 </Col>
//                 <Col>
//                     <img src={logoIg} alt='logo-ig' className='mini-logo-social'></img>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

export const RedesSociales = () => {
    const { windowWidth, hideItems, itemsAreVisible } = useResponsiveTools();
    return (
        <div className={windowWidth >= 768 ?
            'grid-container fixed-now bigger-margin' : windowWidth < 768 && windowWidth > 650 ?
                'grid-container fixed-now mid-margin' : windowWidth <= 650 && windowWidth > 500 ?
                'grid-container fixed-now tiny-margin': 'grid-container fixed-now tiniest-margin'}>

            {/* <div className={itemsAreVisible ?
                'grid-element show' : 'grid-element show-not'}> */}
            {/* <div className={itemsAreVisible ?
                'grid-element show' : 'grid-element show-not'}> */}
            <div className='grid-element'>
                {itemsAreVisible && <NumTelefono />}
                {/* <NumTelefono /> */}
            </div>
            <div className='grid-element handy'>
                <img src={logoWpp} alt='logo-wpp' onClick={hideItems} className='mini-logo-social'></img>
            </div>
            <div className='grid-element'>
                {itemsAreVisible && <Instagram />}
                {/* <Instagram /> */}
            </div>
            <div className='grid-element handy'>
                <img src={logoIg} alt='logo-ig' onClick={hideItems} className='mini-logo-social'></img>
            </div>
        </div>
    )
}
