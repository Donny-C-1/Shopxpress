import "./nav.css";
import logo from "../../images/logo1.png";
import { useState } from "react";

function Nav() {
    const [searchVisibility, setSearchVisibility] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleSearchInput = (e) => {
        searchVisibility ? setSearchVisibility(false) : setSearchVisibility(true);
    }

    const toggleMenuVisibility = (e) => {
        const { currentTarget: target } = e;
        target.classList.toggle('open');
        menuVisibility ? setMenuVisibility(false) : setMenuVisibility(true);
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
            <nav className={"top-nav" + (menuVisibility ? " visible" : "")}>
                <div class="nav-inner">
                    <div className="logo">
                        <img src={logo} alt="logo" width="100%" height="auto" />
                        <span>Shopxpress</span>
                    </div>

                    <div className={"sub-menu" + (menuVisibility ? " visible" : "")}>
                        <button className="category">
                            Category
                        </button>
                        <a href="/#">Deals</a>
                        <a href="/#">What's New</a>
                        <a href="/#">Delivery</a>
                        <form className='input-bar'>
                            <input type="text" placeholder="Search Product" />
                            <button type="submit">Search</button>
                        </form>
                        <a href="/#" className="side-link">Account</a>
                        <a href="/#" className="side-link">Cart</a>
                    </div>

                    <div className={"mobile-input-bar" + (searchVisibility ? " visible" : "")}>
                        <input type="text" placeholder="Search..." autoComplete="false" />
                        <input type="submit" value="search" />
                    </div>

                    <div className="mobile-buttons">
                        <a href="/#" className="side-link">Account</a>
                        <a href="/#" className="side-link">Cart</a>
                        <button className="search-button" onClick={toggleSearchInput}>
                            <svg width="100%" viewBox="0 0 24 24">
                                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                        </button>
                        <button className="animated-menu-button" onClick={toggleMenuVisibility}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;