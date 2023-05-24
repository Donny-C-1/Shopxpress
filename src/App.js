import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Cart from "./components/cart/cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (itemObj) => {
    setCart(prevCart => {
      const item = prevCart.find(obj => obj.id === itemObj.id);
      if (item === undefined) {
        itemObj.quantity = -~itemObj.quantity;
        prevCart.push(itemObj);
        return prevCart;
      }
      item.quantity = -~item.quantity;
      return prevCart;
    });
    console.log(itemObj);
    console.log(cart);
  }

  const removeFromCart = (itemObj) => {
    //
  }

  const editItemInCart = (itemObj) => {
    //
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={(
            <div>
              <Header />
              <Homepage addToCartFunction={addToCart} />
            </div>
          )} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
