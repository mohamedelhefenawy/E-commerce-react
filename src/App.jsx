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
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Collection/>} path="/collection"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element = {<Cart/>} path="/cart" />
        <Route element = {<Product/>} path="/product/:id"/>
        <Route element={<Order></Order>} path="/order"/>
        <Route element = {<PlaceOrder/>} path="/place-order"/>
        <Route element ={<Login/>} path="/login"/>
        <Route element = {<About></About>} path="/about"/>
      </Routes>
      <Footer/>
    </div>
  )
}
