import React from "react";
import { motion } from "framer-motion";
import { Overlay } from "../StyledComponents/OverlayStyles"; // Import the styled overlay

const LoadingSpinner = () => {
  return (
    <Overlay>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "60px",
          height: "60px",
          border: "8px solid #e9e9e9",
          borderTop: "8px solid #3498db",
          borderRadius: "50%",
        }}
      />
    </Overlay>
  );
};

export default LoadingSpinner;
