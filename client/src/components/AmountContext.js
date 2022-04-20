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