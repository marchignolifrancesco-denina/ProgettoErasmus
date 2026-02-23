import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Home.css'

const Home = () => {


  // const URL = "https://raw.githubusercontent.com/marchignolifrancesco-denina/ProgettoErasmus/refs/heads/main/catalogo.json"
  //   const [Nomestato, setNomestato] = useState([])

  //       useffect (()=>{
  //           fetch(url)
  //           .then((testo)=> testo.json())
  //           .then((miojson)=>{setNomeStato(miojson)})
  //       },[])



  return (
    <div className="home">
      

      <section className="hero">
        <div className="hero-content">
          <h1>Pallet Professionali</h1>
          <p>qualità premium, spedizione veloce</p>
          <NavLink to={"/prodotti"} className="primary-btn">Acquista</NavLink>

        </div>
      </section>

      <section className="products">
        <h2>Prodotti in evidenza</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image" />
            <h3>Prodotto One</h3>
            <span>€49,99</span>
          </div>
          <div className="product-card">
            <div className="product-image" />
            <h3>Prodotto Two</h3>
            <span>€59,99</span>
          </div>
          <div className="product-card">
            <div className="product-image" />
            <h3>Prodotto Three</h3>
            <span>€39,99</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Iscriviti alla newsletter</h2>
        <p>Ricevi offerte esclusive e novità</p>
        <div className="cta-form">
          <input type="email" placeholder="La tua email" />
          <button>Iscriviti</button>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 ShopNow. Tutti i diritti riservati.</span>
      </footer>
    </div>
  );
}

export default Home