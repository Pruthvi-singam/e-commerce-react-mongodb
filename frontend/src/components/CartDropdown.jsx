import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  CartContainer,
  CartIconWrapper,
  Badge,
  DropdownMenu,
  CartItem,
  TotalPrice,
  ProceedButton,
} from "../StyledComponents/CartDropdownStyles";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const CartDropdown = () => {
  const { cartItems, incrementItem, decrementItem, deleteItem } = useCart();
  const { presentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle the cart dropdown
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Handle click outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Increment item quantity
  const handleIncrement = (itemId) => {
    if (presentUser) {
      incrementItem( itemId);
    }
  };

  // Decrement item quantity
  const handleDecrement = (itemId) => {
    if (presentUser) {
      decrementItem( itemId);
    }
  };

  // Delete item from cart
  const handleDelete = (itemId) => {
    if (presentUser) {
      deleteItem( itemId);
    }
  };

  // Calculate total items in cart
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.Original_Price * item.quantity,
      0
    );
  };

  // Proceed to checkout
  const handleProceedToBuy = () => {
    navigate("/checkout");
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
              <CartItem >
                <img src={item.Image} alt={item.Title} />
                <div className="item-info">
                  <span>{item.Title}</span>
                  <span>${item.Original_Price}</span>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleDecrement(item._id)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item._id)}>
                    <FaPlus />
                  </button>
                  <button onClick={() => handleDelete(item._id)}>
                    <FaTrash />
                  </button>
                </div>
              </CartItem>
            ))}
            <TotalPrice>Total: ${calculateTotalPrice().toFixed(2)}</TotalPrice>
            <ProceedButton onClick={handleProceedToBuy}>Proceed to Buy</ProceedButton>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </DropdownMenu>
    </CartContainer>
  );
};

export default CartDropdown;
