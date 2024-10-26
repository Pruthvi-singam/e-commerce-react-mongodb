import React, { useState, useEffect } from "react";
import axios from "axios";
import CartDropdown from "./CartDropdown"; // Import the new CartDropdown component

import {
  CategoryContainer,
  CategoryButtons,
  CategoryButton,
  ProductGrid,
  ProductCard,
} from "../StyledComponents/SegmentationSectionStyles";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // State for storing cart items

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product/getallproducts");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Function to fetch cart items from backend
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCartItems(response.data.items); // Update cart items from backend
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = async (product) => {
    console.log("Adding product to cart:", product);

    try {
      // Send request to backend to persist the data
      await axios.post("http://localhost:5000/api/cart/add", {
        productId: product._id,
      });

      // After successfully adding to the cart, fetch the updated cart
      fetchCartItems(); // This ensures the cart is updated after adding an item
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.Category === selectedCategory);

  return (
    <CategoryContainer>
      <CategoryButtons>
        <CategoryButton
          active={selectedCategory === "all"}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </CategoryButton>
        <CategoryButton
          active={selectedCategory === "men"}
          onClick={() => handleCategoryChange("men")}
        >
          Men
        </CategoryButton>
        <CategoryButton
          active={selectedCategory === "women"}
          onClick={() => handleCategoryChange("women")}
        >
          Women
        </CategoryButton>
        <CartDropdown cartItems={cartItems} fetchCartItems={fetchCartItems} />
      </CategoryButtons>
      

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <img src={product.Image} alt={product.Title} />
            <h4>{product.Title}</h4>
            <p>${product.Original_Price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductGrid>

      {/* Include CartDropdown Component */}
      
    </CategoryContainer>
  );
};

export default CategorySection;
