export const getFloatValue = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    console.log(floatValue)
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = (product) => {
    let productPrice = getFloatValue(product.price)
};