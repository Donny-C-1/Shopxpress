import "./item.css";

function Item(props) {
    console.log(props.price);
    return (
        <div className="product">
            <div className="product-image-container">
                <img src={props.src} alt={props.itemName} width="100%" height="100%" />
            </div>
            <div class="product-info">
                <div className="top">
                    <p className="product-name">{props.itemName}</p>
                    <p className="product-price">₦ {props.price}</p>
                </div>
                <p className="product-description">{props.itemDescription}</p>
                <div className="product-rating">&#9733;&#9733;&#9733;&#9733;&#9733; <span>(121 reviews)</span></div>
                <button className="add">Add to Cart</button>
            </div>
        </div>
    )
}

export default Item;