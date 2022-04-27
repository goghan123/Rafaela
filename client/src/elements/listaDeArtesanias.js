// import { useContext } from 'react';

// import { CartContentContext } from '../components/CartContent.js';
import { getCartContent } from '../components/CartContent.js';


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
// const referenceNumbers = () => {
//     const references = Object.keys(newCartContent);
//     // return references;
// }


// const cartContent = newCartContent;

// const getReferenceNumbers = () => {
//     const references = Object.keys(cartContent);
//     return references;
// }
// const referenceNumbers = getReferenceNumbers();

export const newCartContent = getCartContent();

const getReferenceNumbers = () => {
    const references = Object.keys(newCartContent);
    return references;
}
const referenceNumbers = getReferenceNumbers();

const getLocalAmounts = () => {
    const amounts = Object.values(newCartContent);
    return amounts;
}
const localAmounts = getLocalAmounts();

// const randomRef = [''];
export const listaDeArtesanias = [
    [
        'Bombón con ganache',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Una fina capa de chocolate sólido envuelve un semicremoso suave y blando. Lorem ipsum Lorem ipsum',
        '0.0',
        referenceNumbers[0],
        localAmounts[0],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        '11',
        referenceNumbers[1],
        localAmounts[1],
        "10",
        "00"
    ], [
        'Barks con oreo',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Corteza de chocolate acompañada de la galletita más elegida para combinar con el chocolate',
        '22',
        referenceNumbers[2],
        localAmounts[2],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '33',
        referenceNumbers[3],
        localAmounts[3],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '44',
        referenceNumbers[4],
        localAmounts[4],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '55',
        referenceNumbers[5],
        localAmounts[5],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '66',
        referenceNumbers[6],
        localAmounts[6],
        "10",
        "00"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '77',
        referenceNumbers[7],
        localAmounts[7],
        "10",
        "20"
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '88',
        referenceNumbers[8],
        localAmounts[8],
        "19",
        "00"
    ]];
