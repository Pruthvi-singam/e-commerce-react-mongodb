import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../Images/p8.png";
const CardContainer = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 24rem;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover .cart-actions {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductImage = styled.img`
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  width: 100%;
  object-fit: cover;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  color: #4a5568; /* gray-600 */
`;

const CartActionsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  position: absolute;
  bottom: 30%;
  left: 50%;
  gap: 20px;
  transform: translate(-50%, 20px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const CartActionItem = styled(motion.li)`
  list-style: none;
  background-color: green;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #6b46c1; /* Change to your primary color */
    }
  }
`;

const BuyButton = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6b46c1; /* purple-500 */
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c00b0; /* purple-800 */
  }
`;

const ProductCard = () => {
  return (
    <CardContainer
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    >
      <ProductImage src={image} alt="Product" />
      <ProductName>Product Name</ProductName>
      <ProductPrice>$100</ProductPrice>

      <CartActionsContainer className="cart-actions">
        <CartActionItem whileHover={{ scale: 1.1 }}>
          <a href="wishlist.html">
            <i className="far fa-heart"></i>
          </a>
        </CartActionItem>
        <CartActionItem whileHover={{ scale: 1.1 }}>
          <a href="cart.html">Add to Cart</a>
        </CartActionItem>
        <CartActionItem whileHover={{ scale: 1.1 }}>
          <a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal">
            <i className="far fa-eye"></i>
          </a>
        </CartActionItem>
      </CartActionsContainer>

      <BuyButton
        whileTap={{ scale: 0.95 }}
        whileHover={{ backgroundColor: "#4c00b0" }}
      >
        Buy Now
      </BuyButton>
    </CardContainer>
  );
};

export default ProductCard;
