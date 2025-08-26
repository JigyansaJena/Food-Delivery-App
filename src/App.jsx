import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import { useState } from "react";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginSignUp setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <AppDownload />
    <Footer />
    </>
  );
}

export default App;