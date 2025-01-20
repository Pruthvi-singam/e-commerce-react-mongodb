import React, { createContext, useContext, useState, useEffect } from "react";

const OfferContext = createContext();

export const useOffer = () => useContext(OfferContext);

export const OfferProvider = ({ children }) => {
    const[Offer, setOffer] = useState(false)

const toggleOffer = ()=> {console.log(Offer);setOffer(!Offer)}
  return (
    <OfferContext.Provider value={{ Offer , toggleOffer }}>
{children}
    </OfferContext.Provider>
  );
};
