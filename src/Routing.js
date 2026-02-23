import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from "./App"
import Registrazione from "./Registrazione"
import Errore from './Errore'
import Navbar from './Navbar'
import Home from './Home'
import Carrello from './Carrello'
import Chisiamo from './Chisiamo'
import Prodotti from './Prodotti'

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/carrello' element={<Carrello/>}/>
            <Route path='/about' element={<Chisiamo/>} />
            <Route path='/prodotti' element={<Prodotti/>} />
            <Route path='/login' element={<App/>} />
            <Route path='/register' element={<Registrazione/>} />
            <Route path='*' element={<Errore/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing