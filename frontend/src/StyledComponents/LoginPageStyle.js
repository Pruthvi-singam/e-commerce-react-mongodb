import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
`;

export const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ea;
  }
`;

export const ErrorMessage = styled(motion.p)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const Button = styled(motion.button)`
  width: 100%;
  background-color: ${({ bg }) => bg || "#6200ea"};
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#5b00d1"};
  }
`;

