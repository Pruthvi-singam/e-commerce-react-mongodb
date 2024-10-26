import styled from "styled-components";


// Links container
export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  width: 100%;

  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #6200ea;
    }
  }

  @media (max-width: 768px) {
    display: none;  // Hide on smaller screens for the mobile menu
  }
`;
