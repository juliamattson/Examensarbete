export const getFloatValue = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    console.log(floatValue)
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = (product) => {
    let productPrice = getFloatValue(product.price)
    // Create empty array
    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice,
    }

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct);

    localStorage.setItem('hjartanavguld', JSON.stringify(newCart));
    return newCart;
};

// Create a new product object
export const createNewProduct = (product, productPrice, quantity) => {
    return {
        productId: product.id,
        image: product.image,
        name: product.name,
        price: productPrice,
        quantity: quantity,
        totalPrice: parseFloat((productPrice * quantity).toFixed(2)),
    }
};