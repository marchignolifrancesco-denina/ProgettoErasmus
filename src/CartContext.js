import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrello, setCarrello] = useState([]);

  // carica carrello da localStorage
  useEffect(() => {
    const salvato = JSON.parse(localStorage.getItem("carrello")) || [];
    setCarrello(salvato);
  }, []);

  // aggiungi prodotto al carrello
  const aggiungiAlCarrello = (prodotto) => {
    const esiste = carrello.find(p => p.id === prodotto.id);
    let nuovoCarrello;

    if (esiste) {
      // se già presente, aumento quantità
      nuovoCarrello = carrello.map(p =>
        p.id === prodotto.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      // altrimenti aggiungo con quantity = 1
      nuovoCarrello = [...carrello, { ...prodotto, quantity: 1 }];
    }

    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // rimuovi prodotto dal carrello
  const rimuoviDalCarrello = (id) => {
    const nuovoCarrello = carrello.filter(p => p.id !== id);
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // svuota carrello
  const svuotaCarrello = () => {
    setCarrello([]);
    localStorage.removeItem("carrello");
  };

  // modifica quantità
  const aggiornaQuantita = (id, quantity) => {
    const nuovoCarrello = carrello.map(p =>
      p.id === id ? { ...p, quantity: Math.max(quantity, 1) } : p
    );
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  return (
    <CartContext.Provider value={{
      carrello,
      aggiungiAlCarrello,
      rimuoviDalCarrello,
      svuotaCarrello,
      aggiornaQuantita
    }}>
      {children}
    </CartContext.Provider>
  );
};
