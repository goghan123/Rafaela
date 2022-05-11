import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { useResponsiveTools } from '../elements/someFunctions.js';

const Componente = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='fondo'>
            <div className='App-header margenes'>
                <br></br>
                {
                    windowWidth < 700 ?
                        <h5 className=''>
                            <h5>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h5>
                        </h5>
                        :
                        <h4 className=''>
                            <h4>Estamos en Pilar pero hacemos entregas hasta Zona Oeste y Capital Federal</h4>
                        </h4>
                }
                <iframe
                    title='location'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13155.19399324402!2d-58.983419248718256!3d-34.48263565894924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1651262346909!5m2!1sen!2sar"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}

export const Ubicacion = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
