import React, { createContext, useState, useContext } from "react";

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const handleError = (message) => {
    setError(message);
  };
  return (
    <ErrorContext.Provider value={{ error, handleError }}>
      {error ? (
        <div style={{ color: "red", padding: "20px", textAlign: "center" }}>
          <h2>Error Occurred:</h2>
          <p>{error}</p>
        </div>
      ) : (
        children
      )}
    </ErrorContext.Provider>
  );
};
