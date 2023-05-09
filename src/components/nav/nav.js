import "./nav.css";
import logo from "../../images/logo1.png";
function Nav() {

    const openMenu = (e) => {
        const { currentTarget: target } = e;
        target.classList.toggle('open');
        console.log(target);
    }

    return (
        <div className="top-bar">
            <div className="info-bar">
                <div>
                    <p>+234 9063864323</p>
                    <p className="center">Get 50% Off on Selected Items</p>
                </div>
                <span className="center">|</span>
                <div className="right">
                    <p className="center">Shop Now</p>
                    <div>
                        <button>Eng <span>&or;</span></button>
                        <button>Location <span>&or;</span></button>
                    </div>
                </div>
            </div>
            <nav className="top-nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span>ShopXpress</span>
                </div>

                <div className="category">
                    Category
                </div>
                
                <div className="input-bar">
                    <input type="text" />
                </div>
                
                <div className="nav-links">
                    <a href="/#">Deals</a>
                    <a href="/#">What's New</a>
                    <a href="/#">Delivery</a>
                    <a href="/#">Account</a>
                    <a href="/#">Cart</a>
                </div>

                <div className="animated-menu-button" onClick={openMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;