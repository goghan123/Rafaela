import { getCartContent } from './cartContent.js';
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
export const handcraftsList =
    [
        [
            'Bonbon with ganache',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A fine layer of solid chocolate surrounds a smooth and soft creamy heart. Lorem ipsum Lorem ipsum',
            '0.0',
            referenceNumbers[0],
            localAmounts[0],
            "10",
            "00"
        ], [
            'Cereal bark',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bark filled with different varieties of crunchy cereals. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            '11',
            referenceNumbers[1],
            localAmounts[1],
            "10",
            "00"
        ], [
            'Barks with Oreo',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A bark of optional chocolate accompanied with the most chosen biscuit',
            '22',
            referenceNumbers[2],
            localAmounts[2],
            "10",
            "00"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '33',
            referenceNumbers[3],
            localAmounts[3],
            "10",
            "00"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '44',
            referenceNumbers[4],
            localAmounts[4],
            "10",
            "00"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '55',
            referenceNumbers[5],
            localAmounts[5],
            "10",
            "00"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '66',
            referenceNumbers[6],
            localAmounts[6],
            "10",
            "00"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '77',
            referenceNumbers[7],
            localAmounts[7],
            "10",
            "20"
        ], [
            'Cereal tablet',
            'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
            'Some subtitle text',
            'A 200 gr bar filled with different varieties of crunchy cereal',
            '88',
            referenceNumbers[8],
            localAmounts[8],
            "19",
            "00"
        ]
    ]

