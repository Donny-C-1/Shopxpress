import "./homepage.css";
import Item from "../item/item";
import Products from "../../assets/products.json";
import furniture from "../../images/furniture.png";
import handbag from "../../images/handbag.png";
import books from "../../images/books.png";
import tech from "../../images/tech.png";
import sneakers from "../../images/sneakers.png";
import travel from "../../images/travel.png";

function Homepage(props) {
    return (
        <div id="homepage">
            <h2>Shop Our Top Categories</h2>
            <div className="categories">
                <div style={{backgroundImage: `url(${furniture})`}} >Furniture</div>
                <div style={{backgroundImage: `url(${handbag})`}}>Hand Bag</div>
                <div style={{backgroundImage: `url(${books})`}}>Books</div>
                <div style={{backgroundImage: `url(${tech})`}}>Tech</div>
                <div style={{backgroundImage: `url(${sneakers})`}}>Sneakers</div>
                <div style={{backgroundImage: `url(${travel})`}}>Travel</div>
            </div>
            <br/>
            <div className="ad1">
                {/* <img src={sette} alt="sette" width="100%" height="auto" /> */}
                <div>
                    <p>Get 5% Cash Back on ₦100,000</p>
                    <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <BestDeals addToCartFunction={props.addToCartFunction} />
        </div>
    )
}

function BestDeals(props) {
    const path = "/images/";
    const Items = Products.slice(0, 8);
    return (
        <section className="best-deals-container">
            <h2>Today's Best Deals For You</h2>
            <div className="category-buttons">
                <button>Gadgets</button>
                <button>Fashion</button>
                <button>Toys</button>
                <button>Education</button>
                <button>Beauty</button>
                <button>Fitness</button>
                <button>Furniture</button>
                <button>Sneakers</button>
            </div>
            <div className="best-deals">
                {Items.map((v, i) => (
                    <Item
                    key={i}
                    product={v}
                    src={path + v.imageSrc}
                    itemName={v.itemName}
                    itemDescription={v.itemDescription}
                    price={v.price}
                    addToCartFunction={props.addToCartFunction}
                     />
                ))}
            </div>
        </section>
    )
}

export default Homepage;