import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { NavLink } from 'react-router-dom'
import './navbarcss.css'


const Navbar = () => {

  const { utente, logout } = useContext(AuthContext);

  return (
  
        <header className="header">
        <div className="logo">
          <img src="./Logo.png"></img>Torre Pallets</div>
        <nav className="nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>Chi Siamo</NavLink>
          <NavLink to={"/prodotti"}>Prodotti</NavLink>
        </nav>
        <div>

          {utente ? (
            <div className='Logout'>
              Benvenuto, {utente.nome} 
              <button onClick={logout} className="login">Logout</button>
            </div>
          ) : (
            <NavLink to={"/login"} className="login">Login</NavLink>
          )}
        
        <NavLink to={"/carrello"} className="cart">Carrello</NavLink>
        </div>
        
      </header>
        
    
  )
}

export default Navbar