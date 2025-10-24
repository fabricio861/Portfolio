import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setTarefas([...tarefas, { text: tarefa, done: false }]);
    setTarefa('');
  };

  const toggleConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].done = !novasTarefas[index].done;
    setTarefas(novasTarefas);
  };

  const deletarTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };


  return (
 <div className="fundo">
      <h1>Minha Lista de Tarefas</h1>

      <div className="in">
        <input
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div className="todo-list">
        {tarefas.map((t, index) => (
          <div
            key={index}
            className={`todo-item ${t.done ? 'concluida' : ''}`}
          >
            <span onClick={() => toggleConcluida(index)}>{t.text}</span>
            <button onClick={() => deletarTarefa(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
