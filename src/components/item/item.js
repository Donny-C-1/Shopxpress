import "./item.css";

function Item(props) {
    const { product: product } = props;
    return (
        <div className="product">
            <div className="product-image-container">
                <img src={props.src} alt={product.itemName} width="100%" height="100%" />
            </div>
            <div className="product-info">
                <div className="top">
                    <p className="product-name">{product.itemName}</p>
                    <p className="product-price">₦ {product.price}</p>
                </div>
                <p className="product-description">{product.itemDescription}</p>
                <div className="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733; <span>(121 reviews)</span></div>
                <button className="add" onClick={props.addToCartFunction.bind(this, product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Item;