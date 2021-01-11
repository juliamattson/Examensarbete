import AddToCartButton from "./Cart/AddToCartButton";

const Product = (props) => {
    const { product } = props;
    return (
        <div className="card border-secondary mb-3">
            <h3 className="card-header">{product.name}</h3>
            <img src={product.image.sourceUrl} alt="produkt bild" />
            <div className="card-body">
                <h5 className="card-title">{product.price}</h5>
                <AddToCartButton product={product} />
                {product.purchasable && (
                    <p className="stock-status available"><i className="fa fa-circle mr-1"></i> Tillgänglig</p>
                )}
                {!product.purchasable && (
                    <p className="stock-status not-available"><i className="fa fa-circle mr-1"></i> Ej tillgänglig</p>
                )}
            </div>
        </div>
    )
};

export default Product;