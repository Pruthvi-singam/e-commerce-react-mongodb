import React from "react";
import {
  CategoryContainer,
  CategoryItem,
} from "../StyledComponents/categoryBarStyles"; // Import styled components
import mobile from "../Images/mobile.png";
import laptop from "../Images/laptop.jpg";
import fashion from "../Images/fashion.jpg";
import home from "../Images/home.jpg";
import grocery from "../Images/grocery.jpg";
import tv from "../Images/tv.jpg";
import beauty from "../Images/beauty.jpg";
import furniture from "../Images/furniture.jpg";
import deal from "../Images/deal.png";
const categories = [
  { name: "Top Offers", icon: deal },
  { name: "Mobiles & Tablets", icon: mobile },
  { name: "TVs & Appliances", icon: tv },
  { name: "Electronics", icon: laptop },
  { name: "Fashion", icon: fashion },
  { name: "Beauty", icon: beauty },
  { name: "Home & Kitchen", icon: home },
  { name: "Furniture", icon: furniture },
  { name: "Grocery", icon: grocery },
];

const Categories = () => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryItem key={index}>
          <img src={category.icon} alt={category.name} />
          <p>{category.name}</p>
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
