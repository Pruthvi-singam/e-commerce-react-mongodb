import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import {
  Container,
  FormContainer,
  Title,
  InputField,
  ErrorMessage,
  Button,
} from "../StyledComponents/LoginPageStyle";

const LoginPage = () => {
  const { data, changeHandler, signIn, goToSignUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    signIn();
  };

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <InputField
              type="email"
              {...register("email", {
                required: "Email is required",
                onChange: changeHandler,
              })}
              hasError={!!errors.email}
            />
            {errors.email && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.email.message}
              </ErrorMessage>
            )}
          </div>

          <div>
            <label>Password</label>
            <InputField
              type="password"
              {...register("password", {
                required: "Password is required",
                onChange: changeHandler,
              })}
              hasError={!!errors.password}
            />
            {errors.password && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.password.message}
              </ErrorMessage>
            )}
          </div>

          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="#3498db"
            hoverBg="#2980b9"
          >
            Login
          </Button>

          <Button
            type="button"
            onClick={goToSignUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="#2ecc71"
            hoverBg="#27ae60"
          >
            Sign Up
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
