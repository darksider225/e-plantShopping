import { createContext, useContext, useState } from 'react';

// Create the context
const AddedToCartContext = createContext();

// Create the provider component
export const AddedToCartProvider = ({ children }) => {
  const [addedToCart, setAddedToCart] = useState({});

  return (
    <AddedToCartContext.Provider value={{ addedToCart, setAddedToCart }}>
      {children}
    </AddedToCartContext.Provider>
  );
};

// Custom hook to use the context
export const useAddedToCart = () => useContext(AddedToCartContext);
