import styled from "styled-components";
import { motion } from "framer-motion";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 10px;
  padding: 20px;
`;

export const GridItem = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(20px);
  }

  &.large {
    grid-column: span 3;
    grid-row: span 2;
  }

  &.tall {
    grid-column: span 2;
    grid-row: span 2;
  }

  &.wide {
    grid-column: span 3;
    grid-row: span 1;
  }
`;

export const OfferTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const OfferButton = styled(motion.button)`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c00b0;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
