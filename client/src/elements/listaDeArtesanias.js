import { useContext } from 'react';

import { CartContentContext } from '../components/CartContent.js';


// const useRefe = () => {
//     const [randoms, addToPreviousRandom] = useState(['']);
//     return { randoms, addToPreviousRandom }
// }

/*
const refGenerator = () => {
    let randoms = [];
    for (let i = 0; i < 10; i++) {
        function findCoincidence() {
            const newRandom = Math.round(1008000 * 132 * Math.random());
            const coincidenceFound = randoms.find(el => el === newRandom);
            try {
                typeof coincidenceFound != 'undefined' ?
                    findCoincidence() : randoms = [...randoms, newRandom];
            } catch (e) {
                console.log('Error interno GH1')
                console.log(e);
            }
        }
        findCoincidence();
    }
    const values = randoms;
    return values;
}

const randomRef = refGenerator();
*/
// import { provideRef } from "../components/CartContext.js";
const useRandomRef = () => {
    const { cartContent } = useContext(CartContentContext);
    const references = Object.keys(cartContent);
    return references;
}


// const randomRef = [''];
export const listaDeArtesanias = [
    [
        'Bombón con ganache',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Una fina capa de chocolate sólido envuelve un semicremoso suave y blando. Lorem ipsum Lorem ipsum',
        '0.0',
        useRandomRef[0]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        '11',
        useRandomRef[1]
    ], [
        'Barks con oreo',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Corteza de chocolate acompañada de la galletita más elegida para combinar con el chocolate',
        '22',
        useRandomRef[2]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '33',
        useRandomRef[3]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '44',
        useRandomRef[4]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '55',
        useRandomRef[5]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '66',
        useRandomRef[6]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '77',
        useRandomRef[7]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '88',
        useRandomRef[8]
    ]];
