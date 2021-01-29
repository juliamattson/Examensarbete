import AddToCartButton from "./Cart/AddToCartButton";

const Product = (props) => {
    const { product } = props;
    return (
        <div className="card mb-3">
            <img src={product.image.sourceUrl} alt="produkt bild" />
            <h3 className="header">{product.name}</h3>
            <div className="product-body">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                <p className="product-price">{product.price}</p>
                <AddToCartButton product={product} />
                {product.stockStatus == "IN_STOCK" && (
                    <p className="stock-status available"><i className="fa fa-circle mr-1"></i> Tillgänglig</p>
                )}
                {product.stockStatus == "OUT_OF_STOCK" && (
                    <p className="stock-status not-available"><i className="fa fa-circle mr-1"></i> Ej tillgänglig</p>
                )}
            </div>
        </div>
    )
};

export default Product;