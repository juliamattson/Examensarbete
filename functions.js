export const getFloatVal = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price)
    console.log(productPrice)
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