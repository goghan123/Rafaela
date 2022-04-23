import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logoCentral from '../elements/imagenes/logo-central.svg';

export const Inicio = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logoCentral} className="logo-principal" alt="logo" />
            </header>
        </div>
    )
}
