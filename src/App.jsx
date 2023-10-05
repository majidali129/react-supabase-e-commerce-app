import { Route, Routes } from "react-router-dom"

import Header from "./ui/Header"

import Home from './pages/home/Home'
import Products  from './pages/products/Products'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Categories from './pages/categories/Categories'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Contact from "./pages/contact/Contact"
import AppLayout from "./ui/AppLayout"
import { useEffect } from "react"
import { getProducts } from "./services/ApiProducts"


function App() {

  const fetchProducts = async () => {
    const products = await getProducts();
    console.log(products);
    
  }
  useEffect(() => {
    fetchProducts()    
  }, [])

 
  
  return (
   <>
   <Routes >
    <Route element={<AppLayout />} >
    <Route index element={<Home />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/categories' element={<Categories />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/contact-us' element={<Contact />} />
    </Route>
   </Routes>
   </>
  )
}

export default App