import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";


import Home from './pages/home/Home'
import Products  from './pages/products/Products'
import SignUp from './pages/signup/SignUp'
import AppLayout from "./ui/AppLayout"
import ProductInfo from "./features/products/ProductInfo";
import Checkout from "./pages/checkout/Checkout";
import Address from "./pages/address/Address";
import Payment from "./pages/payment/Payment";
import CartItems from "./features/cart/CartItems";
import LoginForm from "./features/auth/LoginForm";
import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./ui/PageNotFound";
import Spinner from "./ui/Spinner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // refetchOnWindowFocus: false
    }
  }
});

function App() {

  
 
  
  return (
   <>
   <QueryClientProvider client={queryClient} >
   <ReactQueryDevtools initialIsOpen={false} />

   <Routes >
    <Route element={<ProtectedRoute > <AppLayout /> </ProtectedRoute>} >
    <Route index element={<Home />} />
    <Route path='products' element={<Products />} />
    <Route path='spinner' element={<Spinner />} />
    <Route path='products/:productId' element={<ProductInfo />} />
    <Route path='cart' element={<CartItems />} />
    <Route path="address" element={<Address />} />
    <Route path="payment-method" element={<Payment />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='signup' element={<SignUp />} />
    </Route>
    <Route path='login' element={<LoginForm />} />
    <Route path='*' element={<PageNotFound />} />
   </Routes>
   <Toaster 
   position="top-center"
   gutter={10}
   containerStyle={{margin: '10px'}}
   toastOptions={{
    className: 'toast-style',
    success: {
      duration: 3000,
    },
    error: {
      duration: 5000
    }
   }}
   />
   </QueryClientProvider>
   </>
  )
}

export default App