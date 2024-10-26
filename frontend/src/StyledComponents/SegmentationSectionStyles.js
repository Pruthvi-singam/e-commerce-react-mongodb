import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoryContainer = styled.div`
  margin: 50px 10px;
  padding: 20px;
`;

export const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#6200ea" : "#f1f1f1")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6200ea;
    color: white;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  padding: 20px;
`;

export const ProductCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0s ease, transform 0.3s ease;
  width: 80%;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 12px;
  }

  h4 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #6200ea;
    font-weight: bold;
  }

  button {
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #4c00b0;
    }
  }
`;
