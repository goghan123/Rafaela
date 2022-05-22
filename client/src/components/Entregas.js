import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { RedesSociales } from './RedesSociales.js';
// import { Button } from 'reactstrap';
import alcanceCercano from '../elements/imagenes/alcance_cercanoSVG.svg';
import alcanceMediano from '../elements/imagenes/alcance_medianoSVG.svg';
import alcanceLejano from '../elements/imagenes/alcance_lejanoSVG.svg';
import baseGris from '../elements/imagenes/base_grisSVG.svg';

// const Map = (props) => {
//     return (
//         <div className='map-place alineado-horizontal'>
//             <embed className='background-map' src={baseGris} alt='no-map'></embed>
//             <embed className={props.currentMap === 'show-far' ? 'show-map' : 'hide-map'} src={alcanceLejano} alt='far-map'></embed>
//             <embed className={props.currentMap === 'show-medium' ? 'show-map' : 'hide-map'} src={alcanceMediano} alt='medium-map'></embed>
//             <embed className={props.currentMap === 'show-close' ? 'show-map' : 'hide-map'} src={alcanceCercano} alt='close-map'></embed>
//         </div>
//     )
// }

const Componente = () => {
    const { windowWidth } = useResponsiveTools();
    const [currentMap, setMap] = useState('show-none');
    const showLongRangeMap = () => setMap('show-far');
    const showMediumRangeMap = () => setMap('show-medium');
    const showCloseRangeMap = () => setMap('show-close');

    const [closeRangeCheck, setShortRangeCheck] = useState(false);
    const [mediumRangeCheck, setMediumRangeCheck] = useState(false);
    const [longRangeCheck, setLongRangeCheck] = useState(false);
    const [anyRadioIsChecked, setAnyRadioIsChecked] = useState(false);

    const activateCloseRangeRadio = () => {
        setShortRangeCheck(true);
        setMediumRangeCheck(false);
        setLongRangeCheck(false);
        showCloseRangeMap();
        setAnyRadioIsChecked(true);
    }
    const activateMediumRangeRadio = () => {
        setMediumRangeCheck(true);
        setShortRangeCheck(false);
        setLongRangeCheck(false);
        showMediumRangeMap();
        setAnyRadioIsChecked(true);
    }
    const activateLongRangeRadio = () => {
        setLongRangeCheck(true);
        setMediumRangeCheck(false);
        setShortRangeCheck(false);
        showLongRangeMap();
        setAnyRadioIsChecked(true);
    }
    // const anyRadioIsChecked = closeRangeCheck === true || mediumRangeCheck === true || showCloseRangeMap === true ? true : false;

    return (
        <div className='fondo'>
            <div className='App-header'>
                <div className='margenes'>
                    {/* {windowWidth >= 768 &&
                        <div> */}
                            <br></br>
                            <br></br>
                        {/* </div> */}
                    {console.log(windowWidth)}

                    {/* {
                        windowWidth < 768 &&
                        <div className='position-not-absolute'>
                            <div className='map-place alineado-horizontal'>
                                <embed className='background-map' src={baseGris} alt='no-map'></embed>
                                <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceLejano} alt='far-map'></embed>
                                <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceMediano} alt='medium-map'></embed>
                                <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceCercano} alt='close-map'></embed>
                            </div>
                        </div>
                    } */}
                    <div className={windowWidth >= 768 && 'delivery-data-and-maps'}>
                        {
                            windowWidth < 768 &&
                            <div className='position-not-absolute alineado-horizontal'>
                                <div className='map-place alineado-horizontal'>
                                    <embed className='background-map' src={baseGris} alt='no-map'></embed>
                                    <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceLejano} alt='far-map'></embed>
                                    <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceMediano} alt='medium-map'></embed>
                                    <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceCercano} alt='close-map'></embed>
                                </div>
                            </div>
                        }
                        <div className={windowWidth >= 768 ? 'delivery-container' : 'delivery-container broader-container'}>
                            {
                                // windowWidth < 768 &&
                                // <div className='position-not-absolute'>
                                //     <span>Hola</span>
                                //     {/* <div className='map-place alineado-horizontal'>
                                //     <embed className='background-map' src={baseGris} alt='no-map'></embed>
                                //     <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceLejano} alt='far-map'></embed>
                                //     <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceMediano} alt='medium-map'></embed>
                                //     <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={alcanceCercano} alt='close-map'></embed>
                                // </div> */}
                                // </div>
                            }
                            <div>
                                <div className='radio-container'>
                                    <input className='delivery-radio handy' name='delivery-radio' checked={closeRangeCheck} onChange={activateCloseRangeRadio} type='radio'></input>
                                    <span className={anyRadioIsChecked ? 'checkmark' : 'checkmark-calling-animation'}></span>
                                    <span className='checkmark'></span>
                                    {closeRangeCheck && <span className='checkmark-checked'></span>}
                                </div>
                            </div>
                            <div className='delivery-item'>
                                {
                                    // windowWidth >= 1230 ?
                                    <h4 className={closeRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateCloseRangeRadio}>Envíos cortos: $500</h4>
                                    // :
                                    // <h5 className={closeRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateCloseRangeRadio}>Envíos cortos: $500</h5>
                                }
                                {
                                    // windowWidth >= 1230 ?
                                    <h6>Pilar únicamente</h6>
                                    //         :
                                    //         <p>Pilar únicamente</p>
                                    // 
                                }
                            </div>
                            <div>
                                <div className='radio-container'>
                                    <input className='delivery-radio handy' name='delivery-radio' checked={mediumRangeCheck} onChange={activateMediumRangeRadio} type='radio'></input>
                                    <span className={anyRadioIsChecked ? 'checkmark' : 'checkmark-calling-animation'}></span>
                                    <span className='checkmark'></span>
                                    {mediumRangeCheck && <span className='checkmark-checked'></span>}
                                </div>
                            </div>
                            <div className='delivery-item'>
                                <h4 className={mediumRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateMediumRangeRadio}>Envíos distancia media: $1500</h4>
                                <h6>Exaltación de la Cruz, Campana, Escobar, José C. Paz, Moreno, Malvinas Argentinas, Rodríguez</h6>
                            </div>
                            <div>
                                <div className='radio-container'>
                                    <input className='delivery-radio handy' name='delivery-radio' checked={longRangeCheck} onChange={activateLongRangeRadio} type='radio'></input>
                                    <span className={anyRadioIsChecked ? 'checkmark' : 'checkmark-calling-animation'}></span>
                                    <span className='checkmark'></span>
                                    {longRangeCheck && <span className='checkmark-checked'></span>}
                                </div>
                            </div>
                            <div className='delivery-item'>
                                <h4 className={longRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateLongRangeRadio}>Envíos larga distancia: $2500</h4>
                                <h6>Luján, San Martín, Tigre, San Miguel, San Isidro, Vicente López</h6>
                            </div>
                        </div>
                        {
                            windowWidth >= 768 &&
                            <div className='map-place alineado-horizontal'>
                                <embed className='background-map' src={baseGris} alt='no-map'></embed>
                                <embed className={currentMap === 'show-far' ? 'show-map' : 'hide-map'} src={alcanceLejano} alt='far-map'></embed>
                                <embed className={currentMap === 'show-medium' ? 'show-map' : 'hide-map'} src={alcanceMediano} alt='medium-map'></embed>
                                <embed className={currentMap === 'show-close' ? 'show-map' : 'hide-map'} src={alcanceCercano} alt='close-map'></embed>
                            </div>
                        }
                    </div>
                </div>
                <RedesSociales />
            </div>
        </div >
        // </div >
    )
}

export const Entregas = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
