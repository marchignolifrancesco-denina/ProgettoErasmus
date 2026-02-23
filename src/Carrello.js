import React, { useContext } from 'react';
import './Carrello.css';
import { CartContext } from './CartContext';

const Carrello = () => {
  const { carrello, rimuoviDalCarrello, svuotaCarrello, aggiornaQuantita } = useContext(CartContext);

  const totalPrice = carrello.reduce((acc, item) => acc + item.prezzo * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Il tuo carrello</h1>

      {carrello.length === 0 ? (
        <p className="empty-cart">Il carrello è vuoto.</p>
      ) : (
        <>
          <div className="cart-items">
            {carrello.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.immagini} alt={item.nome} />
                <div className="item-details">
                  <h3>{item.nome}</h3>
                  <p>€{item.prezzo}</p>

                  <div className="quantity-controls">
                    <button onClick={() => aggiornaQuantita(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => aggiornaQuantita(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => rimuoviDalCarrello(item.id)}>×</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Totale: €{totalPrice.toFixed(2)}</h2>
            <button className="checkout-btn" onClick={svuotaCarrello}>Svuota carrello</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrello;
