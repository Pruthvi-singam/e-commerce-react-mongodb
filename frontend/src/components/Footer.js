// Footer.js
import React from "react";
import {
  FooterContainer,
  FooterColumn,
  AppDownloadSection,
  SocialMediaSection,
} from "../StyledComponents/FooterStyles"; // Import styled components
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      {/* Column 1: Online Shopping */}
      <FooterColumn>
        <h4>Online Shopping</h4>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
      </FooterColumn>

      {/* Column 2: Useful Links */}
      <FooterColumn>
        <h4>Useful Links</h4>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <a href="#">Track Orders</a>
        <a href="#">Shipping</a>
        <a href="#">Returns</a>
      </FooterColumn>

      {/* Column 3: App Download and Social Media */}
      <FooterColumn>
        <h4>Experience Our App</h4>
        <AppDownloadSection>
          <img
            src="https://via.placeholder.com/150x50?text=Google+Play"
            alt="Google Play"
          />
          <img
            src="https://via.placeholder.com/150x50?text=App+Store"
            alt="App Store"
          />
        </AppDownloadSection>
        <SocialMediaSection>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </SocialMediaSection>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
