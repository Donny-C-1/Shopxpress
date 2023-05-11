import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Cart from "./components/cart/cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(
            <div>
              <Header />
              <Homepage />
            </div>
          )} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
