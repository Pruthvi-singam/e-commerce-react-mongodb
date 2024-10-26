import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

const useSignUp = () => {
  const navigate = useNavigate();

  const signUp = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User signed up");

      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Error signing up:", err.message);
    }
  };

  return { signUp };
};

export default useSignUp;
