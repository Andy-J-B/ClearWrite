/*
 *** ProgressContext.jsx
 ***
 *** Description: Provides a shared context for managing and accessing progress state across components.
 ***              This is used for tracking progress on the loading screen.
 ***
 *** Components:
 *** - ProgressProvider: Wraps child components and provides `progress` and `setProgress` through context.
 ***
 *** Features:
 *** - Shared State: Allows multiple components to access and update progress seamlessly.
 ***
 *** Functions:
 *** - useProgress: A custom hook to access `progress` and `setProgress` from the context.
 ***
 *** PropTypes:
 *** - `ProgressProvider`: Ensures `children` is a valid React node.
 ***
 *** Notes:
 *** - `ProgressProvider` wraps any components that need access to the progress state.
 *** - Designed with React's `useContext` and `useState` for simplicity and efficiency.
 ***
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
