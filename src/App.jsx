import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Regular imports
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";

// Lazy imports
const LazyProduct = React.lazy(() => import("./pages/Product"));
const LazyOrder = React.lazy(() => import("./pages/Order"));
const LazyPlaceOrder = React.lazy(() => import("./pages/PlaceOrder"));
const LazyWishlist = React.lazy(() => import("./pages/Wishlist"));

export default function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<div>Loading Product...</div>}>
                <LazyProduct />
              </Suspense>
            }
          />
          <Route
            path="/order"
            element={
              <Suspense fallback={<div>Loading Order...</div>}>
                <LazyOrder />
              </Suspense>
            }
          />
          <Route
            path="/place-order"
            element={
              <Suspense fallback={<div>Loading Place Order...</div>}>
                <LazyPlaceOrder />
              </Suspense>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/wishlist"
            element={
              <Suspense fallback={<div>Loading Wishlist...</div>}>
                <LazyWishlist />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
