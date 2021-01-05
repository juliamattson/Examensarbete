const Product = (props) => {
    const { product } = props;
    return (
        <div class="card border-secondary mb-3">
            <h3 class="card-header">{product.name}</h3>
            <img src={product.image.sourceUrl} alt="produkt bild" />
            <div class="card-body">
                <h5 class="card-title">{product.price}</h5>
            </div>
            <a href="" className="btn btn-secondary text-center">Köp</a>
        </div>
    )
};

export default Product;