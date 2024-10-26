import React from "react";
import { NavLinksContainer } from "./NavLinksStyles";

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </NavLinksContainer>
  );
};

export default NavLinks;
