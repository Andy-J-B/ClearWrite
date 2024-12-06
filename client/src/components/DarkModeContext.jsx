import { createContext, useContext, useState, useEffect } from "react";
// Import PropTypes
import PropTypes from "prop-types";

// Create DarkMode Context
const DarkModeContext = createContext();

// Create a provider for DarkModeContext
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

// Require ProgressProvider's children to be a node
DarkModeProvider.propTypes = {
  children: PropTypes.node,
};
