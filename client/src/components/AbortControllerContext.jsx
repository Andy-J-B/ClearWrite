// Import context
import { createContext, useContext, useRef } from "react";
// Import PropTypes
import PropTypes from "prop-types";

// Create a context for managing AbortController
const AbortControllerContext = createContext(null);

// Custom hook to use the AbortController context
export const useAbortController = () => {
  return useContext(AbortControllerContext);
};

// Provider to wrap around your app or specific components
export const AbortControllerProvider = ({ children }) => {
  const abortControllerRef = useRef(null);

  // Make Abort Controller usable for it's children
  return (
    <AbortControllerContext.Provider value={abortControllerRef}>
      {children}
    </AbortControllerContext.Provider>
  );
};

// Require AbortControllerProvider's children to be nodes
AbortControllerProvider.propTypes = {
  children: PropTypes.node,
};
