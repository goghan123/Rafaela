export const passToCommaFormat = (numberWithDot) => {
    const numberToArray = [...JSON.stringify(numberWithDot)];
    const dotPosition = numberToArray.indexOf('.') === -1 ?
        numberToArray.length + 1 : numberToArray.indexOf('.');
    const decimals = typeof numberToArray[dotPosition + 1] === 'undefined' ?
        '00' : numberToArray[dotPosition + 1] + '0';
    const ints = Math.floor(numberWithDot);
    return JSON.stringify(ints) + ',' + decimals;
}
