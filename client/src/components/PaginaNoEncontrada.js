import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Componente = () => {
    return (
        <div className='App-header'>
            <h1>Error 404. No encontramos la página que buscabas.</h1>
        </div>
    )
}

export const PaginaNoEncontrada = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}

