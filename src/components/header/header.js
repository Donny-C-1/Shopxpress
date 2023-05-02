import "./header.css";
// import heroImage from "../../images/hero1.jpg";?

function Header() {
    return (
        <header>
            {/* <img src={heroImage} alt="Hero Image" width="100%" height="auto" /> */}
            <div>
                <h1>Shopping And <br/>Department Store.</h1>
                <br/>
                <p>Shopping is a bit of a relaxing hobby for me, which is <br/>sometimes troubling for the bank balance.</p>
                <br/><br/>
                <button>Learn More</button>
            </div>
        </header>
    )
}

export default Header;