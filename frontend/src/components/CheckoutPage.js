import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  CheckoutContainer,
  LeftSection,
  RightSection,
  AddressSection,
  ProductList,
  ProductItem,
  ProductDetails,
  ActionButtons,
  PriceDetails,
  PriceRow,
  TotalAmount,
  SavingMessage,
  PlaceOrderButton,
} from "../StyledComponents/CheckoutPageStyles";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const CheckoutPage = () => {
  const { cartItems, incrementItem, decrementItem, deleteItem } = useCart();
  const { presentUser } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  

  // Calculate the total price whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.Original_Price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

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

  return (
    <CheckoutContainer>
      <LeftSection>
        <AddressSection>
          <h3>From Saved Addresses</h3>
          <button>Enter Delivery Pincode</button>
        </AddressSection>
        <ProductList>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <ProductItem key={item._id}>
                <img src={item.Image} alt={item.Title} />
                <ProductDetails>
                  <h4>{item.Title}</h4>
                  <span>${item.Original_Price}</span>
                  <ActionButtons>
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
                  </ActionButtons>
                </ProductDetails>
              </ProductItem>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ProductList>
      </LeftSection>
      <RightSection>
        <PriceDetails>
          <h3>Price Details</h3>
          <PriceRow>
            <span>Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>${totalPrice.toFixed(2)}</span>
          </PriceRow>
          <PriceRow>
            <span>Discount</span>
            <span className="discount">- $0.00</span> {/* Add dynamic discounts if needed */}
          </PriceRow>
          <PriceRow>
            <span>Delivery Charges</span>
            <span className="free">$0 Free</span>
          </PriceRow>
          <PriceRow>
            <span>Secured Packaging Fee</span>
            <span>$20</span>
          </PriceRow>
          <TotalAmount>
            <h4>Total Amount</h4>
            <h4>${(totalPrice + 20).toFixed(2)}</h4>
          </TotalAmount>
          <SavingMessage>You will save $0 on this order</SavingMessage> {/* Add dynamic savings if needed */}
        </PriceDetails>
        <PlaceOrderButton>Place Order</PlaceOrderButton>
      </RightSection>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
