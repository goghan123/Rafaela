import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { SocialNetworks } from './SocialNetworks.js';
import mediumRange from '../elements/images/medium_rangeSVG.svg';
import shortRange from '../elements/images/short_rangeSVG.svg';
import longRange from '../elements/images/long_rangeSVG.svg';
import greyBase from '../elements/images/grey_baseSVG.svg';

export const Delivery = () => {
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

    return (
        <div className='background'>
            <div className='App-header'>
                <div className='margins'>
                    <br></br>
                    <br></br>
                    <div className={windowWidth >= 768 && 'delivery-data-and-maps'}>
                        {
                            windowWidth < 768 &&
                            <div className='position-not-absolute horizontal-alligned'>
                                <div className='map-place horizontal-alligned'>
                                    <embed className='background-map' src={greyBase} alt='no-map'></embed>
                                    <embed className={currentMap === 'show-far' ? 'show-map relative-position' : 'hide-map relative-position'} src={longRange} alt='far-map'></embed>
                                    <embed className={currentMap === 'show-medium' ? 'show-map relative-position' : 'hide-map relative-position'} src={mediumRange} alt='medium-map'></embed>
                                    <embed className={currentMap === 'show-close' ? 'show-map relative-position' : 'hide-map relative-position'} src={shortRange} alt='close-map'></embed>
                                </div>
                            </div>
                        }
                        <div className={windowWidth >= 768 ? 'delivery-container' : 'delivery-container broader-container'}>
                            <div>
                                <div className='radio-container'>
                                    <input className='delivery-radio handy' name='delivery-radio' checked={closeRangeCheck} onChange={activateCloseRangeRadio} type='radio'></input>
                                    <span className={anyRadioIsChecked ? 'checkmark' : 'checkmark-calling-animation'}></span>
                                    <span className='checkmark'></span>
                                    {closeRangeCheck && <span className='checkmark-checked'></span>}
                                </div>
                            </div>
                            <div className='delivery-item'>
                                    <h4 className={closeRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateCloseRangeRadio}>Short delivery: AR$500</h4>
                                    <h6>Only Pilar city</h6>
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
                                <h4 className={mediumRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateMediumRangeRadio}>Medium-range delivery: AR$1500</h4>
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
                                <h4 className={longRangeCheck ? 'handy yellow-font' : 'handy'} onClick={activateLongRangeRadio}>Long-range delivery: AR$2500</h4>
                                <h6>Luján, San Martín, Tigre, San Miguel, San Isidro, Vicente López</h6>
                            </div>
                        </div>
                        {
                            windowWidth >= 768 &&
                            <div className='map-place horizontal-alligned'>
                                <embed className='background-map' src={greyBase} alt='no-map'></embed>
                                <embed className={currentMap === 'show-far' ? 'show-map' : 'hide-map'} src={longRange} alt='far-map'></embed>
                                <embed className={currentMap === 'show-medium' ? 'show-map' : 'hide-map'} src={mediumRange} alt='medium-map'></embed>
                                <embed className={currentMap === 'show-close' ? 'show-map' : 'hide-map'} src={shortRange} alt='close-map'></embed>
                            </div>
                        }
                    </div>
                </div>
                <SocialNetworks />
            </div>
        </div >
    )
}
