import React, { useState, useEffect, useRef } from "react";
import profilePic from "../Images/p8.png";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import {
  ProfileContainer,
  ProfileImage,
  DropdownMenu,
  DropdownItem,
} from "../StyledComponents/ProfileDropdownStyles";

const ProfileDropdown = () => {
  const { presentUser } = useAuth();
  console.log("Present User in ProfileDropdown:", presentUser);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/Profile");
  };

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ProfileContainer ref={dropdownRef}>
      <ProfileImage
        src={profilePic}
        alt="Profile"
        onClick={handleDropdownToggle}
      />
      {presentUser ? (
        <DropdownMenu isOpen={isOpen}>
          <DropdownItem onClick={goToProfile}>My Profile</DropdownItem>
          <DropdownItem href="/settings">Settings</DropdownItem>
          <DropdownItem href="/help">Help</DropdownItem>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu isOpen={isOpen}>
          <DropdownItem href="/settings">Settings</DropdownItem>
          <DropdownItem href="/help">Help</DropdownItem>
          <DropdownItem href="/login">Login</DropdownItem>
        </DropdownMenu>
      )}
    </ProfileContainer>
  );
};

export default ProfileDropdown;
