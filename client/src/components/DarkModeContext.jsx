/*
 *** DarkModeContext.jsx
 ***
 *** Description:
 *** This file provides a context for managing and accessing the dark mode state across the application.
 *** The DarkModeContext allows components to toggle and read the dark mode status, and applies the corresponding class to the body element.
 ***
 *** Features:
 *** - Allows components to toggle between light and dark modes.
 *** - Updates the document body with the `dark-mode` class based on the current mode.
 *** - Provides the `isDarkMode` state and the `setIsDarkMode` function to child components via context.
 ***
 *** Components:
 *** - `DarkModeProvider`: A context provider that wraps the application and makes dark mode state available globally.
 *** - `useDarkMode`: A custom hook that makes accessing the dark mode state and function easier in any component.
 ***
 *** Usage:
 *** - `DarkModeProvider` should wrap the root component or any part of the app where dark mode is required.
 *** - Components can use the `useDarkMode` hook to access and update the dark mode status.
 ***
 *** Notes:
 *** - The `useEffect` hook updates the document body’s class based on the dark mode state.
 *** - The `isDarkMode` state is initially set to `false` (light mode) and can be toggled.
 *** - `PropTypes` ensures that `children` passed to `DarkModeProvider` are valid React nodes.
 */

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
