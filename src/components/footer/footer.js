import "./footer.css";
import Logo from "../../images/logo1.png";
import mastercard from "../../images/mastercard.svg";
import verve from "../../images/verve.svg";
import westernUnion from "../../images/western-union2.svg";
import visa from "../../images/visa.svg";
import amazon from "../../images/amazon.svg";
import stripe from "../../images/stripe.svg";
import googlePay from "../../images/google-pay.svg";
import paypal from "../../images/paypal.svg";
import briefcase from "../../images/briefcase.svg";
import gift from "../../images/gift.svg";
import helpCircle from "../../images/help-circle.svg";

function Footer() {
    return (
        <footer>
            <hr />
            <div className="top-section">
                <div className="info">
                    <h2><span className="logo"><img src={Logo} alt="Logo" /></span> Shopxpress</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error soluta officia ea consequuntur.</p>
                    <br />
                    <h3>Accepted Payments</h3>
                    <div className="payment-methods">
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={mastercard} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={verve} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={westernUnion} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={amazon} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={visa} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={stripe} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={paypal} alt="Master Card" width="100%" />
                            </a>
                        </div>
                        <div className="payment-logo">
                            <a href="javascript:void(0)">
                                <img src={googlePay} alt="Master Card" width="100%" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="section-links">
                    <h3>Department</h3>
                    <ul>
                        <li><a href="javascript:void(0)">Fashion</a></li>
                        <li><a href="javascript:void(0)">Education Product</a></li>
                        <li><a href="javascript:void(0)">Frozen Food</a></li>
                        <li><a href="javascript:void(0)">Beverages</a></li>
                        <li><a href="javascript:void(0)">Organic Grocery</a></li>
                        <li><a href="javascript:void(0)">Office Supplies</a></li>
                        <li><a href="javascript:void(0)">Beauty Products</a></li>
                        <li><a href="javascript:void(0)">Books</a></li>
                        <li><a href="javascript:void(0)">Electronics & Gadget</a></li>
                        <li><a href="javascript:void(0)">Travel Accessories</a></li>
                        <li><a href="javascript:void(0)">Fitness</a></li>
                        <li><a href="javascript:void(0)">Sneakers</a></li>
                        <li><a href="javascript:void(0)">Toys</a></li>
                        <li><a href="javascript:void(0)">Furniture</a></li>
                    </ul>
                </div>
                <div className="section-links">
                    <h3>About us</h3>
                    <ul>
                        <li><a href="javascript:void(0)">About Shopxpress</a></li>
                        <li><a href="javascript:void(0)">Careers</a></li>
                        <li><a href="javascript:void(0)">News & Blog</a></li>
                        <li><a href="javascript:void(0)">Help</a></li>
                        <li><a href="javascript:void(0)">Press Center</a></li>
                        <li><a href="javascript:void(0)">Shop By Location</a></li>
                        <li><a href="javascript:void(0)">Shopxpress Brands</a></li>
                        <li><a href="javascript:void(0)">Affiliate & Partners</a></li>
                        <li><a href="javascript:void(0)">Ideas & Guides</a></li>
                    </ul>
                </div>
                <div className="section-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="javascript:void(0)">Gift Card</a></li>
                        <li><a href="javascript:void(0)">Mobile App</a></li>
                        <li><a href="javascript:void(0)">Shipping & Delivery</a></li>
                        <li><a href="javascript:void(0)">Order Pickup</a></li>
                        <li><a href="javascript:void(0)">Account Signup</a></li>
                    </ul>
                </div>
                <div className="section-links">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="javascript:void(0)">Shopxpress Help</a></li>
                        <li><a href="javascript:void(0)">Returns</a></li>
                        <li><a href="javascript:void(0)">Track Orders</a></li>
                        <li><a href="javascript:void(0)">Contact Us</a></li>
                        <li><a href="javascript:void(0)">Feedback</a></li>
                        <li><a href="javascript:void(0)">Security & Fraud</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="bottom-bar">
                <div>
                    <a>
                        <img src={briefcase} alt="Become Seller Icon" width="100%" height="auto" /> 
                        Become Seller
                    </a>
                    <a>
                        <img src={gift} alt="Gift Cards Icon" width="100%" height="auto" />
                        Gift Cards
                    </a>
                    <a>
                        <img src={helpCircle} alt="Help Center Icon" width="100%" height="auto" />
                        Help Center
                    </a>
                </div>
                <div>
                    <a>Terms of Service</a>
                    <a className="mobile">Privacy & Policy</a>
                </div>
                <p className="mobile">All rights reserved by Nerdlab | 2023</p>
            </div>
        </footer>
    )
}

export default Footer;