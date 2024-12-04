import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);

ProgressProvider.propTypes = {
  children: PropTypes.node,
};
