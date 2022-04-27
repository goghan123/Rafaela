import React from 'react';


// export const TotalAmountContext = React.createContext({
//     useCartAmount
// });


export const TotalAmountContext = React.createContext({
    carterTotalAmount: '',
    setTotalAmount: () => { }
});

export function storeInSessiontorage(amount) {
    sessionStorage.setItem('cart-amount', amount);
}

export const CartContentContext = React.createContext({
    cartContent: '',
    setCartContent: () => { }
});

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

export const createCartContentObject = (keys) => {
    // const entries = new Map([
    //     keys.map((key) => [key, ''])
    // ]);
    const newEntries = keys.map((key) => [key, 0]);
    const newObject = Object.fromEntries(newEntries);
    return newObject;
}

export const getCartContent = () => {
    // let references = [];
    let cartContent = {};
    const returnNewReferences = () => {
        const references = refGenerator();
        cartContent = createCartContentObject(references);
        sessionStorage.setItem('cart-content', JSON.stringify(cartContent));
    }
    const returnOldReferences = () => {
        cartContent = JSON.parse(sessionStorage.getItem('cart-content'));
        // console.log(cartContent);
        // references = Object.keys(cartContent);
        // console.log(references);
        // refs = refs.replace('{', '');
        // refs = refs.replace("[", '');
        // refs = refs.replace("]", '');
        // refs = refs.split(',');
        // refs = refs.map(Number);


        // refs = refs.replace("[", '')
        //     .replace("]", '')
        //     .split(',')
        //     .map(Number);
    }
    sessionStorage.getItem('cart-content') ?
        returnOldReferences() :
        returnNewReferences();
    // console.log(references);
    return cartContent;
}

// function funcionDePrueba() {
//     sessionStorage.setItem('cart-content', 'hola');
//     return 'Positivo';
// }

// export const provideRef = () => {
//     const previouslyExistentCart = sessionStorage.getItem('cart-content');
//     return typeof previouslyExistentCart === 'undefined' ?
//         // refGenerator() :
//         // previouslyExistentCart;
//         'Positivo' :
//         'Negativo';
//     // return 'caballo loco';
// }

// const useTotalAmount = () => {
//     const [carterTotalAmount, setTotalAmount] = useState(0);
//     const utilitiesSet = useMemo(
//         () => ({ carterTotalAmount, setTotalAmount }),
//         [carterTotalAmount]
//     );
//     return utilitiesSet;
// }

// export const TotalAmountContext = () => {
//     const [carterTotalAmount, setTotalAmount] = useState(0);
//     const utilitiesSet = useMemo(
//         () => ({ carterTotalAmount, setTotalAmount }),
//         [carterTotalAmount]
//     );
//     return React.createContext(
//         { utilitiesSet }
//     );
// }