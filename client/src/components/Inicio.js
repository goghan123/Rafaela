import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import logoCentral from '../elements/imagenes/logo-central.svg';

export const Inicio = () => {
    return (
        <div className='fondo'>
            <div className='App-header margenes'>
                <div className='centrado' key='sobreNosotros'>
                    <img src={logoCentral} className="imagen-mediana" alt="logo" />
                </div>
            </div >
        </div>
    )
}
