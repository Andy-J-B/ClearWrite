/*
 *** AbortControllerContext.jsx
 ***
 *** Description:
 *** This file defines a context for managing the `AbortController` reference across the application.
 *** The `AbortControllerContext` allows components to access a shared `AbortController` instance, which can be used to cancel ongoing asynchronous requests.
 ***
 *** Features:
 *** - Provides a shared `AbortController` reference to child components via context.
 *** - Ensures that any component can access the same instance of the `AbortController` for aborting requests.
 *** - Helps in canceling API calls or other long-running asynchronous operations.
 ***
 *** Components:
 *** - `AbortControllerProvider`: A context provider that wraps the application or parts of it, making the `AbortController` reference available globally.
 *** - `useAbortController`: A custom hook to easily access the `AbortController` reference in any component that needs it.
 ***
 *** Usage:
 *** - `AbortControllerProvider` should be used to wrap components that need access to the `AbortController`.
 *** - Components can use the `useAbortController` hook to retrieve the `AbortController` reference and call methods like `.abort()` when needed.
 ***
 *** Notes:
 *** - The `AbortController` allows components to cancel ongoing fetch requests or other asynchronous operations using a shared reference.
 *** - `PropTypes` ensures that `children` passed to `AbortControllerProvider` are valid React nodes.
 */

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
