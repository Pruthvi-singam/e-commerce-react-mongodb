import React, { useState, useEffect } from "react";

import {
  CategoryContainer,
  ProductGrid,
  ProductCard,
} from "../StyledComponents/SegmentationSectionStyles";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";

const CategorySection = () => {
  const { addToCart } = useCart();
  const { presentUser } = useAuth();
  const {Products} = useProduct()
 

  const handleAddToCart = async (productId,productTitle,productCategory,productImage,product_Original_Price) => {
    if (presentUser) {
      await addToCart( productId,productTitle,productCategory,productImage,product_Original_Price);
    }
  };


  return (
    <CategoryContainer>
      
      <ProductGrid>
        {Products.map((product) => (
          <ProductCard
            key={product._id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            <img src={product.Image} alt={product.Title} />
            <h4>{product.Title}</h4>
            <p>${product.Original_Price}</p>
            <button onClick={() => handleAddToCart(product._id,product.Title,product.Category,product.Image,product.Original_Price)}>
              Add to Cart
            </button>
          </ProductCard>
        ))}
      </ProductGrid>
    </CategoryContainer>
  );
};

export default CategorySection;
