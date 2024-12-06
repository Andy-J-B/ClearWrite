/*
 *** ProgressContext.jsx
 ***
 *** Description : contains ProgressProvider
 ***               used for providing the progress of apis requests to loadingPage
 */

// Import all necessary files

// import context
import { createContext, useState, useContext } from "react";
// Import PropTypes
import PropTypes from "prop-types";

// Create a Progress Context
const ProgressContext = createContext();

// ProgressProvider function to provide progress for loadingPage
export const ProgressProvider = ({ children }) => {
  // Set progress to 0
  const [progress, setProgress] = useState(0);

  // Make the value progress usable to it's children
  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Export ProgressContext
export const useProgress = () => useContext(ProgressContext);

// Require ProgressProvider's children to be a node
ProgressProvider.propTypes = {
  children: PropTypes.node,
};
