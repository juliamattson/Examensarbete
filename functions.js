export const getFloatVal = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price)
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

export const createNewProduct = (product, productPrice, qty) => {
    return {
        productId: product.id,
        image: product.image,
        name: product.name,
        price: productPrice,
        qty: qty,
    }
};

export const updateCart = (existingCart, product, qtyToBeAdded) => {

    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded);

    const addPrice = (total, item) => {
        total.totalPrice += item.price;
        total.qty += item.qty;
        return total;
    }

    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseFloat(total.totalPrice),
    }
    localStorage.setItem('hjartanavguld', JSON.stringify(updatedCart));

    return updatedCart;
};

export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded) => {

    let productPrice = getFloatVal(product.price);
    const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
    existingProductsInCart.push(newProduct);
    return existingProductsInCart;
};

const isProductInCart = (existingProductsInCart, productId) => {

    const returnItemThatExists = (item, index) => {
        if (productId === item.productId) {
            return item;
        }
    }

    const newArray = existingProductsInCart.filter(returnItemThatExists)

    return existingProductsInCart.indexOf(newArray[0])

};

export const removeItemFromCart = (productId) => {

    let existingCart = JSON.parse(localStorage.getItem('hjartanavguld'))

    // if there is only one item in the cart, delete the whole cart
    if (1 === existingCart.products.length) {
        localStorage.removeItem('hjartanavguld')
        return null;
    }

    const productExistsIndex = isProductInCart(existingCart.products, productId)

    if (-1 < productExistsIndex) {
        const productToBeRemoved = existingCart.products[productExistsIndex]
        const qtyToBeRemovedFromTotal = productToBeRemoved.qty;
        const priceToBeRemovedFromTotal = productToBeRemoved.price;

        // remove this product from array and also update totalprice and total quantity
        let updatedCart = existingCart;
        updatedCart.products.splice(productExistsIndex, 1);
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeRemovedFromTotal;

        localStorage.setItem('hjartanavguld', JSON.stringify(updatedCart))

        return updatedCart;

    } else {
        return existingCart;
    }

};