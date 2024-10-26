import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: white; /* Tailwind's bg-gray-100 equivalent */
  flex-wrap: wrap; /* Allow items to wrap */

  /* Responsive layout */
  @media (max-width: 768px) {
    justify-content: center; /* Center items on smaller screens */
  }
`;

export const CategoryItem = styled.div`
  text-align: center;
  max-width: 100px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  flex: 1 1 25%; /* Each item will take 25% width on small screens */

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ffe1e1; /* Light red background color */

    margin-bottom: 8px;
    object-fit: cover;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: #4b5563; /* Tailwind's text-gray-700 equivalent */
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    max-width: 25%; /* Force items to fit 4 per row on small screens */
  }
`;
