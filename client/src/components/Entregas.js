import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { RedesSociales } from './RedesSociales.js';
import { Button } from 'reactstrap';
// import mapaAlcance from '../elements/imagenes/Alcance3_niveles.png';

const Componente = () => {
    const { windowWidth } = useResponsiveTools();
    const [currentMap, setMap] = useState('show-none');
    const showFarRangeMap = () => setMap('show-far');
    const showMediumRangeMap = () => setMap('show-medium');
    const showCloseRangeMap = () => setMap('show-close');

    return (
        <div className='fondo'>
            <div className='App-header margenes'>
                <br></br>
                <br></br>
                <br></br>

                {/* {
                    windowWidth < 700 ?
                        <h5 className=''>
                            <h5>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h5>
                        </h5>
                        :
                        <h4 className=''>
                            <h4>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h4>
                        </h4>
                } */}
                {/* <iframe
                    title='location'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13155.19399324402!2d-58.983419248718256!3d-34.48263565894924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1651262346909!5m2!1sen!2sar"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" /> */}
                <div className='delivery-container'>
                    <div className='delivery-item'>
                        <span>Zona lejana</span>
                        <Button className='show-far' onClick={showFarRangeMap}>Ver</Button>
                    </div>
                    <div className='delivery-item'>
                        <span>Zona mediana</span>
                        <Button className='show-medium' onClick={showMediumRangeMap}>Ver</Button>
                    </div>
                    <div className='delivery-item'>
                        <span>Zona cercana</span>
                        <Button className='show-close' onClick={showCloseRangeMap}>Ver</Button>
                    </div>
                </div>
                <img className={currentMap === 'show-none' ? 'show-map' : 'hide-map'} src={''} alt='none-map'></img>
                <img className={currentMap === 'show-far' ? 'show-map' : 'hide-map'} src={''} alt='far-map'></img>
                <img className={currentMap === 'show-medium' ? 'show-map' : 'hide-map'} src={''} alt='medium-map'></img>
                <img className={currentMap === 'show-close' ? 'show-map' : 'hide-map'} src={''} alt='close-map'></img>
            </div>
            <RedesSociales />
        </div>
    )
}

export const Entregas = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
