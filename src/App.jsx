import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SectionContainer } from './modules/core/components/SectionContainer'
import { Header } from './modules/core/components/Header'

function App() {
  const [count, setCount] = useState(0)
  console.log("String")

  function aumentarContador() {
    setCount((count) => count + 1)


  }

  return (
    <>
    <Header />
     
  
    <SectionContainer>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NutriData</h1>
      <div className="card">
        <button onClick={
          aumentarContador
        }>
          count is {count}
        </button>
        <button on>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </SectionContainer>
    </>
  )
}

export default App
