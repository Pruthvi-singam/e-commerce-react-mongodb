import React from "react";
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

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar, sidebarRef } = useSidebar();

  return (
    <Nav>
      <Logo>
        <LogoImage src={logoImage} alt={formatText("Shopease Logo")} />
      </Logo>

      <SearchBar>
        <FaSearch />
        <input type="text" placeholder="Search for products..." />
      </SearchBar>
      <MobileIcon />

      <NavLinks>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </NavLinks>

      <Icons>
        <CartDropdown className="cart-dropdown" />
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
