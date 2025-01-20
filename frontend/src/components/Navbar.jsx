// Navbar.js
import React, { useEffect } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import logoImage from "../Images/logo-large.png";
import ProfileDropdown from "./ProfileDropdown";
import CartDropdown from "./CartDropdown";

import {
  Nav,
  Logo,
  LogoImage,
  NavLinks,
  SearchBar,
  Icons,
  MenuIcon,
  Sidebar,
  MobileIcon,
} from "../StyledComponents/styledComponents";
import useSidebar from "../hooks/useSidebar";
import { formatText } from "../utils/utils";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isSidebarOpen, toggleSidebar, sidebarRef } = useSidebar();
  const {searchProduct, filterProduct} = useProduct()
  const { cartItems } = useCart();

  const navigate = useNavigate()
  

  return (
    <Nav>
      <Logo>
        <LogoImage src={logoImage} alt={formatText("Shopease Logo")} />
      </Logo>

      <SearchBar >
        <FaSearch />
        <input type="text" placeholder="Search for products..." onChange={(e)=>{navigate("/shop");searchProduct(e.target.value)}} />
           {/* Category Filter */}
      <label htmlFor="category">Category: </label>
      <select id="category"  onChange={(e)=>{navigate("/shop");filterProduct('Category',e.target.value)}}>
        <option value="">All</option>
        <option value="smartphone">Smartphone</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
        <option value="laptop">laptop</option>
        <option value="homeappliances">Home Appliances</option>
      </select>

      {/* Price Filter */}
      <label htmlFor="price">Price: </label>
      <select id="price"  onChange={(e)=> {navigate("/shop");filterProduct('Price',e.target.value)}}>
        <option value = '0'>All</option>
        <option value='250'>About 250</option>
        <option value='500'>About 500</option>
        <option value='1000'>About 1000</option>
        <option value='1500'>About 1500</option>
        <option value='2000'>About 2000</option>
      </select>
      </SearchBar>
      <MobileIcon />

      <NavLinks>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </NavLinks>

      <Icons>
        <CartDropdown className="cart-dropdown" cartItems={cartItems} />
        <ProfileDropdown className="profile-dropdown" />
        <MenuIcon onClick={toggleSidebar}>
          <FaBars />
        </MenuIcon>
      </Icons>

      <Sidebar ref={sidebarRef} isOpen={isSidebarOpen}>
        <a href="/" onClick={toggleSidebar}>
          Home
        </a>
        <a href="/shop" onClick={toggleSidebar}>
          Shop
        </a>
        <a href="/about" onClick={toggleSidebar}>
          About
        </a>
        <a href="/contact" onClick={toggleSidebar}>
          Contact
        </a>
      </Sidebar>
    </Nav>
  );
};

export default Navbar;
