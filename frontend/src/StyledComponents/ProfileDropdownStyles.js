import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 60px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 100;
  min-width: 150px;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #6200ea;
  }
`;
