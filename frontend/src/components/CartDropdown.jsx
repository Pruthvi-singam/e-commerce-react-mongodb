import React, { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  CartContainer,
  CartIconWrapper,
  Badge,
  DropdownMenu,
  CartItem,
  TotalPrice,
} from "../StyledComponents/CartDropdownStyles";
const CartDropdown = ({ cartItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.Original_Price * item.quantity,
      0
    );
  };

  return (
    <CartContainer ref={dropdownRef}>
      <CartIconWrapper onClick={toggleDropdown}>
        <FaShoppingCart className="icon" />
        <Badge>{calculateTotalItems()}</Badge>
      </CartIconWrapper>
      <DropdownMenu isOpen={isOpen}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item._id}>
                <img src={item.Image} alt={item.Title} />
                <div className="item-info">
                  <span>{item.Title}</span>
                  <span>${item.Original_Price}</span>
                </div>
                <div className="item-actions">
                  <span>{item.quantity}</span>
                </div>
              </CartItem>
            ))}
            <TotalPrice>Total: ${calculateTotalPrice().toFixed(2)}</TotalPrice>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </DropdownMenu>
    </CartContainer>
  );
};

export default CartDropdown;