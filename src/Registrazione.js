import React from 'react'
import './Registrazione.css'
import { NavLink, useNavigate} from 'react-router-dom'

const Registrazione = () => {
  let apricomponente = useNavigate()
  let password1 = ""
  let password2 = ""
  let mail = ""
  let nome = ""
  let cognome = ""

  let utenti=[]

  const salva =()=>{
    let utente ={
      nome:"",
      cognome:"",
      email:"",
      password:"",
    }

    if(password1 == password2)
    {
      utente.cognome=cognome
      utente.nome=nome
      utente.password=password1
      utente.email=mail
      utenti.push(utente)

      localStorage.setItem("utente",JSON.stringify(utenti))
      apricomponente("/login")
      //Cambia lo stato del login a "true"
    }
    else{
        alert("Una delle informazioni inserite non sono corrette o mancanti.")
    }
  }

  const pwd =(password)=>{
    password1 = password.target.value
  }

  const confermapwd =(password)=>{
    password2 = password.target.value
  }

  const prendimail =(mailinput)=>{
    mail = mailinput.target.value
  }

  const legginome =(inputnome)=>
  {
    nome = inputnome.target.value
  }
  
  const leggicognome =(inputcognome)=>
  {
    cognome = inputcognome.target.value
  }


  return (

    
    <div>
       <div class="register-container">
    <h1>Crea Account</h1>
    <p>Registrati per iniziare</p>

  
      <div class="form-row">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input onChange={legginome} type="text" id="nome" placeholder="Mario" required />
        </div>
        <div class="form-group">
          <label for="cognome">Cognome</label>
          <input onChange={leggicognome} type="text" id="cognome" placeholder="Rossi" required />
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input onChange={prendimail} type="email" id="email" placeholder="nome@email.it" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input onChange={pwd} type="password" id="password" placeholder="••••••••" required />
      </div>

      <div class="form-group">
        <label for="confirm-password">Conferma Password</label>
        <input onChange={confermapwd} type="password" id="confirm-password" placeholder="••••••••" required />
      </div>

      <button onClick={salva} class="register-button">Registrati</button>
    

    <div class="extra-links">
      <p>Hai già un account? <NavLink to={"/login"}>Accedi</NavLink></p>
    </div>
  </div>
    </div>
  )
}

export default Registrazione