// const useRefe = () => {
//     const [randoms, addToPreviousRandom] = useState(['']);
//     return { randoms, addToPreviousRandom }
// }

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

export const listaDeArtesanias = [
    [
        'Bombón con ganache',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Una fina capa de chocolate sólido envuelve un semicremoso suave y blando. Lorem ipsum Lorem ipsum',
        '0.0',
        randomRef[0]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
        '11',
        randomRef[1]
    ], [
        'Barks con oreo',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Corteza de chocolate acompañada de la galletita más elegida para combinar con el chocolate',
        '22',
        randomRef[2]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '33',
        randomRef[3]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '44',
        randomRef[4]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '55',
        randomRef[5]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '66',
        randomRef[6]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '77',
        randomRef[7]
    ], [
        'Tableta con cereales',
        'https://cdn.shopify.com/s/files/1/0247/3731/6909/products/Chocolateartesanal_almendra05_cuadrado_1024x1024.jpg?v=1633796874',
        'Texto de subtítulo',
        'Barra de 200 gr con crocantes cereales variados',
        '88',
        randomRef[8]
    ]];
