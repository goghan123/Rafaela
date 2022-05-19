import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import logoCentral from '../elements/imagenes/logo-central.svg';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { RedesSociales } from './RedesSociales.js';

const ComponenteLocal = () => {
    const { windowHeight } = useResponsiveTools();
    return (
        <div className='App-header'>
            <div className='margenes'>
                <br></br>
                {
                    windowHeight < 530 &&
                    <div>
                        <br></br>
                        <br></br>
                    </div>
                }
                <div className='centrado' key='sobreNosotros'>
                    <img src={logoCentral} className="imagen-mediana" alt="logo" />
                </div>
            </div >
            <RedesSociales />
        </div>
    )
}

export const Inicio = () => {
    return (
        <div className='fondo'>
            <ComponenteLocal />
        </div>
    )
}
