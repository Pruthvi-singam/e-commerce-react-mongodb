import React, { useState, useEffect, useRef } from "react";
import profilePic from "../Images/p8.png";
import { useNavigate ,useLocation} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  ProfileContainer,
  ProfileImage,
  DropdownMenu,
  DropdownItem,
} from "../StyledComponents/ProfileDropdownStyles";
import useAuthFunctions from "../hooks/useAuth";
const ProfileDropdown = () => {
  const {signout}  = useAuthFunctions()
  const { presentUser,adminId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation()
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
      signout()
      console.log("User signed out successfully");
      if(location.pathname=="/Profile")
        navigate("/login")
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
      {presentUser ==adminId? (
        <DropdownMenu isOpen={isOpen}>
    
          <DropdownItem href="/settings">Settings</DropdownItem>
          <DropdownItem href="/help">Help</DropdownItem>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      ) : 
      (
        <DropdownMenu>
        <DropdownItem onClick={goToProfile}>My Profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownItem href="/help">Help</DropdownItem>
        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      )
      (
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
