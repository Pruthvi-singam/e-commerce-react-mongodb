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
} from "../StyledComponents/SignUpPageStyles";

const SignUpPage = () => {
  const { data, changeHandler, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = () => {
    signUp();
  };

  return (
    <Container>
      <FormContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <label>Name</label>
            <InputField
              type="text"
              {...register("name", {
                required: "Name is required",
                onChange: changeHandler,
              })}
              value={data.name}
              name="name"
              hasError={!!errors.name}
            />
            {errors.name && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.name.message}
              </ErrorMessage>
            )}
          </div>

          {/* Mobile Number Field */}
          <div>
            <label>Mobile Number</label>
            <InputField
              type="text"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              value={data.mobile}
              name="mobile"
              hasError={!!errors.mobile}
            />
            {errors.mobile && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.mobile.message}
              </ErrorMessage>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label>Email</label>
            <InputField
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              value={data.email}
              onChange={changeHandler}
              name="email"
              hasError={!!errors.email}
            />
            {errors.email && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.email.message}
              </ErrorMessage>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label>Password</label>
            <InputField
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              value={data.password}
              onChange={changeHandler}
              name="password"
              hasError={!!errors.password}
            />
            {errors.password && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.password.message}
              </ErrorMessage>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label>Confirm Password</label>
            <InputField
              type="password"
              {...register("confirmPassword", {
                validate: (value) => value === password || "Passwords do not match",
              })}
              hasError={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <ErrorMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {errors.confirmPassword.message}
              </ErrorMessage>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="#3498db"
            hoverBg="#2980b9"
          >
            Sign Up
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignUpPage;
