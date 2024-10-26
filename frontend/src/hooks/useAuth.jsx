import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const useAuth = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = async () => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      navigate("/"); // Redirect to home page after login
    } catch (err) {
      console.error("Error signing in:", err.message);
    }
  };

  const signUp = async () => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up");
      await signOut(auth);
      navigate("/login"); // Redirect to login page after sign up
    } catch (err) {
      console.error("Error signing up:", err.message);
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return {
    data,
    changeHandler,
    signIn,
    signUp,
    goToSignUp,
    goToLogin,
  };
};

export default useAuth;
