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

export const refGenerator = () => {
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