import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { RedesSociales } from './RedesSociales.js';

export const PaginaNoEncontrada = () => {
    return (
        <div className='fondo'>
            <div className='App-header margenes'>
                <h1>Error 404. No encontramos la página que buscabas.</h1>
            </div>
            <RedesSociales />
        </div>
    )
}
