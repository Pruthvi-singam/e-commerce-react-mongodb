// DashboardContent.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from '../components/ProductCard';
import ChartComponent from './Chartcomponent';
import {
  ContentContainer,
  CardGrid,
  ChartGrid
} from "../StyledComponents/AdminPageStyles";

const DashboardContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products/getallproducts");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  return (
    <ContentContainer>
      <h2>Admin Dashboard</h2>

      <CardGrid>
      </CardGrid>

      <ChartGrid>
        <ChartComponent />
        <ChartComponent />
      </ChartGrid>
    </ContentContainer>
  );
};

export default DashboardContent;
