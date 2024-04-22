import { useState } from 'react'
import Sessao from './components/sessao'
import Galeria from './components/galeria'
import Cabecalho from './components/cabecalho.jsx'
import Rodape from './components/rodape.jsx'
import './App.css'

function App() {
  return (
    <>
    <Cabecalho/>
    <Sessao/>
    <Galeria/>
    <Rodape/>
    </>
  )
}

export default App
