import CartItem from "./cart-item/cart-item";
import Products from "../../assets/products.json";

function Cart(props) {
    console.log(props.cart);
    return (
        <div>
            <div>
                <h1>Cart</h1>
                {props.cart.map(item => (
                    <CartItem productDetails={item} />
                ))}
                {/* <CartItem name={Products[0].itemName} src={Products[0].imageSrc} price={Products[0].price} /> */}
            </div>
            <div>
                <h2>CART SUMMARY</h2>
                <div>
                    <p>Subtotal:</p>
                    <p>₦ </p>
                </div>
            </div>
        </div>
    )
}

export default Cart;