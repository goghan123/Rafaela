import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
// import { CartContentContext } from './CartContent.js';
import { listaDeArtesanias } from '../elements/listaDeArtesanias.js';

const Componente = () => {
    const algo = listaDeArtesanias[0][5];
    return (
        <div className='App-header'>
            <h1>¿Buscabas un carrito? Se lo llevó alguien. Lo vi pero no hice nada</h1>
            <h4>{algo}</h4>
        </div>
    )
}

export const Cart = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}

