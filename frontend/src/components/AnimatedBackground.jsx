import React from "react";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(270deg, #ff4b4b, #6200ea, #4c00b0, #ff34b2);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;

  /* Media Query for smaller screens */
  @media (max-width: 768px) {
    background-size: 200% 200%;
    animation: ${gradientAnimation} 20s linear infinite; /* Slower animation on mobile */
  }
`;

const AnimatedBackground = () => {
  return <BackgroundContainer />;
};

export default AnimatedBackground;
