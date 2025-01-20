import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const ItemDate = styled.p`
  font-size: 14px;
  color: #888;
  margin: 5px 0;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Quantity = styled.p`
  font-size: 14px;
  color: #555;
`;

const TotalAmount = styled.h3`
  text-align: right;
  font-weight: bold;
  margin-top: 20px;
`;

const OrderPage = () => {
  const orderDate = new Date().toLocaleDateString();
  const {presentUser} = useAuth()
  const [orders,setOrders] = React.useState([])
  const[totalAmount,setTotalAmount] = React.useState(0.00)
  React.useEffect(()=>{
    async function fetchOrderHistory(){ await axios.post("http://localhost:5000/api/orders/order-history",{
        user_id:presentUser
        }).then((res)=>{setOrders(res.data.data)})
    }
     fetchOrderHistory()
     if(orders.length>0){
        const totalAmount = orders.reduce(
          (total, item) => total + item.productPrice * item.productQuantity,
          0
        );
        setTotalAmount(totalAmount.toFixed(2))
    }
  },[])
  // Calculate total amount

  
  return (
    <OrderContainer>
      <h2>Your Orders</h2>
      {orders.length>0 && orders.map((item) => (
        <OrderItem>
          <ItemImage src={item.productImage} alt={item.title} />
          <ItemDetails>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDate>{`Order Date: ${item.productPurchaseDate}`}</ItemDate>
            <Quantity>{`Quantity: ${item.productQuantity}`}</Quantity>
            <ItemPrice>{`$${item.productPrice.toFixed(2)}`}</ItemPrice>
          </ItemDetails>
        </OrderItem>
      ))}
      <TotalAmount>Total Amount : {totalAmount}</TotalAmount>
    </OrderContainer>
  );
};

export default OrderPage;
