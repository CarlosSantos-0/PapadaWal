import './App.css'
import Carrinho from './components/Carrinho/Carinho'
import Envio from './components/Envio/Envio'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Toolbar from './components/Toolbar/Toolbar'
import Vitrine from './components/Vitrine/Vitrine'

import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <Toolbar/>
      <Routes>

        <Route path='/' element={<Main/>}/>
        <Route path="/produtos" element={<Vitrine/>} />
        <Route path="/sobre" element={<h2> Sobre nós em breve...</h2>} />
        <Route path='/log-in' element={<Login/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
