import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className="fundo">
      <div>
        <p>Lista</p>
      </div>
      <div className="in" >
        <input  placeholder='Digite sua tarefa'></input>
        <button>Ad Tarefa</button>
      </div>
      <div>
        <p>Suas Tarefas:</p>
      </div>

      </div>


    </>
  )
}

export default App
