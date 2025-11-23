import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './cafe.module.css'

function App() {


  return (
    <>
     
      <header>
    
        <nav className={stylyes.nav}>
          <p>Café Aroma</p>
            <ul className={styles.nav-links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Produtos</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#contatos">contatos</a></li>
            </ul>
        </nav>
      </header>

   
    </>
  )
}

export default App
