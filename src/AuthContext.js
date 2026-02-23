import React, { createContext, useState, useEffect } from "react";

// Creo il contesto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [utente, setUtente] = useState(null);

  // Controllo se c'è un utente salvato in localStorage
  useEffect(() => {
    const utenteSalvato = JSON.parse(localStorage.getItem("utenteLoggato"));
    if (utenteSalvato) {
      setUtente(utenteSalvato);
    }
  }, []);

  // funzione per fare login
  const login = (utente) => {
    setUtente(utente);
    localStorage.setItem("utenteLoggato", JSON.stringify(utente));
  };

  // funzione per fare logout
  const logout = () => {
    setUtente(null);
    localStorage.removeItem("utenteLoggato");
  };

  return (
    <AuthContext.Provider value={{ utente, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
