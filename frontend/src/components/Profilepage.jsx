import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../firebase";
import defaultProfilePic from "../Images/p8.png";
import {
  ProfileContainer,
  StyledProfileName,
  ProfileHeader,
  ProfileImageContainer,
  ProfileImage,
  EditOverlay,
  HiddenFileInput,
  ProfileDetails,
  ProfileName,
  GridContainer,
  GridItem,
} from "../StyledComponents/ProfilePageStyles";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // Added state to hold the user's name
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Fetch the email and name from Firebase Auth
      setEmail(user.email);
      setName(user.displayName || "Add your name");

      // Fetch the profile picture from Firebase Storage
      const profilePicRef = ref(storage, `profilePics/${user.uid}.jpg`);
      getDownloadURL(profilePicRef)
        .then((url) => {
          setProfilePic(url);
        })
        .catch((error) => {
          console.error("Error fetching profile picture:", error);
          setProfilePic(defaultProfilePic);
        });
    } else {
      // Fallback for not authenticated users
      setEmail("Add email");
      setName("Add your name");
      setProfilePic(defaultProfilePic);
    }
  }, []);

  const handleProfilePicChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);

      const profilePicRef = ref(
        storage,
        `profilePics/${auth.currentUser.uid}.jpg`
      );
      try {
        await uploadBytes(profilePicRef, file);
        console.log("Profile picture uploaded successfully");
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  return (
    <ProfileContainer>
      <StyledProfileName>Your Account</StyledProfileName>
      <ProfileHeader>
        <ProfileImageContainer>
          <ProfileImage src={profilePic} alt="Profile" />
          <EditOverlay>
            Edit
            <HiddenFileInput type="file" onChange={handleProfilePicChange} />
          </EditOverlay>
        </ProfileImageContainer>
        <ProfileDetails>
          <ProfileName>Name: {name}</ProfileName> {/* Display user name */}
          <ProfileName>Email: {email}</ProfileName> {/* Display user email */}
        </ProfileDetails>
      </ProfileHeader>

      <GridContainer>
        <GridItem>
          <h3>Your Orders</h3>
          <p>Track, return, or cancel an order</p>
        </GridItem>
        <GridItem>
          <h3>Your Addresses</h3>
          <p>Edit, remove, or set a default address</p>
        </GridItem>
        <GridItem>
          <h3>Login & Security</h3>
          <p>Edit login, name, and mobile number</p>
        </GridItem>
        <GridItem>
          <h3>Your Payments</h3>
          <p>Manage payment methods and settings</p>
        </GridItem>
        <GridItem>
          <h3>Prime</h3>
          <p>Manage your membership and view benefits</p>
        </GridItem>
        <GridItem>
          <h3>Gift Cards</h3>
          <p>View balance or redeem a card</p>
        </GridItem>
        <GridItem>
          <h3>Your Lists</h3>
          <p>View, modify, and share your lists</p>
        </GridItem>
        <GridItem>
          <h3>Digital Services & Device Support</h3>
          <p>Troubleshoot device issues</p>
        </GridItem>
        <GridItem>
          <h3>Customer Service</h3>
          <p>Browse self-service options or contact us</p>
        </GridItem>
      </GridContainer>
    </ProfileContainer>
  );
};

export default ProfilePage;
