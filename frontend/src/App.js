import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Navbar from "./components/Navbar";
import LoginPage from "./Authentication/LoginPage";
import SignUpPage from "./Authentication/SignUpPage";
import OfferGrid from "./components/OfferGrid";
import CategorySection from "./components/SegmentationSection";
import ProductCard from "./components/ProductCard";
import ProfilePage from "./components/Profilepage";
import Categories from "./components/categoryBar";
import Footer from "./components/Footer";
import CartDropdown from "./components/CartDropdown";

const App = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* Cart Dropdown for displaying cart items */}
        <CartDropdown cartItems={cartItems} /> 
        <main>
          <div style={{ padding: "90px 30px" }}>
            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/"
                element={
                  <>
                    <Categories />
                    <OfferGrid />
                  </>
                }
              />
              {/* Shop Route - allows users to browse and add products */}
              <Route 
                path="/shop" 
                element={<CategorySection cartItems={cartItems} setCartItems={setCartItems} />} 
              />
              {/* Product Route */}
              <Route path="/products" element={<ProductCard />} />
              {/* Authentication Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
