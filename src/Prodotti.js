import { useState,  useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { CartContext } from './CartContext';

import './Prodotti.css';

const Products = () => {
  const [category, setCategory] = useState("tutti");
  const { utente, logout } = useContext(AuthContext);
  const { aggiungiAlCarrello } = useContext(CartContext);

  const URL = "https://raw.githubusercontent.com/marchignolifrancesco-denina/ProgettoErasmus/refs/heads/main/catalogo.json"
  const [Products, setProducts] = useState([])
  useEffect (()=>{
  fetch(URL)
  .then((testo)=> testo.json())
  .then((miojson)=>{setProducts(miojson)})
  },[])

  

  const filteredProducts = category === "tutti"
    ? Products
    : Products.filter(p => p.categoria === category);

  const addToCart = (product) => {
    if (!utente) return; // blocca utenti non loggati
      aggiungiAlCarrello(product); // aggiunge al carrello globale
  };

  return (
    <div className="products-container">
      <h1>Prodotti in vendita</h1>

      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="tutti">Tutti</option>
          <option value="Europallet">Europallet</option>
          <option value="Pallet in legno">Pallet in legno</option>
          <option value="Pallet in plastica">Pallet in plastica</option>
          <option value="Pallet industriale">Pallet Industriale</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.immagini[0]} alt={product.nome} />

            <h3>{product.nome}</h3>
            <p className="description">{product.descrizione}</p>
            <div className="card-bottom">
            <p className="price">€ {product.prezzo} </p>
            Disponibilità: {product.disponibilita}

            <button
              disabled={!utente}
              onClick={() => addToCart(product)}
            >
              Aggiungi al carrello
            </button>

            {!utente && (
              <p className="login-warning">
                Devi essere loggato per acquistare
              </p>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
