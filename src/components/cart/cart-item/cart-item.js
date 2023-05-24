import "./cart-item.css";
import globalScope from "../../..";

function CartItem(props) {
    const { productDetails: self } = props;
    return (
        <div>
            <div>
                <div>
                    <img src={globalScope.path + self.imageSrc} alt={self.itemName} width="20%" height="auto" />
                    <p>{self.itemName}</p>
                </div>
                <div>
                    <p>₦ {self.price}</p>
                </div>
            </div>
            <div>
                <button>Remove</button>
                <div>
                    <button>-</button>
                    <p>{self.quantity}</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;