import React, { createContext, useContext, useRef } from "react";

// Create a context for managing AbortController
const AbortControllerContext = createContext(null);

// Custom hook to use the AbortController context
export const useAbortController = () => {
  return useContext(AbortControllerContext);
};

// Provider to wrap around your app or specific components
export const AbortControllerProvider = ({ children }) => {
  const abortControllerRef = useRef(null);

  return (
    <AbortControllerContext.Provider value={abortControllerRef}>
      {children}
    </AbortControllerContext.Provider>
  );
};
