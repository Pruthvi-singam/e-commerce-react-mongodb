import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ff4b4b;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
`;

export const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 60px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 15px;
  z-index: 100;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid #f1f1f1;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .item-actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: #f1f1f1;
      border: none;
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: #6200ea;
        color: white;
      }
    }

    .delete-btn {
      background-color: transparent;
      color: #ff4b4b;

      &:hover {
        color: #d12f2f;
      }
    }
  }
`;

export const TotalPrice = styled.div`
  padding: 10px;
  font-weight: bold;
  text-align: right;
`;
