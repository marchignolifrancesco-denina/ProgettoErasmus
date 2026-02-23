import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext';
import './App.css'

const App = () => {
  const navigate = useNavigate();
  const { login: loginGlobale } = useContext(AuthContext);

  // stato per input
  const [mail, setMail] = useState("")
  const [pwd, setPwd] = useState("")
  const [errore, setErrore] = useState("")

  // recupero utenti
  const utenti = JSON.parse(localStorage.getItem("utente")) || []

   const login = () => {
    const utenteTrovato = utenti.find(u => u.email === mail);
    if (!utenteTrovato) {
      setErrore("Email non registrata");
      return;
    }
    if (utenteTrovato.password !== pwd) {
      setErrore("Password errata");
      return;
    }

    // login globale
    loginGlobale(utenteTrovato);
    navigate("/");
  }

  return (
    
      <div className="login-container">
        <h1>Benvenuto</h1>
        <p>Accedi al tuo account</p>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="nome@email.it"
            onChange={e => setMail(e.target.value)}
          />
        </div>
        

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            onChange={e => setPwd(e.target.value)}
          />
        </div>

        <button onClick={login} className="login-button">
          Login
        </button>

        {errore && <p className="errore">{errore}</p>}

        <div className="extra-links">
          <p>
            Non hai un account? - {" "}
            <NavLink to="/register">Registrati</NavLink>
          </p>
        </div>
      </div>

    
  )
}

export default App
