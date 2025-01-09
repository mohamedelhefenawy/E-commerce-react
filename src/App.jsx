import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Order from "./pages/Order"
import PlaceOrder from "./pages/PlaceOrder"
import Login from "./pages/Login"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastContainer, toast } from "react-toastify";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile"
import Wishlist from "./pages/Wishlist"
export default function App() {
  return (
    <div>
      <ToastContainer/>
    
       <Navbar></Navbar>
       <div id="main-content">
      <Routes >
        <Route element={<Home/>} path="/" />
        <Route element={<Collection/>} path="/collection"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element = {<Cart/>} path="/cart" />
        <Route element = {<Product/>} path="/product/:id"/>
        <Route element={<Order></Order>} path="/order"/>
        <Route element = {<PlaceOrder/>} path="/place-order"/>
        <Route element ={<Login/>} path="/login"/>
        <Route element = {<About></About>} path="/about"/>
        <Route element = {<Profile/>} path="/profile"/>
        <Route element ={<Wishlist/>} path="/wishlist"/>
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}
