import React from "react";
import {
  GridContainer,
  GridItem,
  OfferTitle,
  OfferButton,
  GridImage,
} from "../StyledComponents/OfferGridStyles"; // Import styled components
import p3 from "../Images/blog-09.png";

const OfferGrid = () => {
  return (
    <GridContainer>
      <GridItem
        className="large"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage
          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?fit=crop&w=800&q=80"
          alt="Offer 6"
        />
        <div className="content">
          <OfferTitle>Get up to 50% off!</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>Get Discount</OfferButton>
        </div>
      </GridItem>

      <GridItem
        className="wide"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?fit=crop&w=800&q=80"
          alt="Offer 7"
        />
        <div className="content">
          <OfferTitle>Bring Bold Fashion</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>
            Explore Collection
          </OfferButton>
        </div>
      </GridItem>

      <GridItem
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage src={p3} alt="Offer 3" />
        <div className="content">
          <OfferTitle>Exclusive Deals</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>Avail Offers</OfferButton>
        </div>
      </GridItem>

      <GridItem
        className="tall"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fit=crop&w=800&q=80"
          alt="Offer 5"
        />
        <div className="content">
          <OfferTitle>Winter's Weekend</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>Shop Now</OfferButton>
        </div>
      </GridItem>

      <GridItem
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?fit=crop&w=300&q=80"
          alt="Offer 3"
        />
        <div className="content">
          <OfferTitle>Exclusive Deals</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>Avail Offers</OfferButton>
        </div>
      </GridItem>
      <GridItem
        className="wide"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        <GridImage
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?fit=crop&w=800&q=80"
          alt="Offer 4"
        />
        <div className="content">
          <OfferTitle>Bring Bold Fashion</OfferTitle>
          <OfferButton whileTap={{ scale: 0.95 }}>
            Explore Collection
          </OfferButton>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default OfferGrid;
