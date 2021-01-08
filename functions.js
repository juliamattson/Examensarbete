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
        productId: product.databaseId,
        image: product.image,
        name: product.name,
        price: productPrice,
        quantity: quantity,
        totalPrice: parseFloat((productPrice * quantity).toFixed(2)),
    }
};

export const updateCart = (existingCart, product, quantityAdded, newQuantity = false) => {
    const updatedProducts = getUpdatedProducts(existingCart.products, product, quantityAdded, newQuantity);
    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.quantity += item.quantity;
        return total;
    }
    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, quantity: 0 });
    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.quantity),
        totalProductsPrice: parseFloat(total.totalPrice),
    }
    localStorage.setItem('hjartanavguld', JSON.stringify(updatedCart));

    return updatedCart;
};

export const getUpdatedProducts = (existingProductsInCart, product, quantityAdded, newQuantity = false) => {
    const existingProductIndex = isProductInCart(existingProductsInCart, product.databaseId);
    if (-1 < existingProductIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[existingProductIndex];

        updatedProduct.quantity = (newQuantity) ? parseInt(newQuantity) : parseInt(updatedProduct.quantity + quantityAdded);
        updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.quantity).toFixed(2);

        return updatedProducts;
    } else {
        let productPrice = getFloatValue(product.price);
        const newProduct = createNewProduct(product, productPrice, quantityAdded);
        existingProductsInCart.push(newProduct);
        return existingProductsInCart;
    }
};

export const isProductInCart = (existingProductsInCart, productId) => {
    const returnItemThatExists = (item, index) => {
        if (productId === item.productId) {
            return item;
        }
    };
    const newArray = existingProductsInCart.filter(returnItemThatExists);
    return existingProductsInCart.indexOf(newArray[0]);
};  