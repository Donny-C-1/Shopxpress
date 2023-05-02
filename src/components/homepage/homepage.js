import "./homepage.css";
import furniture from "../../images/furniture.png";
import handbag from "../../images/handbag.png";
import books from "../../images/books.png";
import tech from "../../images/tech.png";
import sneakers from "../../images/sneakers.png";
import travel from "../../images/travel.png";
import sette from "../../images/sette.png";

function Homepage() {
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
        </div>
    )
}

export default Homepage;