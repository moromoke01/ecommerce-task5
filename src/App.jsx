
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomeComponents/Home/HomePage';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Signup from './Pages/AuthPage/Signup';
import Login from './Pages/AuthPage/Login';
import About from './Pages/About/About';
import Cart from './Pages/CartPage/CartPage';
import Billing from './Pages/BillingPage/Billing';
// import Wishlist from './Pages/Wishlist/Wishlist';

import { listenAuthState } from './Features/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactPage from './Pages/Contact/ContactPage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(listenAuthState());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
           {/* <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} /> */}
          {/* <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} /> */}
          {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          {/* <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} /> */}
          <Route path="/billing" element={<PrivateRoute><Billing /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? children : <Navigate to="/login" />;
};


export default App;
