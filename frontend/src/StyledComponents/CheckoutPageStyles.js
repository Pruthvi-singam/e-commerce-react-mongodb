import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  max-width: 1200px; /* Set max-width to limit the container's width */
  margin: 0 auto; /* Center the container */
  background-color: #f9f9f9;
`;

export const LeftSection = styled.div`
  flex: 2; /* Adjusted to provide more balanced width for the left section */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added dark shadow for depth */
`;

export const RightSection = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added dark shadow for depth */
`;

export const AddressSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
  }

  button {
    background-color: #f1f1f1;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* Added shadow for button */
  }
`;

export const ProductList = styled.div`
  margin-top: 20px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); /* Added shadow for product image */
  }
`;

export const ProductDetails = styled.div`
  margin-left: 20px;

  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .outOfStock {
    color: red;
    font-weight: bold;
  }
`;

export const ActionButtons = styled.div`
  margin-top: 10px;

  button {
    background-color: transparent;
    border: none;
    color: #6200ea;
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
      color: #4a00b3;
    }
  }
`;

export const PriceDetails = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added shadow for price details section */

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .discount {
    color: green;
  }

  .free {
    color: #28a745;
  }
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;

  h4 {
    font-size: 18px;
  }
`;

export const SavingMessage = styled.p`
  color: green;
  margin-top: 15px;
  font-weight: bold;
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #6200ea; /* Main color of the button */
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for button */

  &:hover {
    background-color: #4a00b3; /* Darker shade for hover effect */
  }
`;
