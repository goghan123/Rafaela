import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import huevillo from '../huevillo.svg';
import textoCentral from '../rafaela.svg';

export const Inicio = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={textoCentral} className="textico" alt="texto" />
                <img src={huevillo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}
